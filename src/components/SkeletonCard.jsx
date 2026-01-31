export default function SkeletonCard() {
  return (
    <div className="card p-3">
      <div className="placeholder-glow">
        <div
          className="placeholder col-12 mb-3"
          style={{ height: "160px" }}
        ></div>
        <span className="placeholder col-7"></span>
        <span className="placeholder col-4"></span>
      </div>
    </div>
  );
}
