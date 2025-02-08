import { Track } from "@/domain/tracks/entities/track";
import { TrackRepository } from "@/infra/repositories/tracks/trackRepository";
import { useEffect, useState } from "react";

export const useTracks = () => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        setLoading(true)
        const trackRepository = new TrackRepository();
        
        const data = await trackRepository.getAllTracks(search);
        setTracks(data)
      } catch (error: unknown) {
        console.log({ error })
        setError("Failed to fetch tracks");
      } finally {
        setLoading(false);
      }
    };

    if (search.length > 3) {
      fetchTracks();
    } 
  }, [search]);

  return { 
    tracks, 
    loading, 
    error, 
    search, 
    setSearch 
  };
};