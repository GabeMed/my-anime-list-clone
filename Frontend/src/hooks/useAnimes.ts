import { useEffect, useState } from "react";
import apiClient from "@/services/api-client";
import { CanceledError } from "axios";

interface Genre {
  mal_id: number;
  type: string;
  name: string;
}

export interface Anime {
  mal_id: number;
  title: string;
  genres: Genre[];
  score: number;
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
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<FetchAnimeResponse>("/anime", { signal: controller.signal })
      .then((res) => {
        setAnimes(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { animes, error, isLoading };
};

export default useAnimes;
