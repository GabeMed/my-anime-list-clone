import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import AnimeCard from "@/components/AnimeCard";
import { renderWithProviders } from "./render";
import { makeAnime } from "./fixtures";

describe("AnimeCard", () => {
  it("shows the title, score, type and genres and links to the detail page", () => {
    renderWithProviders(<AnimeCard anime={makeAnime()} />);

    expect(screen.getByRole("heading", { name: "Fullmetal Alchemist: Brotherhood" })).toBeInTheDocument();
    expect(screen.getByText("9.10")).toBeInTheDocument();
    expect(screen.getByText("TV")).toBeInTheDocument();
    expect(screen.getByText("Action")).toBeInTheDocument();
    expect(screen.getByText("Adventure")).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute("href", "/anime/5114");
  });

  it("falls back to TV for types it doesn't know", () => {
    renderWithProviders(<AnimeCard anime={makeAnime({ type: "TV Special" })} />);

    expect(screen.getByText("TV")).toBeInTheDocument();
  });
});
