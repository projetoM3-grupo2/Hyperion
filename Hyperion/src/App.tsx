import { UserProvider } from "./Providers/UserContext/UserContext";
import { RoutesApp } from "./Routes";

export const App = () => (
  <>
    <UserProvider>
      <RoutesApp />
    </UserProvider>
  </>
);
