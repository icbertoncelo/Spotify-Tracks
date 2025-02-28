import { VStack } from "@chakra-ui/react";
import { TrackCard } from "../TrackCard/TrackCard";
import { Track } from "@/domain/tracks/entities/track";
import { useFavoriteTracks } from "@/presentation/hooks/tracks/useFavoriteTracks";
import { usePlayTrack } from "@/presentation/hooks/tracks/usePlayTrack";

interface TrackListProps {
  tracks: Track[];
}

export function TrackList({ tracks }: TrackListProps) {
  const { favoriteTracks, toggleFavorite } = useFavoriteTracks();
  const { togglePlay, playingTrack } = usePlayTrack();

  return (
    <VStack spaceY={4} mt={4} align="stretch" data-testid="track-list">
      {tracks.map((track) => (
        <TrackCard
          key={track.id}
          track={track}
          favoriteTracks={favoriteTracks}
          toggleFavorite={toggleFavorite}
          togglePlay={togglePlay}
          playingTrack={playingTrack}
        />
      ))}
    </VStack>
  );
}
