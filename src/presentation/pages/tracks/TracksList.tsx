import { Link } from "react-router-dom";

import { TrackCard } from "@/presentation/components/TrackCard/TrackCard";
import { useTracks } from "@/presentation/hooks/tracks/useTracks"
import { Box, Input, VStack } from "@chakra-ui/react";

export function TrackList() {
  const { tracks, search, setSearch } = useTracks()

  return (
    <Box p={4} maxW="800px" mx="auto">
      <Input
        placeholder="Pesquisar por álbum, artista ou título"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        mb={4}
        p={4}
      />
      <Link to="/favorites">Go to Favorites</Link>
      <VStack spaceY={4} mt={4} align="stretch">
        {tracks.map((track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </VStack>
    </Box>
  );
}