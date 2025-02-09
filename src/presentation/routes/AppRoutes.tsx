import { FavoriteTracksListPage } from "../pages/tracks/FavoriteTracksList";
import { TrackListPage } from "../pages/tracks/TracksList";
import { Route, Routes } from "react-router-dom";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<TrackListPage />} />
      <Route path="/favorites" element={<FavoriteTracksListPage />} />
    </Routes>
  );
}