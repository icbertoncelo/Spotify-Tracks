import { AppRoutes } from  "@/presentation/routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import { FavoriteTracksProvider } from "./presentation/contexts/tracks/FavoriteTracksContext";

export function App() {
  return (
    <BrowserRouter>
      <FavoriteTracksProvider>
        <AppRoutes />
      </FavoriteTracksProvider>
    </BrowserRouter>
  )
}