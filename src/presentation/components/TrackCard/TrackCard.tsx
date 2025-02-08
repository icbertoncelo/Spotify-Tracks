import { Track } from "@/domain/tracks/entities/track";
import { useFavoriteTracks } from "@/presentation/contexts/tracks/FavoriteTracksContext";
import { Box, Button, HStack, IconButton, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FaHeart, FaPause, FaPlay, FaSpotify } from "react-icons/fa";

interface TrackCardProps {
  track: Track
}

export function TrackCard({ track }: TrackCardProps) {
  const [playingTrack, setPlayingTrack] = useState<string | null>(null);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  
  const { favoriteTracks, toggleFavorite } = useFavoriteTracks()

  const togglePlay = (trackId: string, previewUrl: string) => {
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
  };

  return (
    <Box key={track.id} p={4} borderWidth={1} borderRadius="md" boxShadow="sm">
      <HStack spaceX={4}>
        <Image src={track.album.image} boxSize="60px" borderRadius="md" />
        <Box flex={1}>
          <Text fontWeight="bold">{track.name}</Text>
          <Text fontSize="sm" color="gray.500">
            {track.artist} • {track.album.name}
          </Text>
        </Box>
        <IconButton
          aria-label="Play/Pause"
          // Spotify Audio preview clips can not be a standalone service
          onClick={() => togglePlay(track.id, track.previewUrl)}
        >
          {playingTrack === track.id ? <FaPause /> : <FaPlay />}
        </IconButton>
        <IconButton
          aria-label="Favorite"
          onClick={() => toggleFavorite(track)}
        >
          <FaHeart 
            color={favoriteTracks.some(favoriteTrack => favoriteTrack.id === track.id) ? "red" : "gray"} 
          />
        </IconButton>
        <Button asChild>
          <a 
            href={track.uri}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSpotify />
          </a>
        </Button>
      </HStack>
    </Box>
  )
}