import PageWrapper from "../components/PageWrapper";
import DashboardSidebar from "../components/DashboardSidebar";
import StatCard from "../components/StatCard";

export default function OrganisationDashboard() {
  return (
    <PageWrapper>
      <div className="container-fluid">
        <div className="row">
          
          <div className="col-md-3 col-lg-2 p-0">
            <DashboardSidebar />
          </div>

          <div className="col-md-9 col-lg-10 p-4">
            <h2 className="fw-bold mb-4">Organisation Dashboard</h2>

            <div className="row g-4 mb-4">
              <div className="col-md-4">
                <StatCard title="Active Gigs" value="8" />
              </div>
              <div className="col-md-4">
                <StatCard title="Applications" value="26" />
              </div>
              <div className="col-md-4">
                <StatCard title="Hired Artists" value="10" />
              </div>
            </div>

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
