import { Navigate } from "react-router-dom";
import { fakeAuth } from "../auth/FakeAuth";

function ProtectedRoute({ children }) {
  if (!fakeAuth.isAuthenticated) {
    return <Navigate to="/" />; // Redirect to home if not logged in
  }
  return children;
}

export default ProtectedRoute;