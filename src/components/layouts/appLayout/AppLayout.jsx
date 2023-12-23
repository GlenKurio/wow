import AppNav from "./AppNav";
import { Outlet } from "react-router-dom";
function AppLayout() {
  return (
    <div>
      <AppNav />
      <Outlet />
    </div>
  );
}

export default AppLayout;
