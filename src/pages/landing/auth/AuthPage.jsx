import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import GoogleAuth from "../../../components/appComponents/auth/GoogleAuth";
import Login from "../../../components/appComponents/auth/Login";
import Signup from "../../../components/appComponents/auth/SignUp";

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <main className="min-h-screen px-4">
      <section className="w-full">
        <div className="flex flex-col gap-4 mt-8">
          <h1 className="text-4xl font-bold text-accent">
            {isLogin ? " Login to your account" : "Create new account"}
          </h1>
        </div>
        {isLogin ? <Login /> : <Signup />}
        <div>
          <div className="divider select-none">OR</div>
          <GoogleAuth prefix={isLogin ? "Log In" : "Sign Up"} />
        </div>

        <div className="flex items-center">
          <p>
            {" "}
            {isLogin ? "Dont`t have an account ?" : "Already have an account ?"}
          </p>
          <button
            className="btn btn-link text-accent select-none"
            onClick={() => setIsLogin((prev) => !prev)}
          >
            {isLogin ? "Sign Up" : "Log In"}
          </button>
        </div>
      </section>

      <Link to="/app" className="btn btn-accent">
        Login
      </Link>
    </main>
  );
}

export default AuthPage;
