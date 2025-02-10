import {
  FavoriteTracksContext,
  FavoriteTracksContextData,
} from "@/presentation/contexts/tracks/FavoriteTracksContext";
import { useContext } from "react";

export function useFavoriteTracks(): FavoriteTracksContextData {
  const context = useContext(FavoriteTracksContext);

  if (!context) {
    throw new Error("useToast must be use within a ToasProvider");
  }

  return context;
}
