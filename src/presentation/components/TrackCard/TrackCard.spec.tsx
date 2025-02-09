import {  fireEvent, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { TrackCard } from "./TrackCard";
import { MOCK_TRACKS, MOCK_TRACK } from "@/__tests__/__mocks__/track";

const mockToggleFavorite = vi.fn()
vi.mock("@/presentation/hooks/tracks/useFavoriteTracks", () => ({
  useFavoriteTracks: () => ({
    favoriteTracks: MOCK_TRACKS,
    toggleFavorite: mockToggleFavorite
  }),
}));

const mockTogglePlay = vi.fn()
vi.mock("@/presentation/hooks/tracks/usePlayTrack", () => ({
  usePlayTrack: () => ({
    togglePlay: mockTogglePlay,
    playingTrack: "2"
  }),
}));

describe("TrackCard Component", () => {
  it("renders track details correctly", () => {
    renderWithChakra(<TrackCard track={MOCK_TRACK} />);

    expect(screen.getByText(MOCK_TRACK.name)).toBeInTheDocument();
    expect(screen.getByText(`${MOCK_TRACK.artist} • ${MOCK_TRACK.album.name}`)).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", MOCK_TRACK.album.image);
  });

  it("calls togglePlay when Play/Pause button is clicked", () => {
    renderWithChakra(<TrackCard track={MOCK_TRACK} />);
    
    const playPauseButton = screen.getByTestId("play-pause-button");
    fireEvent.click(playPauseButton);

    expect(mockTogglePlay).toHaveBeenCalledWith(MOCK_TRACK.id, MOCK_TRACK.previewUrl);
  });

  it("calls toggleFavorite when Favorite button is clicked", () => {
    renderWithChakra(<TrackCard track={MOCK_TRACK} />);
    
    const favoriteButton = screen.getByTestId("favorite-button");
    fireEvent.click(favoriteButton);

    expect(mockToggleFavorite).toHaveBeenCalledWith(MOCK_TRACK);
  });

  it("displays red heart when track is favorite", () => {
    renderWithChakra(<TrackCard track={MOCK_TRACK} />);
    
    const favoriteButton = screen.getByTestId("favorite-button");
    const heartIcon = favoriteButton.childNodes[0]
    expect(heartIcon).toHaveAttribute("style", "color: red;")
  });

  it("Spotify button has correct URL", () => {
    renderWithChakra(<TrackCard track={MOCK_TRACK} />);
    
    const spotifyLink = screen.getByRole("link");
    expect(spotifyLink).toHaveAttribute("href", MOCK_TRACK.uri);
    expect(spotifyLink).toHaveAttribute("target", "_blank");
  });
});