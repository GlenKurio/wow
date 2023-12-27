import MoveBackButton from "../../components/MoveBackButton";
import { useCurrentUserData } from "../../hooks/useGetCurrentUserData";
import { useForm } from "react-hook-form";

import usePreviewImg from "../../hooks/usePreviewImg";

import { toast } from "react-hot-toast";
import { useUpdateProfile } from "../../hooks/useUpdateProfile";

function EditProfile() {
  const { isLoading, error, currentUserData } = useCurrentUserData();

  const { formState, register, reset, handleSubmit } = useForm();
  const { errors } = formState;
  const { handleImageChange, selectedFile, setSelectedFile } = usePreviewImg();
  const { isUpdating, updateProfile } = useUpdateProfile();
  if (isLoading) {
    return (
      <div className="min-h-screen grid place-content-center">
        <span className="loading loading-dots loading-lg loading-accent"></span>
      </div>
    );
  }
  // TODO: on password or email update - show popup with confirmation and make user refresh his session before updating. Add delete account
  function onSubmit({ ...inputs }) {
    if (
      inputs.fullName === currentUserData.fullName &&
      selectedFile === null &&
      inputs.email === currentUserData.email &&
      !inputs.password
    ) {
      return toast.success("Changes succesfully saved!");
    }

    updateProfile({ inputs, selectedFile, currentUserData });
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

          {isUpdating ? (
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
