import { useState } from "react";
import PageWrapper from "../components/PageWrapper";
import DashboardSidebar from "../components/DashboardSidebar";
import StatCard from "../components/StatCard";

export default function OrganisationDashboard() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <PageWrapper>
      <div className="container-fluid">
        <div className="row min-vh-100">

          {/* Mobile Sidebar (Offcanvas) */}
          <div
            className={`offcanvas offcanvas-start d-md-none ${showSidebar ? "show" : ""}`}
            style={{ visibility: showSidebar ? "visible" : "hidden" }}
          >
            <div className="offcanvas-header">
              <h5 className="fw-bold">Dashboard</h5>
              <button
                className="btn-close"
                onClick={() => setShowSidebar(false)}
              ></button>
            </div>
            <div className="offcanvas-body p-0">
              <DashboardSidebar />
            </div>
          </div>

          {/* Desktop Sidebar */}
          <div className="col-md-3 col-lg-2 p-0 border-end d-none d-md-block">
            <DashboardSidebar />
          </div>

          {/* Main Content */}
          <div className="col-12 col-md-9 col-lg-10 p-3 p-md-4">

            {/* Mobile Menu Button */}
            <button
              className="btn btn-outline-dark d-md-none mb-3"
              onClick={() => setShowSidebar(true)}
            >
              ☰ Menu
            </button>

            <h2 className="fw-bold mb-4 text-center text-md-start">
              Organisation Dashboard
            </h2>

            {/* Stats */}
            <div className="row g-3 g-md-4 mb-4">
              <div className="col-12 col-sm-6 col-md-4">
                <StatCard title="Active Gigs" value="8" />
              </div>
              <div className="col-12 col-sm-6 col-md-4">
                <StatCard title="Applications" value="26" />
              </div>
              <div className="col-12 col-sm-12 col-md-4">
                <StatCard title="Hired Artists" value="10" />
              </div>
            </div>

            {/* Hiring Activity */}
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="fw-bold">Hiring Activity</h5>
                <p className="text-muted mb-0">
                  Your recent hiring actions will appear here.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
