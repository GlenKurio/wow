import { Outlet } from "react-router-dom";
import LandingNav from "./LandingNav";
import LandingFooter from "./LandingFooter";
function LandingLayout() {
  return (
    <div>
      <LandingNav />
      <Outlet />
      <LandingFooter />
    </div>
  );
}

export default LandingLayout;
