import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useState } from "react";
import usePreviewImg from "../../../../hooks/usePreviewImg";
import { useRegisterTransfer } from "../../../../hooks/useRegisterTransfer";

// TODO: finish register transfer
function Transfer({ users, currentUserData }) {
  const [boxError, setBoxError] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const { handleImageChange, setSelectedFile, selectedFile } = usePreviewImg();
  const { isRegistering, registerNewTransfer } = useRegisterTransfer();
  const usersToSelect = users.filter(
    (user) => user.uid !== currentUserData.uid
  );
  // Function to handle changes in the selected user
  const handleUserSelection = (e) => {
    const selectedUserId = e.target.value;

    setSelectedUser(selectedUserId);
  };

  // console.log(errors.length);
  function onSubmit({ ...inputs }) {
    console.log(inputs);
    let user = selectedUser;

    if (user == null) {
      return setBoxError("Select at least someone");
    } else {
      setBoxError(null);
    }
    const transferData = {
      title: inputs.title,
      description: inputs.description || "",
      total: +inputs.amount,
      img: selectedFile || null,
      type: "transfer",
      recipient: user,
      author: currentUserData.uid,
      roomId: currentUserData.roomId,
    };
    console.log(transferData);
    registerNewTransfer(transferData);
  }

  return (
    <section className="flex-col w-[30rem] mx-auto">
      <h1 className="text-2xl font-bold mt-8 mb-4">Register new Transfer:</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <label className="form-control w-full max-w-[30rem]">
          <div className="label">
            <span className="label-text text-lg font-semibold">
              Amount<span className="text-error">*</span>
            </span>
            {errors?.amount?.message && (
              <span className="label-text-alt  text-error-content bg-error py-1 px-2 rounded-full">
                {errors.amount.message}
              </span>
            )}
          </div>
          <input
            {...register("amount", {
              required: "This field is required",
              validate: (value) => value > 0 || "Amount must be bigger than 0",
            })}
            type="number"
            placeholder="Amount of transfer"
            className={
              errors?.amount?.message
                ? " input input-bordered input-error w-full max-w-[30rem]"
                : " input input-bordered  w-full max-w-[30rem]"
            }
          />
        </label>
        <label className="form-control w-full max-w-[30rem]">
          <div className="label">
            <span className="label-text text-lg font-semibold">
              Title<span className="text-error">*</span>
            </span>
            {errors?.title?.message && (
              <span className="label-text-alt  text-error-content bg-error py-1 px-2 rounded-full">
                {errors.title.message}
              </span>
            )}
          </div>
          <input
            {...register("title", { required: "This field is required" })}
            type="text"
            placeholder="Title of transfer"
            className={
              errors?.title?.message
                ? " input input-bordered input-error w-full max-w-[30rem]"
                : " input input-bordered  w-full max-w-[30rem]"
            }
          />
        </label>
        <label className="form-control w-full max-w-[30rem] flex flex-col gap-4">
          <div className="label">
            <span className="label-text text-lg font-semibold">
              Send transfer to<span className="text-error">*</span>
            </span>
            {boxError && (
              <span className="label-text-alt  text-error-content bg-error py-1 px-2 rounded-full">
                {boxError}
              </span>
            )}
          </div>
        </label>

        {usersToSelect.map((user, idx) => (
          <label className="text-xl flex items-center gap-8 " key={idx}>
            <input
              type="radio"
              value={user.uid}
              checked={selectedUser === user.uid}
              onChange={handleUserSelection}
              className="radio radio-lg radio-accent"
            />
            <div className="avatar flex items-center gap-4">
              <div className=" w-12 rounded-full  ">
                <img src={user.profilePicURL || "/avatar-placeholder.png"} />
              </div>
              <span className="text-2xl font-bold">{user.fullName}</span>
            </div>
          </label>
        ))}

        <label className="form-control w-full max-w-[30rem]">
          <div className="label">
            <span className="label-text text-lg font-semibold">
              Description
            </span>
          </div>
          <textarea
            {...register("description")}
            type="text"
            placeholder="Description of transfer"
            className="textarea textarea-bordered w-full max-w-[30rem] h-24"
          />
        </label>
        <label className="form-control w-full max-w-[30rem]">
          <div className="label">
            <span className="label-text text-lg font-semibold">Image</span>
          </div>
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-[30rem] "
            onChange={handleImageChange}
          />
        </label>

        {isRegistering ? (
          <button className="btn btn-accent w-full mt-8" disabled>
            <span className="loading loading-spinner loading-xs"></span>
          </button>
        ) : (
          <button className="btn bg-gradient-to-r  from-[#8E2DE2] to-[#4A00E0] w-full mt-8">
            Send Transfer{" "}
          </button>
        )}
      </form>
    </section>
  );
}

export default Transfer;
