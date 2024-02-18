import { Navigate, Outlet } from "react-router-dom";
import { DashboardSidebar } from "./DashboardSidebar";
import "../../stylesheets/DashboardStyle.css";

export const DashboardLayout = () => {

  return (
    <>
      <div className="d-flex dashboard-layout">
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
