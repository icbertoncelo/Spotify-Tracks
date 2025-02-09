import { VStack } from "@chakra-ui/react";
import { TrackCard } from "../TrackCard/TrackCard";
import { Track } from "@/domain/tracks/entities/track";

interface TrackListProps {
  tracks: Track[]
}

export function TrackList({ tracks }: TrackListProps) {
  return (
    <VStack spaceY={4} mt={4} align="stretch" data-testid="track-list">
      {tracks.map((track) => (
        <TrackCard key={track.id} track={track} />
      ))}
    </VStack>
  )
}