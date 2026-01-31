import { NavLink } from "react-router-dom";

export default function DashboardSidebar() {
  return (
    <div className="bg-dark text-white vh-100 p-3">
      <h5 className="fw-bold mb-4">Dashboard</h5>

      <ul className="nav flex-column gap-2">
        <li>
          <NavLink className="nav-link text-white" to="#">
            Overview
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link text-white" to="#">
            Gigs
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link text-white" to="#">
            Messages
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link text-white" to="#">
            Settings
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
