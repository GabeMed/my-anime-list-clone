import { useEffect, useState } from "react";
import apiClient from "@/services/api-client";
import { CanceledError } from "axios";

export interface Anime {
  mal_id: number;
  title: string;
  images: {
    webp: {
      large_image_url: string;
    };
  };
}

interface FetchAnimeResponse {
  pagination: object;
  data: Anime[];
}

const useAnimes = () => {
  const [animes, setAnimes] = useState<Anime[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchAnimeResponse>("/anime", { signal: controller.signal })
      .then((res) => setAnimes(res.data.data))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { animes, error };
};

export default useAnimes;
