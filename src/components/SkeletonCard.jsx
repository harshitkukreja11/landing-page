export default function SkeletonCard() {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <div className="placeholder-glow">
          <div className="placeholder col-12 mb-3" style={{ height: 150 }} />
          <div className="placeholder col-8 mb-2" />
          <div className="placeholder col-6" />
        </div>
      </div>
    </div>
  );
}
