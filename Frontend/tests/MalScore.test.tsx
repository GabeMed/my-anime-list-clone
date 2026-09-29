import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import MalScore from "@/components/MalScore";
import { renderWithProviders } from "./render";

describe("MalScore", () => {
  it("shows the score with two decimals", () => {
    renderWithProviders(<MalScore score={8.456} />);

    expect(screen.getByText("8.46")).toBeInTheDocument();
  });

  it("shows a placeholder for unscored anime", () => {
    renderWithProviders(<MalScore score={0} />);

    expect(screen.getByText("---")).toBeInTheDocument();
  });
});
