import { useCallback, useState } from "react";

export function usePlayTrack() {
  const [playingTrack, setPlayingTrack] = useState<string | null>(null);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  // Spotify Audio preview clips can not be a standalone service
  const togglePlay = useCallback((trackId: string, previewUrl: string) => {
    if (playingTrack === trackId) {
      audio?.pause();
      setPlayingTrack(null);
      return;
    }

    if (audio) {
      audio.pause();
    }

    const newAudio = new Audio(previewUrl);
    newAudio.play();
    newAudio.onended = () => setPlayingTrack(null);

    setAudio(newAudio);
    setPlayingTrack(trackId);
  }, [audio, playingTrack])

  return { togglePlay, playingTrack }
}