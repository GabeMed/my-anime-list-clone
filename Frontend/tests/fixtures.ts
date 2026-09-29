import Anime from "@/entities/Anime";

export const makeAnime = (overrides: Partial<Anime> = {}): Anime => ({
  mal_id: 5114,
  title: "Fullmetal Alchemist: Brotherhood",
  synopsis: "Two brothers search for the Philosopher's Stone.",
  trailer: { youtube_id: "", url: "", embed_url: "" },
  genres: [
    { mal_id: 1, name: "Action" },
    { mal_id: 2, name: "Adventure" },
  ],
  score: 9.1,
  type: "TV",
  streaming: [{ name: "Crunchyroll", url: "https://example.com" }],
  studios: [{ mal_id: 4, name: "Bones" }],
  producers: [{ mal_id: 17, name: "Aniplex" }],
  images: { webp: { large_image_url: "https://example.com/cover.webp" } },
  ...overrides,
});
