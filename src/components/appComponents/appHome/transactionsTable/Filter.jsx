import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  function handleClick(value, label) {
    searchParams.set(filterField, value);
    if (searchParams.get("page")) searchParams.set("page", 1);

    setSearchParams(searchParams);
  }
  // Button Label match the search.params value
  let buttonVal;
  const matchingOption = options.find(
    (o) => o.value == searchParams.get("status")
  );
  if (matchingOption) {
    buttonVal = matchingOption.label;
  } else {
    buttonVal = "All";
  }

  return (
    <div className="flex items-center gap-8 ">
      <p className="font-bold tracking-wider">Filter:</p>
      <div className="dropdown dropdown-hover">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-sm btn-outline m-1 text-accent capitalize"
        >
          {buttonVal}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[10] menu p-2  bg-base-100 rounded-box w-52 shadow-lg"
        >
          {options.map((option) => (
            <li
              className={
                option.value === currentFilter
                  ? "text-accent  tracking-[0.04rem] font-semibold"
                  : "tracking-[0.04rem]"
              }
              key={option.value}
              onClick={() => handleClick(option.value, option.label)}
            >
              <a>{option.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Filter;
