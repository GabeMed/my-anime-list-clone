import { beforeEach, describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GenreList from "@/components/GenreList";
import useAnimeQueryStore from "@/store";
import { renderWithProviders } from "./render";

describe("GenreList", () => {
  beforeEach(() => useAnimeQueryStore.setState({ animeQuery: { type: "All" } }));

  it("lists the bundled genres without a network request", () => {
    renderWithProviders(<GenreList />);

    expect(screen.getByRole("button", { name: "Action" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Shounen" })).toBeInTheDocument();
  });

  it("selects a genre and clears it on a second click", async () => {
    renderWithProviders(<GenreList />);
    const action = screen.getByRole("button", { name: "Action" });

    await userEvent.click(action);
    expect(useAnimeQueryStore.getState().animeQuery.genreId).toBe(1);

    await userEvent.click(action);
    expect(useAnimeQueryStore.getState().animeQuery.genreId).toBe(0);
  });
});
