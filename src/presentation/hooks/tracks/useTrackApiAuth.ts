import { TrackRepository } from "@/infra/repositories/tracks/trackRepository";
import { useEffect } from "react";

export function useTrackApiAuth() {
  useEffect(() => {
    const authenticateTrackApi = async () => {
      try {
        const trackRepository = new TrackRepository();
        
        await trackRepository.getAccessToken()
      } catch (error: unknown) {
        console.log({ error })
      }
    };

    authenticateTrackApi();
  }, []);
}