import React, { useEffect, useState } from "react";
import apiClient from "@/services/api-client";
import { Text } from "@chakra-ui/react";

interface Anime {
  mal_id: number;
  title: string;
}

interface FetchAnimeResponse {
  pagination: object;
  data: Anime[];
}

const AnimeGrid = () => {
  const [animes, setAnimes] = useState<Anime[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchAnimeResponse>("/xanime")
      .then((res) => setAnimes(res.data.data))
      .catch((err) => setError(err.message));
  });

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {animes.map((anime) => (
          <li key={anime.mal_id}>{anime.title}</li>
        ))}
      </ul>
    </>
  );
};

export default AnimeGrid;
