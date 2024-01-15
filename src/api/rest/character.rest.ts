import clientHttp from "../client-http";
import { endpoints } from "../endpoints";

export type Character = {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  type: string;
  gender: "Female" | "Male" | "Genderless" | "unknown";
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type PropsRequestCharacters = {
  page?: number;
  name?: string;
};

export type ResponseCharacters = {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string | null;
  };
  results: Character[];
};

export const getListCharacters = async (params: PropsRequestCharacters) => {
  const { data } = await clientHttp.get<ResponseCharacters>(
    endpoints.getListCharacters,
    {
      params,
    }
  );

  return data;
};
