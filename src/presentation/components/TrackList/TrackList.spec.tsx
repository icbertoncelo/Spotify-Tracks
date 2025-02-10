import { describe, it, expect, vi } from "vitest";
import { screen } from "@testing-library/react";
import { TrackList } from "./TrachList";
import { MOCK_TRACKS } from "@/__tests__/__mocks__/track";
import { Track } from "@/domain/tracks/entities/track";

vi.mock("../TrackCard/TrackCard", () => ({
  TrackCard: ({ track }: { track: Track }) => (
    <div data-testid="track-card">{track.name}</div>
  ),
}));

describe("TrackList Component", () => {
  it("renders without crashing", () => {
    renderWithChakra(<TrackList tracks={[]} />);
    expect(screen.getByTestId("track-list")).toBeInTheDocument();
  });

  it("renders a list of TrackCard components", () => {
    renderWithChakra(<TrackList tracks={MOCK_TRACKS} />);
    const trackCards = screen.getAllByTestId("track-card");
    expect(trackCards).toHaveLength(MOCK_TRACKS.length);
  });
});
