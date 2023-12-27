import { useFacebookAuth } from "../../../hooks/useFacebookAuth";

function FacebookAuth() {
  const { isLoading, authWithFacebook } = useFacebookAuth();
  return (
    <button
      disabled={isLoading}
      className="bg-blue-400"
      onClick={authWithFacebook}
    >
      Facebook login
    </button>
  );
}

export default FacebookAuth;
