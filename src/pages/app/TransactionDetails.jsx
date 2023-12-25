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
    <main className="min-h-screen px-4 pb-8">
      {currUser === transaction.author ? (
        <div className="px-4 fixed bottom-2 left-0 w-full">
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
      <h1 className="text-2xl font-bold my-4 uppercase text-center">
        Transaction Details
      </h1>
      <section className="flex flex-col text-xl text-center">
        <div className="text-xl font-semibold flex  flex-col ">
          <div className="flex flex-col gap-2">
            <span>Transaction id:</span>
            <span>{id}</span>
          </div>
          <div className="flex flex-col gap-2">
            <span>Transaction type: </span>
            <span
              className={
                transaction.type === "transfer"
                  ? "text-warning-content bg-warning px-4 py-1 rounded-full text-sm max-w-[150px] mx-auto"
                  : " text-error-content bg-error px-4 py-1 rounded-full text-sm max-w-[150px] mx-auto "
              }
            >
              {transaction.type}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-4 border-b-[1px] border-accent py-8 justify-center">
          <p className=" text-accent  font-bold capitalize">
            Transaction author
          </p>
          <figure className="flex items-center gap-8 justify-center">
            <div className="avatar">
              <div className="w-16 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <figcaption className="text-2xl font-semibold">
              {" "}
              User Name
            </figcaption>
          </figure>
        </div>
        <div className="flex flex-col gap-4 border-b-[1px] border-accent py-8">
          <p className=" text-accent  font-bold capitalize">
            Transaction title
          </p>
          <p className="text-2xl font-semibold">{transaction.title}</p>
        </div>
        <div className="flex flex-col gap-4 border-b-[1px] border-accent py-8">
          <p className="text-accent  font-bold capitalize">Transaction Total</p>
          <p className="text-2xl font-semibold">${transaction.total}</p>
        </div>
        {/* TODO: get participants fullName & Avataars */}
        <div className="flex flex-col gap-4 border-b-[1px] border-accent py-8">
          {transaction.type === "transfer" ? (
            <p className=" text-accent  font-bold capitalize">Transfer to</p>
          ) : (
            <p className=" text-accent p-1 font-bold capitalize">Split with:</p>
          )}
          {transaction.participants}
        </div>
        <div className="flex flex-col gap-4 border-b-[1px] border-accent py-8">
          <p className=" text-accent  font-bold capitalize">
            Transaction Description
          </p>
          <p className="text-2xl font-semibold">{transaction.description}</p>
        </div>
        <div className="flex flex-col gap-4 border-b-[1px] border-accent py-8">
          <p className=" text-accent font-bold capitalize">Image</p>
          {transaction.img ? (
            <figure>
              <img src={transaction.img} alt="" />
            </figure>
          ) : (
            <p>No image with this transaction</p>
          )}
        </div>
      </section>
    </main>
  );
}

export default TransactionDetails;
