import { GameProvider } from "./Providers/GameContext/GameContext";
import { UserProvider } from "./Providers/UserContext/UserContext";
import { RoutesApp } from "./Routes";
import { GlobalStyle } from "./Styles/globalStyle";

export const App = () => (
  <UserProvider>
    <GameProvider>
      <RoutesApp />
    </GameProvider>
  </UserProvider>
);
