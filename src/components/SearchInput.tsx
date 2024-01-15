import styled from "@emotion/styled";
import { ChangeEvent } from "react";
import { IoSearch } from "react-icons/io5";

type Props = {
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};

const SearchInputStyled = styled.div`
  width: fit-content;
  height: fit-content;
  position: relative;
  & .input-search {
    height: 50px;
    width: 50px;
    border-style: none;
    padding: 10px;
    font-size: 18px;
    letter-spacing: 2px;
    outline: none;
    border-radius: 25px;
    transition: all .5s ease-in-out;
    background-color: var(--color-primary);
    padding-right: 40px;
    color: #fff;
  }
  
  & .input-search::placeholder {
    color: rgba(255, 255, 255, .5);
    font-size: 18px;
    letter-spacing: 2px;
    font-weight: 100;
  }
  
  & .btn-search {
    display: grid;
    place-content: center;
    width: 50px;
    height: 50px;
    border-style: none;
    font-size: 20px;
    font-weight: bold;
    outline: none;
    cursor: pointer;
    border-radius: 50%;
    position: absolute;
    right: 0px;
    color: var(--background-color);
    background-color: transparent;
    pointer-events: painted;
  }
  
  & .btn-search:focus~.input-search {
    width: 300px;
    border-radius: 0px;
    background-color: transparent;
    border-bottom: 1px solid rgba(255, 255, 255, .5);
    transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
  }
  
  & .input-search:focus {
    width: 300px;
    border-radius: 0px;
    background-color: transparent;
    border-bottom: 1px solid rgba(255, 255, 255, .5);
    transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
  }
`;

const SearchInput = (props: Props) => {
  return (
    <SearchInputStyled>
      <button className="btn-search">
        <IoSearch />
      </button>
      <input
        type="text"
        className="input-search"
        placeholder={props.placeholder ?? ""}
        onChange={props.onChange}
        value={props.value ?? ''}
      />
    </SearchInputStyled>
  );
};

export default SearchInput;
