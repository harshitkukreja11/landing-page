import React from "react";

export default function Artists() {
  return (
    <section className="bg-light py-5">
      <div className="container">
        <h2 className="fw-bold">Turn Your Talent Into Opportunities</h2>
        <p className="mt-3">
          Showcase your work and get discovered by venues actively hiring.
        </p>
        <ul className="list-unstyled mt-3">
          <li>✔ Professional artist profile</li>
          <li>✔ Upload photos & videos</li>
          <li>✔ Get matched with gigs</li>
          <li>✔ Control pricing & availability</li>
        </ul>
        <button className="btn btn-primary mt-3">
          Create Artist Profile
        </button>
      </div>
    </section>
  );
}
