import { useState } from "react";

const rangeVariants = [
  "Current Month",
  "Last Month",
  "Last 3 months",
  "Last 6 months",
  "Last Year",
  "Cutom Range",
];

function TimeRangeSelector() {
  const [rangeValue, setRangeValue] = useState("Current Month");

  function handleClick(e) {
    setRangeValue(e.target.textContent);
  }
  return (
    <div className="dropdown dropdown-hover">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-sm btn-outline m-1 text-accent"
      >
        {rangeValue}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 "
      >
        {rangeVariants.map((variant, idx) => (
          <li
            className={variant === rangeValue ? "text-accent" : ""}
            key={idx}
            onClick={handleClick}
          >
            <a>{variant}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TimeRangeSelector;
