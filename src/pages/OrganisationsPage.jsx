import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";

export default function OrganisationsPage() {
  return (
    <PageWrapper>
      <div className="container py-5">
        
        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-5"
        >
          <h1 className="fw-bold mb-3">
            Hire Verified Talent for Your Venue
          </h1>
          <p className="text-muted fs-5">
            Discover singers, DJs, dancers, influencers, and creatives
            perfectly matched to your restaurant, club, hotel, or event.
          </p>

          <Link to="/register" className="btn btn-primary btn-lg mt-3">
            Post a Hiring Request
          </Link>
        </motion.div>

        {/* BENEFITS */}
        <div className="row g-4 mb-5">
          {[
            {
              title: "Verified Artists",
              text: "All artists are reviewed and verified for quality and professionalism."
            },
            {
              title: "Smart Matching",
              text: "Get recommendations based on category, location, budget, and availability."
            },
            {
              title: "Direct Communication",
              text: "Chat directly with artists. No agents. No middlemen."
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="col-md-4"
            >
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h5 className="fw-bold mb-2">{item.title}</h5>
                  <p className="text-muted mb-0">{item.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* HOW IT WORKS */}
        <div className="mb-5">
          <h3 className="fw-bold mb-4 text-center">How It Works</h3>

          <div className="row g-4">
            {[
              "Create your venue profile",
              "Post your hiring requirement",
              "Get matched & hire talent"
            ].map((step, index) => (
              <div className="col-md-4 text-center" key={index}>
                <div className="rounded-circle bg-primary text-white d-inline-flex align-items-center justify-content-center mb-3"
                  style={{ width: 50, height: 50 }}>
                  {index + 1}
                </div>
                <p className="fw-semibold">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FINAL CTA */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-dark text-white p-5 rounded text-center"
        >
          <h3 className="fw-bold mb-3">
            Build Unforgettable Experiences
          </h3>
          <p className="text-muted mb-4">
            Join a trusted marketplace built exclusively for hospitality
            businesses and creative talent.
          </p>

          <Link to="/register" className="btn btn-outline-light btn-lg">
            Register Your Organisation
          </Link>
        </motion.div>

      </div>
    </PageWrapper>
  );
}
