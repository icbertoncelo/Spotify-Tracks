import { describe, it, vi, expect } from "vitest";
import { screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { MOCK_TRACKS } from "@/__tests__/__mocks__/track";
import { FavoriteTracksListPage } from "./FavoriteTracksList";

vi.mock("@/presentation/hooks/tracks/useFavoriteTracks", () => ({
  useFavoriteTracks: () => ({
    favoriteTracks: MOCK_TRACKS,
  }),
}));

function renderPage() {
  return renderWithChakra(
    <BrowserRouter>
      <FavoriteTracksListPage />
    </BrowserRouter>
  );
}

describe("FavoriteTracksList Page", () => {
  it("renders heading and link", () => {
    renderPage()

    expect(screen.getByRole("link", { name: /Voltar para Home/i })).toBeInTheDocument();
    expect(screen.getByText(/Lista de Favoritos/i)).toBeInTheDocument();
  });

  it("renders TrackList with favorite tracks", () => {
    renderPage()

    MOCK_TRACKS.forEach(track => {
      expect(screen.getByText(track.name)).toBeInTheDocument();
    });
  });
});