import { Link } from "react-router-dom";

function ActionButton() {
  return (
    <div className="px-4 fixed left-0 bottom-4 z-20 w-full">
      <Link
        to="new-transaction"
        className="btn  btn-accent text-accent-content  shadow-xl capitalize text-lg btn-block "
      >
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
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
        add new transaction
      </Link>
    </div>
  );
}

export default ActionButton;
