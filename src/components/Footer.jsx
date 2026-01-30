import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4 text-center">
      <div className="container">
        <div className="mb-3">
          <Link to="/about" className="text-light mx-2">About</Link>
          <Link to="/how-it-works" className="text-light mx-2">How It Works</Link>
          <Link to="/faq" className="text-light mx-2">FAQ</Link>
          <Link to="/contact" className="text-light mx-2">Contact</Link>
          <Link to="/terms-privacy" className="text-light mx-2">Terms & Privacy</Link>
        </div>

        <p className="small mb-0">
          © 2026 — Talent & Hospitality Marketplace. All rights reserved
        </p>
      </div>
    </footer>
  );
}
