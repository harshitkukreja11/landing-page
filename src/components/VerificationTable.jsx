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
    </div>
  );
}
