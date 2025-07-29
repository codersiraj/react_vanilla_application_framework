import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({
  isAuthenticated,
  children,
}: {
  isAuthenticated: boolean;
  children: React.ReactNode;
}) {
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
}
