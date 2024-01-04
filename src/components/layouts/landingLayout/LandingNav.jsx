import { Link } from "react-router-dom";
import ThemeController from "../landingLayout/ThemeController";
function LandingNav() {
  return (
    <div className="w-full pr-4 bg-base-300/20 z-20 fixed shadow-md flex items-center justify-between backdrop-blur-md">
      <Link to="/" className="btn btn-ghost text-xl self-center ">
        <img
          className="max-w-[50px] max-h-[30px]"
          src="/wow-icon.svg"
          alt="who owess whom logo"
        />
      </Link>

      <Link
        to="/app"
        className=" btn  btn-sm bg-gradient-to-r  from-[#8E2DE2] to-[#4A00E0] font-[500]"
      >
        Get Started
      </Link>
    </div>
  );
}

export default LandingNav;
