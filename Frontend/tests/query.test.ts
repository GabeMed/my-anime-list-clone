import { beforeEach, describe, expect, it } from "vitest";
import { buildAnimeParams } from "@/hooks/useAnimes";
import useAnimeQueryStore from "@/store";
import { cleanSynopsis } from "@/utils/synopsis";

describe("buildAnimeParams", () => {
  it("omits the type filter for All and the genre filter when cleared", () => {
    const params = buildAnimeParams({ type: "All", genreId: 0 }, 2);

    expect(params).not.toHaveProperty("type");
    expect(params.genres).toBeUndefined();
    expect(params.page).toBe(2);
  });

  it("maps the store fields to Jikan's parameter names", () => {
    const params = buildAnimeParams(
      { type: "Movie", genreId: 4, orderBy: "score", orderDirection: "desc", searchText: "ghibli" },
      1
    );

    expect(params).toEqual({ type: "Movie", genres: 4, order_by: "score", sort: "desc", q: "ghibli", page: 1 });
  });
});

describe("anime query store", () => {
  beforeEach(() => useAnimeQueryStore.setState({ animeQuery: { type: "All" } }));

  it("resets type and genre when searching", () => {
    const store = useAnimeQueryStore.getState();
    store.setType("Movie");
    store.setGenderId(4);
    store.setSearchText("naruto");

    expect(useAnimeQueryStore.getState().animeQuery).toEqual({ type: "All", genreId: undefined, searchText: "naruto" });
  });

  it("keeps the other filters when changing the order", () => {
    useAnimeQueryStore.getState().setGenderId(4);
    useAnimeQueryStore.getState().setOrder("score", "desc");

    expect(useAnimeQueryStore.getState().animeQuery).toMatchObject({ genreId: 4, orderBy: "score", orderDirection: "desc" });
  });
});

describe("cleanSynopsis", () => {
  it("removes the trailing MAL credit", () => {
    expect(cleanSynopsis("Two brothers.\n\n[Written by MAL Rewrite]")).toBe("Two brothers.");
  });

  it("keeps synopses without a credit intact", () => {
    expect(cleanSynopsis("Two brothers search for the stone. (Source: ANN)")).toBe(
      "Two brothers search for the stone. (Source: ANN)"
    );
  });

  it("handles a missing synopsis", () => {
    expect(cleanSynopsis(null)).toBe("");
  });
});
