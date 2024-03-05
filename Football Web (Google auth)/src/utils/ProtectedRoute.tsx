import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  isSignedIn: boolean;
  children: any;
  isLoading: boolean;
}

function ProtectedRoute({ isSignedIn, children, isLoading }:ProtectedRouteProps) {
    if (!isSignedIn && !isLoading) {
      return <Navigate to="/" replace />
    }
    return children
}
export default ProtectedRoute;