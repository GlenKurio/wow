import { Link } from "react-router-dom";
import ThemeController from "../landingLayout/ThemeController";

function AppNav() {
  return (
    <div className="navbar bg-base-300 shadow-md">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          WoW
        </Link>
      </div>
      <div className="flex-none">
        <ThemeController />
        <div className="dropdown dropdown-end ">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52 "
          >
            <li>
              <a className="justify-between">Edit Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AppNav;
