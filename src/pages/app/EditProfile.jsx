import MoveBackButton from "../../components/MoveBackButton";
import { useCurrentUserData } from "../../hooks/useGetCurrentUserData";
import { useForm } from "react-hook-form";
import { useState } from "react";
import usePreviewImg from "../../hooks/usePreviewImg";

function EditProfile() {
  const { isLoading, error, currentUserData } = useCurrentUserData();
  const [showPass, setShowPass] = useState(false);
  const { formState, register, reset, handleSubmit } = useForm();
  const { errors } = formState;
  const { handleImageChange, selectedFile, setSelectedFile } = usePreviewImg();

  if (isLoading) {
    return (
      <div className="min-h-screen grid place-content-center">
        <span className="loading loading-dots loading-lg loading-accent"></span>
      </div>
    );
  }
  // TODO: on password or email update - show popup with confirmation and make user refresh his session before updating. Add delete account
  function onSubmit({ ...inputs }) {
    const dataForUpdate = {
      ...inputs,
      avatar: selectedFile,
    };
    console.log(dataForUpdate);
  }
  return (
    <main className="min-h-min px-4 pb-16">
      <MoveBackButton />
      <h1 className="text-2xl font-bold text-accent  mb-4 capitalize">
        Update your account
      </h1>
      <section>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full max-w-[30rem]">
            <div className="label">
              <span className="label-text text-lg font-semibold border-b-[1px] border-accent ">
                Profile Image
              </span>
            </div>
            <div className="flex gap-8">
              <div className="avatar flex items-center gap-4">
                <div className=" w-12 rounded-full  ">
                  <img
                    src={
                      selectedFile ||
                      currentUserData.profilePicURL ||
                      "/avatar-placeholder.png"
                    }
                  />
                </div>
              </div>
              <input
                type="file"
                onChange={handleImageChange}
                className={
                  errors?.image?.message
                    ? "file-input file-input-bordered w-full max-w-[30rem] file-input-error"
                    : "file-input file-input-bordered w-full max-w-[30rem] "
                }
              />
            </div>
          </label>
          <label className="form-control w-full max-w-[30rem]">
            <div className="label">
              <span className="label-text text-lg font-semibold border-b-[1px] border-accent">
                Full Name
              </span>
              {errors?.fullName?.message && (
                <span className="label-text-alt  text-error-content bg-error py-1 px-2 rounded-full">
                  {errors.fullName.message}
                </span>
              )}
            </div>
            <input
              {...register("fullName")}
              type="fullName"
              placeholder="Your full name"
              defaultValue={currentUserData.fullName}
              className={
                errors?.fullName?.message
                  ? " input input-bordered input-error w-full max-w-[30rem]"
                  : " input input-bordered  w-full max-w-[30rem]"
              }
            />
          </label>
          <label className="form-control w-full max-w-[30rem]">
            <div className="label">
              <span className="label-text text-lg font-semibold border-b-[1px] border-accent">
                Email
              </span>
              {errors?.email?.message && (
                <span className="label-text-alt  text-error-content bg-error py-1 px-2 rounded-full">
                  {errors.email.message}
                </span>
              )}
            </div>
            <input
              {...register("email", {
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Please provide a valid email address",
                },
              })}
              type="email"
              placeholder="Your email"
              defaultValue={currentUserData.email}
              className={
                errors?.email?.message
                  ? " input input-bordered input-error w-full max-w-[30rem]"
                  : " input input-bordered  w-full max-w-[30rem]"
              }
            />
          </label>
          <label className="form-control w-full max-w-[30rem] relative ">
            <div className="label">
              <span className="label-text text-lg font-semibold border-b-[1px] border-accent">
                Password
              </span>
              {errors?.password?.message && (
                <span className="label-text-alt  text-error-content bg-error py-1 px-2 rounded-full">
                  {errors.password.message}
                </span>
              )}
            </div>
            <input
              {...register("password", {
                minLength: {
                  value: 6,
                  message: "Password needs a minimum of 6 characters",
                },
              })}
              type={showPass ? "text" : "password"}
              placeholder="Your password"
              className={
                errors?.password?.message
                  ? " input input-bordered input-error w-full max-w-[30rem] "
                  : " input input-bordered  w-full max-w-[30rem]  "
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
            <button className="btn btn-accent w-full mt-8">
              <span className="loading loading-spinner loading-xs"></span>{" "}
            </button>
          ) : (
            <button className="btn btn-accent w-full mt-8">Save Changes</button>
          )}
        </form>
      </section>
    </main>
  );
}

export default EditProfile;
