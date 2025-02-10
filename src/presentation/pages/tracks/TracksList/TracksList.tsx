import { Link } from "react-router-dom";

import { useTracks } from "@/presentation/hooks/tracks/useTracks"
import { Box, Input, VStack } from "@chakra-ui/react";
import { TrackList } from "@/presentation/components/TrackList/TrachList";
import { HeadingText } from "@/presentation/components/HeadingText/HeadingText";

export function TrackListPage() {
  const { tracks, search, setSearch } = useTracks()

  return (
    <Box p={4} maxW="800px" mx="auto">
      <VStack align="stretch">
        <Input
          placeholder="Pesquisar por álbum, artista ou título"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          mb={4}
          p={4}
        />
        <Link to="/favoritos">Ir para favoritos</Link>
        <HeadingText>Lista de Músicas</HeadingText>
        <TrackList tracks={tracks} />
      </VStack>
    </Box>
  );
}