import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getListCharacters } from "../rest";

export const useListCharactersQuery = () =>
  useInfiniteQuery({
    queryKey: ["Characters"],
    queryFn: ({ pageParam = 1 }) => getListCharacters({ page: pageParam }),
    getPreviousPageParam: (firstPage) => {
      if (firstPage.info.prev) {
        const url = new URL(firstPage.info.prev);
        const page = url.searchParams.get("page");
        if (page) return Number(page);
      }
      return undefined;
    },
    getNextPageParam: (lastPage) => {
      if (lastPage.info.next) {
        const url = new URL(lastPage.info.next);
        const page = url.searchParams.get("page");
        if (page) return Number(page);
      }
      return undefined;
    },
    initialPageParam: 1,
  });

export const useFindCharactersQuery = (name: string | null) =>
  useQuery({
    queryKey: ["Character", name],
    queryFn: async () => getListCharacters({ name: name ?? '' }),
    enabled: name !== null,
  });
