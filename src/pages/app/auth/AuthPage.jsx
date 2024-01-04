import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import GoogleAuth from "../../../components/appComponents/auth/GoogleAuth";
import Login from "../../../components/appComponents/auth/Login";
import Signup from "../../../components/appComponents/auth/SignUp";

import { useSearchParams } from "react-router-dom";
function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const roomId = searchParams.get("room");
  console.log(roomId);
  //TODO: Add ner row "balance with user" to all users in the room with and ID of new signedup user, and add rows with all users balances to a new user
  return (
    <main className="min-h-screen px-4 pt-16 pb-32">
      <section className="w-full">
        <div className="flex flex-col gap-4 mt-4 mb-8 justify-center items-center">
          <h1 className="text-4xl font-bold text-accent">
            {isLogin ? " Login to your account" : "Create new account"}
          </h1>
        </div>
        <div className="w-full">
          {isLogin ? <Login /> : <Signup roomId={roomId} />}
        </div>
        <div>
          <div className="divider select-none">OR</div>
          <GoogleAuth roomId={roomId} prefix={isLogin ? "Log In" : "Sign Up"} />
        </div>

        <div className="flex items-center justify-center mt-8">
          <p>
            {" "}
            {isLogin ? "Dont`t have an account ?" : "Already have an account ?"}
          </p>
          <button
            className="btn btn-link text-accent select-none "
            onClick={() => setIsLogin((prev) => !prev)}
          >
            {isLogin ? "Sign Up" : "Log In"}
          </button>
        </div>
      </section>
    </main>
  );
}

export default AuthPage;
