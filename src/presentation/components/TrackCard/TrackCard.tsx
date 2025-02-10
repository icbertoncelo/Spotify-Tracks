import { Track } from "@/domain/tracks/entities/track";
import { Box, Button, HStack, IconButton, Image, Text } from "@chakra-ui/react";
import { memo } from "react";
import { FaHeart, FaPause, FaPlay, FaSpotify } from "react-icons/fa";

interface TrackCardProps {
  track: Track;
  favoriteTracks: Track[];
  toggleFavorite: (track: Track) => void;
  playingTrack: string | null;
  togglePlay: (trackId: string, previewUrl: string) => void;
}

function TrackCardComponent({
  track,
  favoriteTracks,
  toggleFavorite,
  togglePlay,
  playingTrack,
}: TrackCardProps) {
  const isPlaying = playingTrack === track.id;

  return (
    <Box
      p={4}
      borderWidth={1}
      borderRadius="md"
      boxShadow="sm"
      data-testid="track-card"
    >
      <HStack spaceX={4}>
        <Image src={track.album.image} boxSize="60px" borderRadius="md" />
        <Box flex={1}>
          <Text fontWeight="bold">{track.name}</Text>
          <Text fontSize="sm" color="gray.500">
            {track.artist} • {track.album.name}
          </Text>
        </Box>
        <IconButton
          data-testid="play-pause-button"
          aria-label="Play/Pause"
          onClick={() => togglePlay(track.id, track.previewUrl)}
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </IconButton>
        <IconButton
          data-testid="favorite-button"
          aria-label="Favorite"
          onClick={() => toggleFavorite(track)}
        >
          <FaHeart
            color={
              favoriteTracks.some(
                (favoriteTrack) => favoriteTrack.id === track.id
              )
                ? "red"
                : "gray"
            }
          />
        </IconButton>
        <Button asChild>
          <a href={track.uri} target="_blank" rel="noopener noreferrer">
            <FaSpotify />
          </a>
        </Button>
      </HStack>
    </Box>
  );
}

export const TrackCard = memo(TrackCardComponent);
