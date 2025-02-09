import { SpotifyAuthResponse } from "../entities/auth";
import { Track } from "../entities/track";

export interface ITrackUseCase {
  getAllTracks: (query: string) => Promise<Track[]>;
  getAccessToken: () => Promise<SpotifyAuthResponse>
}