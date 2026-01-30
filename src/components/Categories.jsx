import React from "react";

export default function Categories() {
  const categories = [
    "Singers & Musicians",
    "Dancers & Choreographers",
    "Photographers & Filmmakers",
    "Actors & Performers",
    "Visual & Digital Artists",
    "Influencers & Creators",
    "Writers & Poets",
  ];

  return (
    <section className="bg-light py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">
          Talent Across Every Creative Field
        </h2>
        <div className="row text-center">
          {categories.map((cat, index) => (
            <div className="col-sm-6 col-md-3 mb-3" key={index}>
              <div className="card shadow-sm">
                <div className="card-body">{cat}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
