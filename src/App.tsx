import { AppRoutes } from  "@/presentation/routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import { FavoriteTracksProvider } from "./presentation/contexts/tracks/FavoriteTracksContext";
import { useTrackApiAuth } from "./presentation/hooks/tracks/useTrackApiAuth";

export function App() {
  useTrackApiAuth()

  return (
    <BrowserRouter>
      <FavoriteTracksProvider>
        <AppRoutes />
      </FavoriteTracksProvider>
    </BrowserRouter>
  )
}