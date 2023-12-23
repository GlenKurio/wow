import { Link } from "react-router-dom";

function AuthPage() {
  return (
    <div className="min-h-screen grid place-content-center ">
      <p>Auth page</p>
      <Link to="/app" className="btn btn-accent">
        Login
      </Link>
    </div>
  );
}

export default AuthPage;
