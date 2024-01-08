import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useState } from "react";
import usePreviewImg from "../../../../hooks/usePreviewImg";
import { useRegisterExpense } from "../../../../hooks/useRegisterExpense";

function Expense({ users, currentUserData }) {
  const { isRegistering, registerNewExpense } = useRegisterExpense();
  const [boxError, setBoxError] = useState(null);
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;
  const { handleImageChange, setSelectedFile, selectedFile } = usePreviewImg();
  const usersToSelect = users.filter(
    (user) => user.uid !== currentUserData.uid
  );
  function onSubmit(inputs) {
    let users = [];

    users = Object.keys(inputs).filter(
      (key) => inputs[key] === true && typeof inputs[key] !== "object"
    );

    if (users.length == 0) {
      return setBoxError("Select at least someone");
    } else {
      setBoxError(null);
    }
    const expense = {
      title: inputs.title,
      description: inputs.description || "",
      total: +inputs.amount,
      type: "expense",
      img: selectedFile || null,
      participants: users,
      author: currentUserData.uid,
      roomId: currentUserData.roomId,
    };

    registerNewExpense(expense, {
      onSuccess: (inputs) => {
        reset();
      },
    });
  }

  return (
    <section className="flex flex-col max-w-[40rem] mx-auto">
      <h1 className="text-2xl font-bold mt-8 mb-4">Register new Expense:</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <label className="form-control w-full ">
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
            placeholder="0.00"
            step="0.01"
            className={
              errors?.amount?.message
                ? " input input-bordered input-error w-full "
                : " input input-bordered  w-full "
            }
          />
        </label>
        <label className="form-control w-full ">
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
            placeholder="Title of expense"
            className={
              errors?.title?.message
                ? " input input-bordered input-error w-full "
                : " input input-bordered  w-full "
            }
          />
        </label>
        <label className="form-control w-full  flex flex-col gap-4">
          <div className="label">
            <span className="label-text text-lg font-semibold">
              Split expense with<span className="text-error">*</span>
            </span>
            {boxError && (
              <span className="label-text-alt  text-error-content bg-error py-1 px-2 rounded-full">
                {boxError}
              </span>
            )}
          </div>
        </label>

        {usersToSelect.length > 0 ? (
          usersToSelect.map((user, idx) => (
            <label className="text-xl flex items-center gap-8" key={idx}>
              <input
                {...register(`${user.uid}`)}
                type="checkbox"
                defaultChecked="checked"
                className="checkbox checkbox-lg checkbox-accent"
              />
              <div className="avatar flex items-center gap-4">
                <div className="w-12 rounded-full">
                  <img
                    src={user.profilePicURL || "/avatar-placeholder.png"}
                    alt={`Avatar of ${user.fullName}`}
                  />
                </div>
                <span className="text-2xl font-bold">{user.fullName}</span>
              </div>
            </label>
          ))
        ) : (
          <p className="pl-2 text-lg font-[600] text-neutral-content tracing-wide">
            There is no one to split expense with... Invite someone!
          </p>
        )}

        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text text-lg font-semibold">
              Description
            </span>
          </div>
          <textarea
            {...register("description")}
            type="text"
            placeholder="Description of expense"
            className="textarea textarea-bordered w-full h-24"
          />
        </label>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text text-lg font-semibold">Image</span>
          </div>
          <input
            type="file"
            className="file-input file-input-bordered w-full "
            onChange={handleImageChange}
          />
        </label>

        <button className=" btn bg-gradient-to-r  from-[#8E2DE2] to-[#4A00E0] w-full mt-8">
          {isRegistering ? "Registering expense ..." : "Register Transaction"}
        </button>
      </form>
    </section>
  );
}

export default Expense;
