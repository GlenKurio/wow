import { useCurrentUserData } from "../../../hooks/useGetCurrentUserData";
import AppNav from "./AppNav";
import { Outlet } from "react-router-dom";
function AppLayout() {
  const { isLoading, currentUserData, error } = useCurrentUserData();

  if (isLoading) {
    return (
      <div className="min-h-screen grid place-content-center">
        <span className="loading loading-dots loading-lg loading-accent"></span>
      </div>
    );
  }
  return (
    <div>
      <AppNav currentUserData={currentUserData} />
      <Outlet context={currentUserData} />
    </div>
  );
}

export default AppLayout;
