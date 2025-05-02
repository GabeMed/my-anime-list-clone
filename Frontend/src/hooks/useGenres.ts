import genres from "@/data/genres";
import APIClient, { FetchResponse } from "@/services/apiClient";
import ms from "ms";
import { useQuery } from "@tanstack/react-query";
import { Genre } from "@/entities/Genre";

const apiClient = new APIClient<Genre[]>("/genres/anime");

const useGenres = () =>
  useQuery<FetchResponse<Genre[]>>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: genres,
  });

export default useGenres;
