import { create } from "zustand";
import { AnimeType } from "./utils/animeType";

interface AnimeQuery {
  searchText?: string;
  genreId?: number;
  type?: AnimeType | "All";
  orderBy?: string;
  orderDirection?: string;
}

export interface AnimeQueryStore {
  animeQuery: AnimeQuery;
  setSearchText: (searchText: string) => void;
  setGenderId: (genderId: number) => void;
  setType: (type: AnimeType | "All") => void;
  setOrder: (orderBy: string, orderDirection: string) => void;
}

const useAnimeQueryStore = create<AnimeQueryStore>((set) => ({
  animeQuery: { type: "All" },
  setSearchText: (searchText: string) =>
    set((store) => ({
      animeQuery: {
        ...store.animeQuery,
        searchText,
        type: "All",
        genreId: undefined,
      },
    })),
  setGenderId: (genreId) =>
    set((store) => ({ animeQuery: { ...store.animeQuery, genreId } })),
  setType: (type) =>
    set((store) => ({ animeQuery: { ...store.animeQuery, type } })),
  setOrder: (orderBy, orderDirection) =>
    set((store) => ({
      animeQuery: { ...store.animeQuery, orderBy, orderDirection },
    })),
}));

export default useAnimeQueryStore;
