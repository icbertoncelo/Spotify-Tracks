import { Track } from "@/domain/tracks/entities/track";
import { createContext, useCallback, useState } from "react";

export interface FavoriteTracksContextData {
  favoriteTracks: Track[];
  toggleFavorite: (track: Track) => void;
}

interface FavoriteTracksProviderProps {
  children: React.ReactNode;
}

const FavoriteTracksContext = createContext<FavoriteTracksContextData>(
  {} as FavoriteTracksContextData
);

function FavoriteTracksProvider({ children }: FavoriteTracksProviderProps) {
  const [favoriteTracks, setFavoriteTracks] = useState<Track[]>([]);

  const toggleFavorite = useCallback((track: Track) => {
    setFavoriteTracks((prevState) => {
      const isFavorite = prevState.some(
        (favoriteTrack) => favoriteTrack.id === track.id
      );

      return isFavorite
        ? prevState.filter((prevTrack) => prevTrack.id !== track.id)
        : [...prevState, track];
    });
  }, []);

  return (
    <FavoriteTracksContext.Provider
      value={{
        favoriteTracks,
        toggleFavorite,
      }}
    >
      {children}
    </FavoriteTracksContext.Provider>
  );
}

export { FavoriteTracksContext, FavoriteTracksProvider };
