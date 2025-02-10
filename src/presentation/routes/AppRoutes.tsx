import { Route, Routes } from "react-router-dom";
import { TrackListPage } from "../pages/tracks/TracksList/TracksList";
import { FavoriteTracksListPage } from "../pages/tracks/FavoriteTracksList/FavoriteTracksList";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<TrackListPage />} />
      <Route path="/favoritos" element={<FavoriteTracksListPage />} />
    </Routes>
  );
}