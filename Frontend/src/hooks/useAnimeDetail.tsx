import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "@/services/apiClient";
import { Anime } from "@/entities/Anime";

const apiClient = new APIClient<FetchResponse<Anime>>("/anime");

const useAnimeDetail = (id: string) =>
  useQuery<FetchResponse<Anime>, Error>({
    queryKey: ["animeDetail", id],
    queryFn: () => apiClient.get(id),
    retry: 3,
  });

export default useAnimeDetail;
