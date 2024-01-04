import { useForm } from "react-hook-form";
import { useLogin } from "../../../hooks/useLogin";
import { useState } from "react";
function Login() {
  const { register, formState, reset, handleSubmit, getValues } = useForm();
  const { errors } = formState;
  const { login, isLoading } = useLogin();
  const [showPass, setShowPass] = useState(false);

  function onSubmit({ email, password }) {
    login({ email, password });
  }
  return (
    <div className=" w-full flex justify-center mb-16">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center w-full lg:w-[50%] gap-4"
      >
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text text-lg font-semibold">
              Email<span className="text-error">*</span>
            </span>
            {errors?.email?.message && (
              <span className="label-text-alt  text-error-content bg-error py-1 px-2 rounded-full">
                {errors.email.message}
              </span>
            )}
          </div>
          <input
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please provide a valid email address",
              },
            })}
            type="email"
            placeholder="Your email"
            className={
              errors?.email?.message
                ? " input input-bordered input-error w-full "
                : " input input-bordered  w-full "
            }
          />
        </label>
        <label className="form-control w-full  relative ">
          <div className="label">
            <span className="label-text text-lg font-semibold">
              Password<span className="text-error">*</span>
            </span>
            {errors?.password?.message && (
              <span className="label-text-alt  text-error-content bg-error py-1 px-2 rounded-full">
                {errors.password.message}
              </span>
            )}
          </div>
          <input
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 6,
                message: "Password needs a minimum of 6 characters",
              },
            })}
            type={showPass ? "text" : "password"}
            placeholder="Your password"
            className={
              errors?.password?.message
                ? " input input-bordered input-error w-full  "
                : " input input-bordered  w-full   "
            }
          />
          <div
            className="absolute right-2 bottom-[12px] cursor-pointer z-10 text-accent"
            onClick={() => setShowPass((prev) => !prev)}
          >
            {showPass ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            )}
          </div>
        </label>
        {isLoading ? (
          <button className="btn btn-accent w-full mt-8 lg:mx-auto lg:w-[50%]">
            <span className="loading loading-spinner loading-xs"></span>
          </button>
        ) : (
          <button className="btn btn-accent w-full mt-8 ">Login</button>
        )}
      </form>
    </div>
  );
}

export default Login;
