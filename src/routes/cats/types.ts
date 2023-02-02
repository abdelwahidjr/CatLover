import { Breed } from "../breeds/types";

export type CatImage = {
  breeds?: Breed[];
  height?: string;
  id: string;
  url?: string;
  width?: string;
};

export type SearchQueryParams = {
  page?: number;
  breed_ids?: string;
};
