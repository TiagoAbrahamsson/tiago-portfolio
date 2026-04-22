import '../styles/About.css'

function About() {
  return (
    <section className="about" id="about" aria-labelledby="about-heading">
      <div className="section-header">
        <span className="section-num" aria-hidden="true">01</span>
        <h2 className="section-title" id="about-heading">About</h2>
        <div className="section-rule" aria-hidden="true"></div>
      </div>
      <div className="about-grid">
        <div className="about-cell">
          <h3 className="about-cell-label">Background</h3>
          <p>Studied JavaScript development with a focus on building real, functional products — not just theory. I care about writing code that works and is easy to read.</p>
        </div>
        <div className="about-cell">
          <h3 className="about-cell-label">Approach</h3>
          <p>I like to understand the problem before reaching for a solution. Clean structure, sensible naming, and minimal complexity are things I always aim for.</p>
        </div>
        <div className="about-cell">
          <h3 className="about-cell-label">Currently</h3>
          <p>Working on personal and client projects, building in React + Vite, and continuously growing my frontend skills. Based in Sweden.</p>
        </div>
      </div>
    </section>
  )
}

export default About