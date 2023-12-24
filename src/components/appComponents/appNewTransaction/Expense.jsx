import { useForm } from "react-hook-form";

//TODO: finish form

function Expense() {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  function onSubmit({ ...inputs }) {}

  return (
    <section className="">
      Expense screen
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-lg font-semibold">Amount</span>
            <span className="label-text-alt hidden">Top Right label</span>
          </div>
          <input
            type="number"
            placeholder="Type here"
            className="input input-bordered w-full max-w-[30rem]"
          />
        </label>
      </form>
    </section>
  );
}

export default Expense;
