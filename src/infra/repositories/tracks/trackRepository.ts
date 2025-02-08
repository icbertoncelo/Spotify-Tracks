import { ITrackUseCase } from "@/domain/tracks/usecases/trackUseCase";
import { trackApiInstance, trackAuthApiInstance } from "./trackInstance";
import { AxiosHttpClient } from "@/infra/http/axiosHttpClient";
import { SpotifyAuthResponse } from "@/domain/tracks/entities/auth";
import { SpotifyApiResponse, SpotifyTrackData, Track } from "@/domain/tracks/entities/track";

export class TrackRepository implements ITrackUseCase {
  private readonly trackApiHttpClient = new AxiosHttpClient(trackApiInstance)
  private readonly trackAuthApiHttpClient = new AxiosHttpClient(trackAuthApiInstance)
  private readonly tokenKey = "spf";

  private getAccessTokenFromStorage(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  private setAccessTokenToStorage(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  private getAuthHeaders(): Record<string, string> {
    const token = this.getAccessTokenFromStorage();
    return token ? { Authorization: `Bearer ${token}` } : {};
  }

  private formatSpotifyResponse(spotifyTracksData: SpotifyTrackData): Track[] {
    return spotifyTracksData.items.map(track => ({
      id: track.id,
      uri: track.uri,
      href: track.href,
      name: track.name,
      duration: track.duration_ms * 1000,
      previewUrl: track.preview_url,
      album: {
        image: track.album.images[0].url,
        name: track.album.name
      },
      artist: track.artists[0].name,
      trackNumber: track.track_number,
    }))
  }

  async getAllTracks(): Promise<Track[]> {
    try {
      const data = await this.trackApiHttpClient.get<SpotifyApiResponse>(
        "/search?q=Imagine%20Dragons&type=track&limit=10",
        { headers: this.getAuthHeaders() }
      );

      console.log(data.tracks)

      return this.formatSpotifyResponse(data.tracks)
    } catch (error) {
      console.error("Error fetching tracks:", error);
      throw new Error("Failed to fetch tracks");
    }
  }

  async getAccessToken(): Promise<SpotifyAuthResponse> {
    try {
      const payload = new URLSearchParams();
      payload.append("grant_type", "client_credentials");
      payload.append("client_id", import.meta.env.VITE_SPOTIFY_CLIENT_ID ?? "");
      payload.append("client_secret", import.meta.env.VITE_SPOTIFY_CLIENT_SECRET ?? "");

      const data = await this.trackAuthApiHttpClient.post<SpotifyAuthResponse>("/token", payload);
      this.setAccessTokenToStorage(data.access_token);
      return data;
    } catch (error) {
      console.error("Error fetching access token:", error);
      throw new Error("Failed to fetch access token");
    }
  }
}