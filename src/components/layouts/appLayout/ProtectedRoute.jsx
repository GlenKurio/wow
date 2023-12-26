import useCurrentUser from "../../../hooks/useCurrentUser";

function ProtectedRoute({ children }) {
  const { isLoading, user } = useCurrentUser();

  if (isLoading) {
    return (
      <div className="min-h-screen grid place-content-center">Loading...</div>
    );
  }

  if (user) {
    return children;
  }
}

export default ProtectedRoute;
