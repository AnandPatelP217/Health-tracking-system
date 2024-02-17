import { NavLink, Navigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
export const DashboardSidebar = () => {
  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 bg-light vh-100"
        style={{ width: "280px" }}
      >
        <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
          <i className="bi bi-person-circle fs-1 me-3"></i>
          <NavLink to="/dashboard/home" className="dashboard-item" style={{textDecoration: 'none', color: 'var(--text-black-900)'}}>
            {" "}
            Hi Harsh
          </NavLink>
        </div>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <NavLink to="/dashboard/home" className="nav-link">
              <i class="bi bi-speedometer2 m-1"></i>
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/dashboard/exercise" className="nav-link">
              <i className="bi bi-people m-1"></i>
              Exercise
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/dashboard/routine"
              className="nav-link"
              // activeClassName="active"
            >
              <i class="bi bi-chat-left-dots m-1"></i>
              Set Goals
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/dashboard/diet"
              className="nav-link"
              // activeClassName="active"
            >
              <i class="bi bi-microsoft-teams m-1"></i>
              Diet
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/dashboard/logout"
              className="nav-link"
              // activeClassName="active"
            >
              <i class="bi bi-box-arrow-right m-1"></i>
              Logout
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};
