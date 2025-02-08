import { Track } from '@/domain/tracks/entities/track';
import { createContext, useCallback, useContext, useState } from 'react';

export interface FavoriteTracksContextData {
  favoriteTracks: Track[]
  toggleFavorite: (track: Track) => void
}

interface FavoriteTracksProviderProps {
  children: React.ReactNode
}

const FavoriteTracksContext = createContext<FavoriteTracksContextData>({} as FavoriteTracksContextData);

export function FavoriteTracksProvider({ children }: FavoriteTracksProviderProps) {
  const [favoriteTracks, setFavoriteTracks] = useState<Track[]>([])

  console.log(favoriteTracks)

  const toggleFavorite = useCallback((track: Track) => {
    setFavoriteTracks(prevState => {
      const isFavorite = prevState.some(favoriteTrack => favoriteTrack.id === track.id)

      return isFavorite 
        ? prevState.filter(prevTrack => prevTrack.id !== track.id) 
        : [...prevState, track]
    })
  }, [])

  return (
    <FavoriteTracksContext.Provider 
      value={{
        favoriteTracks, 
        toggleFavorite
      }}
    >
      {children}
    </FavoriteTracksContext.Provider>
  );
}

export function useFavoriteTracks(): FavoriteTracksContextData {
  const context = useContext(FavoriteTracksContext);

  if (!context) {
    throw new Error('useToast must be use within a ToasProvider');
  }

  return context;
}
