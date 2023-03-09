import { UserProvider } from "./Providers/UserContext/UserContext";
import { RoutesApp } from "./Routes";
import { GlobalStyle } from "./Styles/globalStyle";

export const App = () => (
  <UserProvider>
    <GlobalStyle />
    <RoutesApp />
  </UserProvider>
);
