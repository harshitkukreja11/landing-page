import AdminStats from "../components/AdminStats";
import VerificationTable from "../components/VerificationTable";

export default function AdminDashboard() {
  return (
    <div className="container py-5">
      <h1 className="fw-bold mb-4">Admin Verification Dashboard</h1>

      <AdminStats />

      <div className="mt-5">
        <VerificationTable />
      </div>
    </div>
  );
}
