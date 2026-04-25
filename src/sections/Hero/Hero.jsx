import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <div className="hero-badge">
          <span>✦ New</span>
          Strategic accounting for modern businesses
        </div>

        <h1 className="hero-title">
          Smarter Finance for
          <br />
          Growing Businesses
        </h1>

        <p className="hero-text">
          Expert accounting, tax planning, and advisory services designed to
          help you stay compliant, save money, and grow with confidence.
        </p>

        <div className="hero-actions">
          <button className="primary-btn">Schedule a Call</button>
          <button className="secondary-btn">Explore Services</button>
        </div>

      </div>

    </section>
  );
}

export default Hero;