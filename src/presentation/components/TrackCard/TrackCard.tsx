import { Track } from "@/domain/tracks/entities/track";
import { useFavoriteTracks } from "@/presentation/hooks/tracks/useFavoriteTracks";
import { usePlayTrack } from "@/presentation/hooks/tracks/usePlayTrack";
import { Box, Button, HStack, IconButton, Image, Text } from "@chakra-ui/react";
import { FaHeart, FaPause, FaPlay, FaSpotify } from "react-icons/fa";

interface TrackCardProps {
  track: Track
}

export function TrackCard({ track }: TrackCardProps) {
  const { favoriteTracks, toggleFavorite } = useFavoriteTracks()
  const { togglePlay, playingTrack } = usePlayTrack()

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