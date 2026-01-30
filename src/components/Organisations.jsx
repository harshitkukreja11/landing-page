import React from "react";

export default function Organisations() {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="fw-bold">Find the Right Talent, Faster</h2>
        <p className="mt-3">
          Discover verified artists that fit your vibe, budget, and schedule.
        </p>
        <ul className="list-unstyled mt-3">
          <li>✔ Search by category & location</li>
          <li>✔ Post hiring requirements</li>
          <li>✔ Smart recommendations</li>
          <li>✔ Manage bookings easily</li>
        </ul>
        <button className="btn btn-primary mt-3">
          Post a Hiring Request
        </button>
      </div>
    </section>
  );
}
