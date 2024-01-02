import { Link } from "react-router-dom";

function ActionButton() {
  return (
    <div className="px-4 fixed left-0 bottom-4 z-20 w-full lg:max-w-[60vw] lg:left-[50%] lg:translate-x-[-50%] ">
      <Link
        to="new-transaction"
        className="btn  text-accent-content  shadow-xl capitalize text-lg btn-block bg-gradient-to-r  from-[#8E2DE2] to-[#4A00E0]"
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
