import { useCallback, useState } from "react";

export function usePlayTrack() {
  const [playingTrack, setPlayingTrack] = useState<string | null>(null);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  // Spotify preview não está disponível
  // https://developer.spotify.com/documentation/web-api/reference/get-several-tracks#:~:text=in%20real%20time.-,preview_url,-string
  const togglePlay = useCallback(
    (trackId: string, previewUrl: string) => {
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
    },
    [audio, playingTrack]
  );

  return { togglePlay, playingTrack };
}
