import { motion } from "framer-motion";

export default function StatCard({ label, value }) {
  return (
    <motion.div
      className="card text-center shadow-sm"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <div className="card-body">
        <h2 className="fw-bold">{value}</h2>
        <p className="text-muted">{label}</p>
      </div>
    </motion.div>
  );
}
