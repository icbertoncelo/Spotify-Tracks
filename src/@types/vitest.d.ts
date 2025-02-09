import { RenderResult } from "@testing-library/react";

declare global {
  function renderWithChakra(ui: React.ReactNode): RenderResult;
}