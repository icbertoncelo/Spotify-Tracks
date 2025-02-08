import { Link } from "react-router-dom";
import { TrackCard } from "@/presentation/components/TrackCard/TrackCard";
import { useFavoriteTracks } from "@/presentation/contexts/tracks/FavoriteTracksContext";
import { Box, VStack } from "@chakra-ui/react";

export function FavoriteTracksList() {
  const { favoriteTracks } = useFavoriteTracks()

  return (
    <Box p={4} maxW="800px" mx="auto">
      <Link to="/" >Go back to Home</Link>
      <VStack spaceY={4} mt={4} align="stretch">
        {favoriteTracks.map((track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </VStack>
    </Box>
  );
}