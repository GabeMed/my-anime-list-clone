import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ExpandableText from "@/components/ExpandableText";
import { renderWithProviders } from "./render";

describe("ExpandableText", () => {
  it("shows short texts in full, without a button", () => {
    renderWithProviders(<ExpandableText>A short synopsis.</ExpandableText>);

    expect(screen.getByText("A short synopsis.")).toBeInTheDocument();
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("truncates long texts at 300 characters and toggles", async () => {
    const text = "a".repeat(300) + "THE-END";
    renderWithProviders(<ExpandableText>{text}</ExpandableText>);

    expect(screen.queryByText(/THE-END/)).not.toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: "Read More" }));
    expect(screen.getByText(/THE-END/)).toBeInTheDocument();

    await userEvent.click(screen.getByRole("button", { name: "Show Less" }));
    expect(screen.queryByText(/THE-END/)).not.toBeInTheDocument();
  });

  it("renders nothing for an empty text", () => {
    const { container } = renderWithProviders(<ExpandableText>{""}</ExpandableText>);

    // (next-themes adds a <script> to the container, so check for the <p>.)
    expect(container.querySelector("p")).toBeNull();
  });
});
