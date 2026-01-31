import "bootstrap/dist/css/bootstrap.min.css";

export default function HomeSkeleton() {
  return (
    <div className="container py-5">
      <div className="placeholder-glow mb-4">
        <span className="placeholder col-6 placeholder-lg"></span>
      </div>

      <div className="row g-4">
        {[1, 2, 3].map((i) => (
          <div className="col-md-4" key={i}>
            <div className="card p-3">
              <div className="placeholder-glow">
                <div className="placeholder col-12 mb-3" style={{ height: "150px" }}></div>
                <span className="placeholder col-7"></span>
                <span className="placeholder col-4"></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
