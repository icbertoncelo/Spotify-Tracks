import { Track } from "@/domain/tracks/entities/track";
import { TrackRepository } from "@/infra/repositories/tracks/trackRepository";
import { useEffect, useState } from "react";

export const useTracks = () => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        setLoading(true)
        const trackRepository = new TrackRepository();
        
        await trackRepository.getAccessToken()
        const data = await trackRepository.getAllTracks();
        setTracks(data)
      } catch (error: unknown) {
        console.log({ error })
        setError("Failed to fetch tracks");
      } finally {
        setLoading(false);
      }
    };

    fetchTracks();
  }, []);

  return { tracks, loading, error };
};