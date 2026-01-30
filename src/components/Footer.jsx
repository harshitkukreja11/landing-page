import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4 text-center">
      <div className="container">
        <div className="mb-3">
          <a href="#" className="text-light mx-2">About</a>
          <a href="#" className="text-light mx-2">How It Works</a>
          <a href="#" className="text-light mx-2">FAQ</a>
          <a href="#" className="text-light mx-2">Contact</a>
          <a href="#" className="text-light mx-2">Terms & Privacy</a>
        </div>
        <p className="small mb-0">
          © 2026 — Talent & Hospitality Marketplace. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
