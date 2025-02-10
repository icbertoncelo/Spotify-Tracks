interface Artist {
  id: string;
  name: string;
}

interface Image {
  url: string;
}

interface Album {
  album_type: string;
  artists: Artist[];
  images: Image[];
  name: string;
  release_date: string;
  total_tracks: number;
}

interface SpotifyTrack {
  id: string;
  album: Album;
  uri: string;
  href: string;
  duration_ms: number;
  preview_url: string;
  artists: Artist[];
  name: string;
  track_number: number;
}

export interface SpotifyTrackData {
  total: number;
  items: SpotifyTrack[];
}

export interface SpotifyApiResponse {
  tracks: SpotifyTrackData;
}

export interface Track {
  id: string;
  name: string;
  uri: string;
  href: string;
  duration: number;
  previewUrl: string;
  album: {
    image: string;
    name: string;
  };
  artist: string;
  trackNumber: number;
}
