import { motion } from "framer-motion";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";

export default function ArtistCard({ artist }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="card h-100 shadow-sm border-0"
    >
      {/* Image */}
      <img
        src={artist.image}
        alt={artist.name}
        className="card-img-top"
        style={{ height: "180px", objectFit: "cover" }}
      />

      <div className="card-body d-flex flex-column">
        {/* Name */}
        <h5 className="fw-bold mb-1">{artist.name}</h5>

        {/* Category */}
        <p className="text-muted mb-2">{artist.category}</p>

        {/* Location + Rating */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <small className="text-muted">
            <FaMapMarkerAlt className="me-1" />
            {artist.location}
          </small>

          <small className="text-warning fw-semibold">
            <FaStar /> {artist.rating}
          </small>
        </div>

        {/* Price */}
        <div className="mt-auto d-flex justify-content-between align-items-center">
          <span className="fw-bold">
            ₹{artist.price}
            <small className="text-muted"> / event</small>
          </span>

          <button className="btn btn-outline-primary btn-sm">
            View
          </button>
        </div>
      </div>
    </motion.div>
  );
}
