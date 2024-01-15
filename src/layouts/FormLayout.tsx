import styled from "@emotion/styled";
import SearchInput from "../components/SearchInput";
import Logo from "../components/Logo";
import { useFindCharactersQuery, useListCharactersQuery } from "../api/queries";
import CharacterCard from "../components/CharacterCard";
import { ChangeEvent, useEffect, useState } from "react";
import { Character } from "../api/rest";
import { useInView } from "react-intersection-observer";
import { useDebounce } from "usehooks-ts";
import Loader from "../components/Loader";

const FormLayoutStyled = styled.div`
  width: 100%;
  min-width: 720px;
  height: 680px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  & .items-wrapper {
    overflow: auto;
    & .items {
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 16px;
      flex-wrap: wrap;
    }
    & button {
      margin-top: 16px;
      width: 100%;
      padding: 16px;
      background-color: transparent;
      color: #fff;
    }
  }

  @media (max-height: 680px) {
    height: 90vh
  }

  @media (max-width: 768px) {
    width: 100%;
    min-width: 100%;
  }
`;

const FormLayout = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const { data, fetchNextPage, isLoading, isFetchingNextPage, hasNextPage } =
    useListCharactersQuery();
  const { inView, ref } = useInView();
  const [value, setValue] = useState<string>("");
  const debouncedValue = useDebounce<string>(value, 500);
  const {
    data: dataFind,
    refetch,
    isLoading: loadingFind,
  } = useFindCharactersQuery(debouncedValue);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    if (data) {
      setCharacters([]);
      for (let i = 0; i < data.pages.length; i++) {
        const e = data.pages[i];
        setCharacters((prev) => [...prev, ...e.results]);
      }
    }
  }, [data]);

  useEffect(() => {
    if (dataFind) setCharacters(dataFind.results);
  }, [dataFind]);

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  useEffect(() => {
    refetch();
  }, [debouncedValue]);

  return (
    <FormLayoutStyled>
      <Logo width="320px" />
      <div className="search-wrapper">
        <SearchInput
          placeholder="Busca tu personaje..."
          onChange={handleChange}
          value={value}
        />
      </div>
      <div className="items-wrapper">
        <div className="items">
          {loadingFind || isLoading ? (
            <Loader />
          ) : (
            characters.map((e) => (
              <CharacterCard
                image={e.image}
                name={e.name}
                location={e.location.name}
                type={e.type}
                key={e.id}
              />
            ))
          )}
        </div>
        {
          !debouncedValue ? <button
          ref={ref}
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? "Cargando más datos..."
            : hasNextPage
            ? "Actualizar datos"
            : ""}
        </button> : null
        }
      </div>
    </FormLayoutStyled>
  );
};

export default FormLayout;
