import '../styles/Projects.css'

function Projects() {
  return (
    <section className="projects" id="projects" aria-labelledby="projects-heading">
      <div className="section-header">
        <span className="section-num" aria-hidden="true">03</span>
        <h2 className="section-title" id="projects-heading">Projects</h2>
        <div className="section-rule" aria-hidden="true"></div>
      </div>
      <div className="projects-grid">
        <article className="project-card">
          <p className="project-tag">Portfolio · 2024</p>
          <h3 className="project-title">Personal Portfolio</h3>
          <p className="project-desc">A clean, fast portfolio built in React + Vite. Focused on structure and clarity, with a warm minimal aesthetic and smooth deployment via Netlify.</p>
          <ul className="project-stack" aria-label="Technologies used">
            <li><span>React</span></li>
            <li><span>Vite</span></li>
            <li><span>CSS</span></li>
            <li><span>Netlify</span></li>
          </ul>
          <a href="#" className="project-link" aria-label="View Personal Portfolio project">View Project</a>
        </article>
        <article className="project-card">
          <p className="project-tag">Client Work · 2024</p>
          <h3 className="project-title">Elite Ball Event</h3>
          <p className="project-desc">Website for a youth football event organization. Four-page React site with event schedule, coach profile, and sign-up functionality.</p>
          <ul className="project-stack" aria-label="Technologies used">
            <li><span>React</span></li>
            <li><span>Vite</span></li>
            <li><span>CSS</span></li>
          </ul>
          <a href="#" className="project-link" aria-label="View Elite Ball Event project">View Project</a>
        </article>
        <article className="project-card">
          <p className="project-tag">App · 2024</p>
          <h3 className="project-title">Habit Tracker</h3>
          <p className="project-desc">A flexible habit tracker built for real-life use — designed around shifting schedules and practical motivation rather than rigid daily streaks.</p>
          <ul className="project-stack" aria-label="Technologies used">
            <li><span>React</span></li>
            <li><span>JavaScript</span></li>
            <li><span>Local Storage</span></li>
          </ul>
          <a href="#" className="project-link" aria-label="View Habit Tracker project">View Project</a>
        </article>
        <article className="project-card project-card--next">
          <p className="project-tag">Open · 2025</p>
          <h3 className="project-title project-title--next">Next Project</h3>
          <p className="project-desc">Something new is in the works. Check back soon or reach out if you want to collaborate on something.</p>
          <ul className="project-stack" aria-label="Technologies used"></ul>
          <a href="#contact" className="project-link">Let's build something</a>
        </article>
      </div>
    </section>
  )
}

export default Projects