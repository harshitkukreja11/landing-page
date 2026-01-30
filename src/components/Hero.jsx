import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-primary text-white text-center py-5">
      <div className="container">
        <motion.h1
          className="display-5 fw-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Where Talent Meets Hospitality
        </motion.h1>

        <motion.p
          className="lead mt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Discover, hire, and collaborate with verified artists for restaurants,
          bars, clubs, hotels, and events — all in one smart marketplace.
        </motion.p>

        <motion.div
          className="d-flex justify-content-center gap-3 mt-4 flex-wrap"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <button className="btn btn-light btn-lg">Join as an Artist</button>
          <button className="btn btn-dark btn-lg">Hire Artists</button>
        </motion.div>
      </div>
    </section>
  );
}
