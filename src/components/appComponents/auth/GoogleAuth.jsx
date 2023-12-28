import { useGoogleAuth } from "../../../hooks/useGoogleAuth";

function GoogleAuth({ prefix, roomId }) {
  const { isLoading, authWithGoogle } = useGoogleAuth();
  return (
    <div className="flex items-center justify-center">
      <button
        onClick={() => authWithGoogle({ roomId })}
        className="bg-blue-600 flex items-center justify-center gap-2 py-2 px-4 rounded-md hover:bg-blue-700 text-blue-50 font-medium transition-all duration-200 active:scale-95 text-sm"
      >
        <span>
          <img className="max-h-[25px]" src="/google.png" alt="Google logo" />
        </span>
        <span>{prefix} with Google</span>
      </button>
    </div>
  );
}

export default GoogleAuth;
