import VerificationBadge from "./VerificationBadge";

const profiles = [
  {
    id: 1,
    name: "DJ Aryan",
    role: "Artist",
    category: "DJ / Musician",
    status: "pending",
  },
  {
    id: 2,
    name: "Blue Moon Club",
    role: "Organisation",
    category: "Night Club",
    status: "verified",
  },
  {
    id: 3,
    name: "Neha Photography",
    role: "Artist",
    category: "Photographer",
    status: "pending",
  },
];

export default function VerificationTable() {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="fw-bold mb-3">Profiles Pending Review</h5>

        {/* Desktop / Tablet Table */}
        <div className="table-responsive d-none d-md-block">
          <table className="table align-middle">
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Category</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {profiles.map((p) => (
                <tr key={p.id}>
                  <td>{p.name}</td>
                  <td>{p.role}</td>
                  <td>{p.category}</td>
                  <td>
                    <VerificationBadge status={p.status} />
                  </td>
                  <td>
                    {p.status === "pending" ? (
                      <>
                        <button className="btn btn-sm btn-success me-2">
                          Approve
                        </button>
                        <button className="btn btn-sm btn-outline-danger">
                          Reject
                        </button>
                      </>
                    ) : (
                      <span className="text-muted">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="d-md-none">
          {profiles.map((p) => (
            <div key={p.id} className="border rounded p-3 mb-3">
              <div className="fw-bold">{p.name}</div>
              <div className="text-muted small mb-2">
                {p.role} • {p.category}
              </div>

              <div className="mb-2">
                <VerificationBadge status={p.status} />
              </div>

              {p.status === "pending" ? (
                <div className="d-flex gap-2">
                  <button className="btn btn-sm btn-success w-100">
                    Approve
                  </button>
                  <button className="btn btn-sm btn-outline-danger w-100">
                    Reject
                  </button>
                </div>
              ) : (
                <div className="text-muted small">No actions available</div>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
