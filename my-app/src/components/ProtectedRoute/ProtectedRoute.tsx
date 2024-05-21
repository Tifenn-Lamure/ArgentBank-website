// ProtectedRoute.tsx
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectIsAuthenticated } from '../../features/authSlice';

const ProtectedRoute = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  return isAuthenticated ? <Outlet/> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;