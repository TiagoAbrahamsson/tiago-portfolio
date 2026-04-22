import '../styles/Skills.css'

function Skills() {
  return (
    <section className="skills" id="skills" aria-labelledby="skills-heading">
      <div className="section-header">
        <span className="section-num" aria-hidden="true">02</span>
        <h2 className="section-title" id="skills-heading">Skills</h2>
        <div className="section-rule" aria-hidden="true"></div>
      </div>
      <div className="skills-grid">
        <div className="skill-card">
          <div className="skill-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
          </div>
          <h3 className="skill-name">JavaScript</h3>
          <p className="skill-desc">ES6+, async/await, DOM manipulation, modern patterns</p>
        </div>
        <div className="skill-card">
          <div className="skill-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
          </div>
          <h3 className="skill-name">React</h3>
          <p className="skill-desc">Components, hooks, state management, Vite tooling</p>
        </div>
        <div className="skill-card">
          <div className="skill-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false"><rect x="4" y="4" width="16" height="16" /><path d="M4 9h16M9 4v16" /></svg>
          </div>
          <h3 className="skill-name">HTML &amp; CSS</h3>
          <p className="skill-desc">Semantic markup, Grid, Flexbox, responsive design</p>
        </div>
        <div className="skill-card">
          <div className="skill-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
          </div>
          <h3 className="skill-name">Git &amp; Deployment</h3>
          <p className="skill-desc">GitHub, Netlify, version control workflows</p>
        </div>
      </div>
    </section>
  )
}

export default Skills