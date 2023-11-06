import { Navigate } from "react-router-dom";
import useAuth from "../Components/Hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useAuth();

  if (loading) {
    return (
      <progress className="progress progress-error w-56 text-center my-auto"></progress>
    );
  }

  if (!loading && !user?.email) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
export default PrivateRoute;
