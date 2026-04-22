import '../styles/Hero.css'

function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-heading">
      <div className="hero-left">
        <p className="hero-eyebrow">JavaScript Developer</p>
        <h1 className="hero-name" id="hero-heading">
          Tiago<br /><em>Abrahamsson</em>
        </h1>
        <p className="hero-bio">
          I build clean, thoughtful web experiences — focused on structure,
          clarity, and code that's easy to maintain. Currently open to new
          opportunities.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="#contact" className="btn-outline">Get in Touch</a>
        </div>
      </div>

      <div className="hero-right" aria-hidden="true">
        <div className="hero-stat-block">
          <div className="stat-number">3+</div>
          <div className="stat-label">Years of Development</div>
        </div>
        <div className="hero-stat-block">
          <div className="stat-number">React</div>
          <div className="stat-label">Primary Stack</div>
        </div>
      </div>
    </section>
  )
}

export default Hero