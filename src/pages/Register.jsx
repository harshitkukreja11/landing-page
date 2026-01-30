export default function Register() {
  return (
    <div className="container py-5" style={{ maxWidth: "500px" }}>
      <h2 className="fw-bold mb-4">Create Account</h2>

      <select className="form-select mb-3">
        <option>I am an Artist</option>
        <option>I am an Organisation</option>
      </select>

      <input
        type="email"
        className="form-control mb-3"
        placeholder="Email"
      />
      <input
        type="password"
        className="form-control mb-3"
        placeholder="Password"
      />

      <button className="btn btn-primary w-100">
        Register
      </button>
    </div>
  );
}
