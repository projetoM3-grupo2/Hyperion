import { Route, Routes } from "react-router-dom";
import { AdminPage } from "../Pages/AdminPage";
import { LandPage } from "../Pages/LandPage";
import { LoginPage } from "../Pages/LoginPage";
import { RegisterPage } from "../Pages/RegisterPage";
import { ProtectedRoutes } from "../ProtectedRoutes";
import { Home } from "../Pages/HomePage";

export const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/gameStore" element={<LandPage />} />
      <Route path="*" element={<LandPage />} />
    </Routes>
  );
};
