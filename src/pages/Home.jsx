import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import LandingPage from "../LandingPage";
import HomeSkeleton from "../components/skeletons/HomeSkeleton";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API / content loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {loading ? <HomeSkeleton /> : <LandingPage />}
    </motion.div>
  );
}
