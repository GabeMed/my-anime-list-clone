import { beforeEach, describe, expect, it, vi } from "vitest";
import { screen } from "@testing-library/react";
import AnimeGrid from "@/components/AnimeGrid";
import useAnimeQueryStore from "@/store";
import { renderWithProviders } from "./render";
import { makeAnime } from "./fixtures";

const { getAll } = vi.hoisted(() => ({ getAll: vi.fn() }));

vi.mock("@/services/apiClient", () => ({
  default: class {
    getAll = getAll;
  },
}));

describe("AnimeGrid", () => {
  beforeEach(() => {
    getAll.mockReset();
    useAnimeQueryStore.setState({ animeQuery: { type: "All" } });
  });

  it("renders a card per anime", async () => {
    getAll.mockResolvedValue({
      pagination: { has_next_page: false },
      data: [makeAnime(), makeAnime({ mal_id: 1, title: "Cowboy Bebop" })],
    });

    renderWithProviders(<AnimeGrid />);

    expect(await screen.findByText("Cowboy Bebop")).toBeInTheDocument();
    expect(screen.getByText("Fullmetal Alchemist: Brotherhood")).toBeInTheDocument();
  });

  it("shows the API error instead of crashing", async () => {
    // Jikan often answers 429/504. The hook order used to change when the
    // error arrived, which made React throw instead of rendering this message.
    getAll.mockRejectedValue(new Error("Request failed with status code 504"));

    renderWithProviders(<AnimeGrid />);

    expect(await screen.findByText("Request failed with status code 504")).toBeInTheDocument();
  });
});
