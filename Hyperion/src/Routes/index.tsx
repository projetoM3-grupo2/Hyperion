import { Route, Routes } from 'react-router-dom';
import { ProtectedRoutes } from '../ProtectedRoutes';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={} />
      <Route path='/register' element={} />
      <Route path="*" element={} />
      
      <Route path='/dashboard' element={<ProtectedRoutes />}>
        <Route index element={} />
      </Route>
    </Routes>
  );
};
