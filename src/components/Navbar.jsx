import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  // Update isMobile on resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleNavbar = () => setIsOpen(!isOpen);
  const closeNavbar = () => setIsOpen(false);

  const menuItems = [
    { to: "/artists", label: "Artists" },
    { to: "/organisations", label: "Organisations" },
    { to: "/artist/dashboard", label: "Artist Dashboard"  },
    { to: "/organisation/dashboard", label: "Org Dashboard" },
    {to: "/admin", label: "Admin Dashboard"},
    { to: "/login", label: "Login" },
    { to: "/register", label: "Sign Up", isButton: true },
  ];

  const drawerVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
    exit: { x: "-100%", transition: { type: "spring", stiffness: 300, damping: 30 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      {/* TOP NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow px-3">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <Link className="navbar-brand fw-bold" to="/" onClick={closeNavbar}>
            TalentHub
          </Link>

          {/* Hamburger visible only on mobile */}
          {isMobile && (
            <button
              className="navbar-toggler"
              type="button"
              aria-label="Toggle navigation"
              onClick={toggleNavbar}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          )}

          {/* Desktop Links */}
          {!isMobile && (
            <ul className="navbar-nav ms-auto mb-0 d-flex gap-3 align-items-center">
              {menuItems.map((item, idx) =>
                item.isButton ? (
                  <NavLink
                    key={idx}
                    to={item.to}
                    className="btn btn-primary px-3"
                  >
                    {item.label}
                  </NavLink>
                ) : (
                  <NavLink
                    key={idx}
                    to={item.to}
                    className={`nav-link ${item.className || ""}`}
                  >
                    {item.label}
                  </NavLink>
                )
              )}
            </ul>
          )}
        </div>
      </nav>

      {/* MOBILE LEFT DRAWER */}
      {isMobile && (
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Overlay */}
              <motion.div
                className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                onClick={closeNavbar}
                style={{ zIndex: 1040 }}
              />

              {/* Drawer */}
              <motion.div
                className="position-fixed top-0 start-0 h-100 bg-dark text-white p-4"
                style={{ width: 250, zIndex: 1050 }}
                variants={drawerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <motion.ul className="list-unstyled mt-4">
                  {menuItems.map((item, idx) => (
                    <motion.li
                      key={idx}
                      className="mb-3"
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      transition={{ delay: 0.05 * idx }}
                    >
                      {item.isButton ? (
                        <NavLink
                          to={item.to}
                          className="btn btn-primary w-100"
                          onClick={closeNavbar}
                        >
                          {item.label}
                        </NavLink>
                      ) : (
                        <NavLink
                          to={item.to}
                          className={`nav-link text-white ${item.className || ""}`}
                          onClick={closeNavbar}
                        >
                          {item.label}
                        </NavLink>
                      )}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      )}
    </>
  );
}
