export default function VerificationBadge({ status }) {
  if (status === "verified") {
    return <span className="badge bg-success">Verified</span>;
  }

  if (status === "rejected") {
    return <span className="badge bg-danger">Rejected</span>;
  }

  return <span className="badge bg-warning text-dark">Pending</span>;
}
