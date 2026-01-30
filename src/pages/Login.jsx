export default function Login() {
  return (
    <div className="container py-5" style={{ maxWidth: "500px" }}>
      <h2 className="fw-bold mb-4">Login</h2>

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

      <button className="btn btn-dark w-100">
        Login
      </button>
    </div>
  );
}
