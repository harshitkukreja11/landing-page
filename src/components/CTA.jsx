import AnimateOnView from "./AnimateOnView";

export default function CTA() {
  return (
    <section className="bg-primary text-white text-center py-5">
      <div className="container">
        <AnimateOnView>
          <h2 className="fw-bold">Ready to Collaborate?</h2>
          <p className="mt-3">
            Join a marketplace built exclusively for talent and hospitality
            businesses.
          </p>
        </AnimateOnView>

        <AnimateOnView delay={0.3}>
          <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
            <button className="btn btn-light btn-lg">Join as Artist</button>
            <button className="btn btn-dark btn-lg">Register Your Venue</button>
          </div>
        </AnimateOnView>
      </div>
    </section>
  );
}
