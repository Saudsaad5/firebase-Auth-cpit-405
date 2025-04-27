import { Navigate } from 'react-router';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  
  if (!user) {
    return <Navigate to="/join" />;
  }
  
  return children;
}

export default ProtectedRoute