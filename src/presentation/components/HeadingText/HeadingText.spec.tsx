import {  screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { HeadingText } from "./HeadingText";

describe("HeadingText Component", () => {
  it("renders the text content correctly", () => {
    renderWithChakra(<HeadingText>Test Heading</HeadingText>);
    
    const textElement = screen.getByText("Test Heading");
    expect(textElement).toBeInTheDocument();
  });
});