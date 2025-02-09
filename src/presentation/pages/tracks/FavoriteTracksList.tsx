import { Link } from "react-router-dom";
import { Box, VStack } from "@chakra-ui/react";
import { HeadingText } from "@/presentation/components/HeadingText/HeadingText";
import { TrackList } from "@/presentation/components/TrackList/TrachList";
import { useFavoriteTracks } from "@/presentation/hooks/tracks/useFavoriteTracks";

export function FavoriteTracksListPage() {
  const { favoriteTracks } = useFavoriteTracks()

  return (
    <Box p={4} maxW="800px" mx="auto">
      <VStack align="stretch">
        <Link to="/" >Go back to Home</Link>
        <HeadingText>
          Favorites
        </HeadingText>
        <TrackList tracks={favoriteTracks}  />
      </VStack>
    </Box>
  );
}