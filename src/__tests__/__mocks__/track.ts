import { Track } from "@/domain/tracks/entities/track";

export const MOCK_TRACK: Track = {
  id: "1",
  name: "Test Track",
  uri: "https://open.spotify.com/track/1",
  href: "https://open.spotify.com/track/1",
  duration: 120,
  previewUrl: "test-preview.mp3",
  album: { name: "Test Album", image: "test-image.jpg" },
  artist: "Test Artist",
  trackNumber: 10
};

export const MOCK_SECOND_TRACK = {
  ...MOCK_TRACK,
  id: "2",
  name: "Test Second Track",
}

export const MOCK_TRACKS = [MOCK_TRACK, MOCK_SECOND_TRACK]