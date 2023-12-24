import { useForm } from "react-hook-form";

//TODO: finish form

function Expense() {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  // console.log(errors.length);
  function onSubmit({ ...inputs }) {
    console.log(inputs);
  }

  return (
    <section className="">
      Expense screen
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <label className="form-control w-full max-w-[30rem]">
          <div className="label">
            <span className="label-text text-lg font-semibold">Amount</span>
            {errors?.amount?.message && (
              <span className="label-text-alt hidden text-error">
                {errors.amount.message}
              </span>
            )}
          </div>
          <input
            {...register("amount", { required: "This field is required" })}
            type="number"
            placeholder="Amount of expense"
            className="input input-bordered w-full max-w-[30rem]"
          />
        </label>
        <label className="form-control w-full max-w-[30rem]">
          <div className="label">
            <span className="label-text text-lg font-semibold">Title</span>
            {errors?.amount?.message && (
              <span className="label-text-alt hidden text-error">
                {errors.amount.message}
              </span>
            )}
          </div>
          <input
            {...register("title", { required: "This field is required" })}
            type="text"
            placeholder="Title of expense"
            className="input input-bordered w-full max-w-[30rem]"
          />
        </label>
        <label className="form-control w-full max-w-[30rem] flex flex-col gap-4">
          <div className="label">
            <span className="label-text text-lg font-semibold">
              Split expense with:
            </span>
            {errors?.amount?.message && (
              <span className="label-text-alt hidden text-error">
                {errors.amount.message}
              </span>
            )}
          </div>
          <div className="text-xl flex items-center gap-8">
            <input
              {...register("all")}
              type="checkbox"
              className="checkbox checkbox-lg"
            />
            <span>Split this expense with everyone</span>
          </div>
        </label>
        <label className="text-xl flex items-center gap-8">
          <input
            {...register("user1")}
            type="checkbox"
            className="checkbox checkbox-lg"
          />
          <div className="avatar flex items-center gap-4">
            <div className=" w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
            <span className="text-2xl font-bold">User Name</span>
          </div>
        </label>
        <label className="text-xl flex items-center gap-8">
          <input
            {...register("user2")}
            type="checkbox"
            className="checkbox checkbox-lg"
          />
          <div className="avatar flex items-center gap-4">
            <div className=" w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
            <span className="text-2xl font-bold">User Name</span>
          </div>
        </label>
        <label className="text-xl flex items-center gap-8">
          <input
            {...register("user3")}
            type="checkbox"
            className="checkbox checkbox-lg"
          />
          <div className="avatar flex items-center gap-4">
            <div className=" w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
            <span className="text-2xl font-bold">User Name</span>
          </div>
        </label>
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
            {...register("file")}
            type="file"
            placeholder="Description of expense"
            className="file-input file-input-bordered w-full max-w-[30rem] "
          />
        </label>

        <button className="btn btn-accent w-full">Submit</button>
      </form>
    </section>
  );
}

export default Expense;
