import AnimateOnView from "./AnimateOnView";

export default function HowItWorks() {
  return (
    <section className="py-5">
      <div className="container">
        <AnimateOnView>
          <h2 className="text-center fw-bold mb-4">How It Works</h2>
        </AnimateOnView>

        <div className="row text-center">
          {[
            "Create Your Profile",
            "Discover & Match",
            "Connect & Hire",
          ].map((title, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <AnimateOnView delay={index * 0.15}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5>{title}</h5>
                    <p>Smooth, fast and professional workflow.</p>
                  </div>
                </div>
              </AnimateOnView>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
