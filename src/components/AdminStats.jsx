export default function AdminStats() {
  return (
    <div className="row">
      <div className="col-md-3 mb-3">
        <div className="card p-3 shadow-sm">
          <h6>Total Profiles</h6>
          <h3 className="fw-bold">248</h3>
        </div>
      </div>

      <div className="col-md-3 mb-3">
        <div className="card p-3 shadow-sm">
          <h6>Pending Verification</h6>
          <h3 className="fw-bold text-warning">19</h3>
        </div>
      </div>

      <div className="col-md-3 mb-3">
        <div className="card p-3 shadow-sm">
          <h6>Verified</h6>
          <h3 className="fw-bold text-success">211</h3>
        </div>
      </div>

      <div className="col-md-3 mb-3">
        <div className="card p-3 shadow-sm">
          <h6>Rejected</h6>
          <h3 className="fw-bold text-danger">18</h3>
        </div>
      </div>
    </div>
  );
}
