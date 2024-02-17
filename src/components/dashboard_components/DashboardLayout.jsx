import { Navigate, Outlet } from "react-router-dom";
import { DashboardSidebar } from "./DashboardSidebar";

export const DashboardLayout = () => {

  return (
    <>
      <div className="d-flex">
        <div className="w-auto">
          <DashboardSidebar />
        </div>
        <div className="col overflow-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
};
