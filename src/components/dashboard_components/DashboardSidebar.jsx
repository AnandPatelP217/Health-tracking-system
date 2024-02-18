import { NavLink, Navigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../stylesheets/DashboardStyle.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const DashboardSidebar = () => {
  const navigate = useNavigate();
  const logout = () => {
    navigate("/");
    toast.error("You Logout!");
  }
  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 bg-light vh-100 sidebar"
        style={{ width: "280px" }}
      >
        <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
          <i className="bi bi-person-circle fs-1 me-3"></i>
          <NavLink
            to="/dashboard/home"
            className="dashboard-item"
            style={{ textDecoration: "none", color: "var(--text-black-900)" }}
          >
            Hi Harsh
          </NavLink>
        </div>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <NavLink to="/dashboard/home" className="nav-link">
              <i class="fa-solid fa-gauge-high" style={{paddingRight: "0.75rem"}}></i>
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/dashboard/exercise" className="nav-link">
              <i class="fa-solid fa-dumbbell" style={{paddingRight: "0.75rem"}}></i>
              Exercise
            </NavLink>
          </li>
          {/* <li className="nav-item">
            <NavLink
              to="/dashboard/routine"
              className="nav-link"
              // activeClassName="active"
            >
              <i class="fa-solid fa-bullseye" style={{paddingRight: "0.75rem"}}></i>
              Set Goals
            </NavLink>
          </li> */}
          <li className="nav-item">
            <NavLink
              to="/dashboard/diet"
              className="nav-link"
              // activeClassName="active"
            >
              <i class="fa-solid fa-mug-hot" style={{paddingRight: "0.75rem"}}></i>
              Diet
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/"
              className="nav-link"
              onClick={logout}
              // activeClassName="active"
            >
              <i class="fa-solid fa-right-from-bracket" style={{paddingRight: "0.75rem"}}></i>
              Logout
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};
