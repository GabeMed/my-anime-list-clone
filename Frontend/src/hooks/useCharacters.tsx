import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "@/services/apiClient";
import { CharacterVoiceRole } from "@/entities/CharacterVoiceRole";

const apiClient = new APIClient<FetchResponse<CharacterVoiceRole[]>>("/anime");

const useCharacters = (id: string) =>
  useQuery<FetchResponse<CharacterVoiceRole[]>, Error>({
    queryKey: ["characterVoiceRole", id],
    queryFn: () => apiClient.get(id, "/characters"),
    retry: 3,
  });

export default useCharacters;
