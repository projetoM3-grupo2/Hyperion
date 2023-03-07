import { Route, Routes } from 'react-router-dom';
import { AdminPage } from '../Pages/AdminPage';
import { LandPage } from '../Pages/LandPage';
import { LoginPage } from '../Pages/LoginPage';
import { RegisterPage } from '../Pages/RegisterPage';
import { ProtectedRoutes } from '../ProtectedRoutes';

export const RoutesApp = () => {
  return (
    <Routes>
      <Route path='/' element={<LandPage/>} />
      <Route path="*" element={<LoginPage/>} />
      <Route path="*" element={<RegisterPage/>} />
    
      
      <Route path='/dashboard' element={<ProtectedRoutes />}>
        <Route index element={<AdminPage/>} />
      </Route>
    </Routes>
  );
};
