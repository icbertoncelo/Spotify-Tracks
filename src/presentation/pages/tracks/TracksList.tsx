import { useTracks } from "@/presentation/hooks/useTracks"
import { Box, Button, HStack, IconButton, Image, Input, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { FaHeart, FaPause, FaPlay, FaSpotify } from "react-icons/fa";

export function TrackList() {
  const { tracks } = useTracks()

  const [search, setSearch] = useState("");
  const [playingTrack, setPlayingTrack] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  const filteredTracks = tracks.filter(
    (track) =>
      track.name.toLowerCase().includes(search.toLowerCase()) ||
      track.artist.toLowerCase().includes(search.toLowerCase()) ||
      track.album.name.toLowerCase().includes(search.toLowerCase())
  );

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

  const toggleFavorite = (trackId: string) => {
    setFavorites((prev) =>
      prev.includes(trackId) ? prev.filter((id) => id !== trackId) : [...prev, trackId]
    );
  };

  return (
    <Box p={4} maxW="800px" mx="auto">
      <Input
        placeholder="Pesquisar por álbum, artista ou título"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        mb={4}
      />
      <VStack spaceY={4} align="stretch">
        {filteredTracks.map((track) => (
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
                onClick={() => toggleFavorite(track.id)}
              >
                <FaHeart color={favorites.includes(track.id) ? "red" : "gray"} />
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
        ))}
      </VStack>
    </Box>
  );
}