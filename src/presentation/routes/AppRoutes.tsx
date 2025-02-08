import { TrackList } from "../pages/tracks/TracksList";
import { Route, Routes } from "react-router-dom";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<TrackList />} />
    </Routes>
  );
}