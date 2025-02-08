import { TrackCard } from "@/presentation/components/TrackCard/TrackCard";
import { useTracks } from "@/presentation/hooks/tracks/useTracks"
import { Box, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";

export function TrackList() {
  const { tracks } = useTracks()
  const [search, setSearch] = useState("");

  const filteredTracks = tracks.filter(
    (track) =>
      track.name.toLowerCase().includes(search.toLowerCase()) ||
      track.artist.toLowerCase().includes(search.toLowerCase()) ||
      track.album.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box p={4} maxW="800px" mx="auto">
      <Input
        placeholder="Pesquisar por álbum, artista ou título"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        mb={4}
        p={4}
      />
      <VStack spaceY={4} align="stretch">
        {filteredTracks.map((track) => (
          <TrackCard track={track} />
        ))}
      </VStack>
    </Box>
  );
}