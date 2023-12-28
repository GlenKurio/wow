import { Link } from "react-router-dom";
import ThemeController from "../landingLayout/ThemeController";

import { auth } from "../../../firebase/firebase";
import { signOut } from "firebase/auth";

function AppNav({ currentUserData }) {
  const firstName = currentUserData.fullName.split(" ")[0];

  async function handleLogout() {
    try {
      await signOut(auth);
    } catch (error) {
      throw new Error(error.message);
    }
  }

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
                alt={`The profile picture of ${currentUserData.fullName}`}
                src={currentUserData.profilePicURL || "/avatar-placeholder.png"}
              />
            </div>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52 "
          >
            <h3 className="text-xl font-semibold text-center mb-2">
              Hello, {firstName}
            </h3>
            <li>
              <Link to="edit-profile" className="justify-between">
                Edit Profile
              </Link>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <Link onClick={handleLogout}>Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AppNav;
