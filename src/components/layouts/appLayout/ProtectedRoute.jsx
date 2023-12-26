import useCurrentUser from "../../../hooks/useCurrentUser";

function ProtectedRoute({ children }) {
  const { isLoading, user } = useCurrentUser();

  if (isLoading) {
    return (
      <div className="min-h-screen grid place-content-center">
        <span className="loading loading-dots loading-lg loading-accent"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }
}

export default ProtectedRoute;
