import MoveBackButton from "../../components/MoveBackButton";
import { useParams } from "react-router-dom";

const transaction = {
  author: "123456",
  title: "Car Insurance",
  description:
    "Monthly payment for car insurance to MPI. And blah blah blah and so on and go on alalalf asdf sdf ",
  total: 145,
  type: "transfer",
  img: "/public/avatars/polina.png",
  participants: ["Polina Shaban", "Vita Minko"],
  createdAt: Date.now(),
};

const currUser = "123456";
//TODO: get transactions from query cache, as well as users info. Get current auth user. If uathor-uid of transaction == current-auth-user uid - allow edit.
function TransactionDetails() {
  const { id } = useParams();

  return (
    <main className="min-h-screen px-4 pb-16">
      {currUser === transaction.author ? (
        <div className="px-4 fixed bottom-2 left-0 w-full z-20">
          <button className="btn btn-accent w-full  flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
            Edit transaction
          </button>
        </div>
      ) : null}
      <MoveBackButton />
      <h1 className="text-2xl font-bold mb-8 capitalize text-accent">
        Transaction Details
      </h1>
      <section className="flex flex-col text-xl gap-8">
        <div className="text-xl font-semibold flex  flex-col gap-4">
          <div className="flex gap-2 ">
            <span className="border-b-[1px] border-accent">
              Transaction id:
            </span>
            <span>{id}</span>
          </div>
          <div className="flex  gap-2">
            <span className="border-b-[1px] border-accent">
              Transaction type:{" "}
            </span>
            <span
              className={
                transaction.type === "transfer"
                  ? "text-warning-content bg-warning px-4 py-1 rounded-full text-sm max-w-[150px] "
                  : " text-error-content bg-error px-4 py-1 rounded-full text-sm max-w-[150px]  "
              }
            >
              {transaction.type}
            </span>
          </div>
        </div>
        <div className="flex flex-col  justify-center ">
          <p className=" text-accent  font-bold capitalize ">
            Transaction author
          </p>
          <div className="py-2 border-b-[1px] border-accent ">
            <figure className="flex items-center gap-8 ">
              <div className="avatar">
                <div className="w-16 rounded-full">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <figcaption className="text-2xl "> User Name</figcaption>
            </figure>
          </div>
        </div>
        <div className="flex flex-col ">
          <p className=" text-accent  font-bold capitalize ">
            Transaction title
          </p>
          <div className="border-b-[1px] border-accent py-2">
            <p className="text-2xl ">{transaction.title}</p>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-accent  font-bold capitalize ">
            Transaction Total
          </p>
          <div className="border-b-[1px] border-accent py-2">
            <p className="text-2xl ">${transaction.total}</p>
          </div>
        </div>
        {/* TODO: get participants fullName & Avataars */}
        <div className="flex flex-col  ">
          {transaction.type === "transfer" ? (
            <p className=" text-accent  font-bold capitalize">Transfer to</p>
          ) : (
            <p className=" text-accent p-1 font-bold capitalize">Split with:</p>
          )}
          <div className="py-2 border-b-[1px] border-accent">
            {transaction.participants}
          </div>
        </div>
        <div className="flex flex-col">
          <p className=" text-accent  font-bold capitalize">
            Transaction Description
          </p>
          <div className="border-b-[1px] border-accent py-2">
            <p className="text-2xl">{transaction.description}</p>
          </div>
        </div>
        <div className="flex flex-col ">
          <p className=" text-accent font-bold capitalize">Image</p>
          <div className="border-b-[1px] border-accent py-2">
            {transaction.img ? (
              <figure>
                <img src={transaction.img} alt="" />
              </figure>
            ) : (
              <p>No image with this transaction</p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default TransactionDetails;
