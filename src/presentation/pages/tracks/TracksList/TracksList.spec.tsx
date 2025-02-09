import { describe, it, vi, expect } from "vitest";
import { screen } from "@testing-library/react";
import { MOCK_TRACKS } from "@/__tests__/__mocks__/track";
import { TrackListPage } from "./TracksList";
import { BrowserRouter } from "react-router-dom";

vi.mock("@/presentation/hooks/tracks/useTracks", () => ({
  useTracks: () => ({
    tracks: MOCK_TRACKS,
  }),
}));

vi.mock("@/presentation/hooks/tracks/useFavoriteTracks", () => ({
  useFavoriteTracks: () => ({
    favoriteTracks: MOCK_TRACKS,
  }),
}));

function renderPage() {
  return renderWithChakra(
    <BrowserRouter>
      <TrackListPage />
    </BrowserRouter>
  );
}


describe("TracksList Page", () => {
  it("renders heading and link", () => {
    renderPage()

    expect(screen.getByRole("link", { name: /go to Favorites/i })).toBeInTheDocument();
    expect(screen.getByText(/tracks/i)).toBeInTheDocument();
  });
});