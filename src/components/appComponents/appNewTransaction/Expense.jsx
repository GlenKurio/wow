import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useState } from "react";
import usePreviewImg from "../../../hooks/usePreviewImg";

//TODO: finish form
const usersData = [{ uid: "123" }, { uid: "3463" }, { uid: "2366" }];

function Expense() {
  const [boxError, setBoxError] = useState(null);
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const { handleImageChange, setSelectedFile, selectedFile } = usePreviewImg();
  // console.log(errors.length);
  function onSubmit({ ...inputs }) {
    console.log(inputs);
    let users = [];

    users = Object.keys(inputs).filter(
      (key) => inputs[key] === true && typeof inputs[key] !== "object"
    );

    if (users.length == 0) {
      return setBoxError("Select at least someone");
    } else {
      setBoxError(null);
    }
    const expenseData = {
      user: "Polina Shaban",
      title: inputs.title,
      description: inputs.description || "",
      total: inputs.amount,
      img: selectedFile || null,
      type: "expense",
      participants: users,
    };
    console.log(expenseData);
  }

  return (
    <section className="">
      <h1 className="text-2xl font-bold mt-8 mb-4">Register new Expense:</h1>
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
            {...register("amount", { required: "This field is required" })}
            type="number"
            placeholder="Amount of expense"
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
            placeholder="Title of expense"
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
              Split expense with<span className="text-error">*</span>
            </span>
            {boxError && (
              <span className="label-text-alt  text-error-content bg-error py-1 px-2 rounded-full">
                {boxError}
              </span>
            )}
          </div>
        </label>

        {usersData.map((user, idx) => (
          <label className="text-xl flex items-center gap-8" key={idx}>
            <input
              {...register(`${user.uid}`)}
              type="checkbox"
              defaultChecked="checked"
              className="checkbox checkbox-lg"
            />
            <div className="avatar flex items-center gap-4">
              <div className=" w-16 rounded-full  ">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
              <span className="text-2xl font-bold">User Name</span>
            </div>
          </label>
        ))}

        <label className="form-control w-full max-w-[30rem]">
          <div className="label">
            <span className="label-text text-lg font-semibold">
              Description
            </span>
            {errors?.amount?.message && (
              <span className="label-text-alt hidden text-error">
                {errors.amount.message}
              </span>
            )}
          </div>
          <textarea
            {...register("description")}
            type="text"
            placeholder="Description of expense"
            className="textarea textarea-bordered w-full max-w-[30rem] h-24"
          />
        </label>
        <label className="form-control w-full max-w-[30rem]">
          <div className="label">
            <span className="label-text text-lg font-semibold">Image</span>
            {errors?.amount?.message && (
              <span className="label-text-alt hidden text-error">
                {errors.amount.message}
              </span>
            )}
          </div>
          <input
            type="file"
            placeholder="Description of expense"
            className="file-input file-input-bordered w-full max-w-[30rem] "
            onChange={handleImageChange}
          />
        </label>

        <button className="btn btn-accent w-full mt-8">Submit</button>
      </form>
    </section>
  );
}

export default Expense;
