import PageWrapper from "../components/PageWrapper";
import DashboardSidebar from "../components/DashboardSidebar";
import StatCard from "../components/StatCard";

export default function ArtistDashboard() {
  return (
    <PageWrapper>
      <div className="container-fluid">
        <div className="row">
          
          {/* Sidebar */}
          <div className="col-md-3 col-lg-2 p-0">
            <DashboardSidebar />
          </div>

          {/* Main Content */}
          <div className="col-md-9 col-lg-10 p-4">
            <h2 className="fw-bold mb-4">Artist Dashboard</h2>

            {/* Stats */}
            <div className="row g-4 mb-4">
              <div className="col-md-4">
                <StatCard title="Profile Views" value="1,245" />
              </div>
              <div className="col-md-4">
                <StatCard title="Gig Requests" value="12" />
              </div>
              <div className="col-md-4">
                <StatCard title="Bookings" value="5" />
              </div>
            </div>

            {/* Placeholder Section */}
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="fw-bold">Recent Activity</h5>
                <p className="text-muted mb-0">
                  Your recent gig requests and messages will appear here.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
