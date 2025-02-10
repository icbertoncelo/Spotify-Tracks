import { Link } from "react-router-dom";
import { Box, VStack } from "@chakra-ui/react";
import { HeadingText } from "@/presentation/components/HeadingText/HeadingText";
import { TrackList } from "@/presentation/components/TrackList/TrachList";
import { useFavoriteTracks } from "@/presentation/hooks/tracks/useFavoriteTracks";

export function FavoriteTracksListPage() {
  const { favoriteTracks } = useFavoriteTracks();

  return (
    <Box p={4} maxW="800px" mx="auto">
      <VStack align="stretch">
        <Link to="/">Voltar para Home</Link>
        <HeadingText>Lista de Favoritos</HeadingText>
        <TrackList tracks={favoriteTracks} />
      </VStack>
    </Box>
  );
}
