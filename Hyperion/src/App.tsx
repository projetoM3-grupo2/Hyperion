import { GameProvider } from "./Providers/GameContext/GameContext";
import { UserProvider } from "./Providers/UserContext/UserContext";
import { RoutesApp } from "./Routes";

export const App = () => (
  <UserProvider>
    <GameProvider>
      <RoutesApp />
    </GameProvider>
  </UserProvider>
);
