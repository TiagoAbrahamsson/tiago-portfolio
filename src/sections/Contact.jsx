import '../styles/Contact.css'

function Contact() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-heading">
      <div className="contact-left">
        <div className="section-header">
          <span className="section-num" aria-hidden="true">04</span>
          <h2 className="section-title" id="contact-heading">Contact</h2>
          <div className="section-rule" aria-hidden="true"></div>
        </div>
        <p className="contact-message">
          Have a project in mind or just want to <em>say hello?</em> I'd love to hear from you.
        </p>
        <a href="mailto:tiago@example.com" className="btn-primary">Send a Message</a>
      </div>
      <div className="contact-right">
        <div className="contact-item">
          <span className="contact-item-label">Email</span>
          <a href="mailto:tiago@example.com">tiago@example.com</a>
        </div>
        <div className="contact-item">
          <span className="contact-item-label">GitHub</span>
          <a href="https://github.com/TiagoAbrahamsson" target="_blank" rel="noopener noreferrer">
            github.com/TiagoAbrahamsson
          </a>
        </div>
        <div className="contact-item">
          <span className="contact-item-label">LinkedIn</span>
          <a href="#">linkedin.com/in/tiago</a>
        </div>
        <div className="contact-item">
          <span className="contact-item-label">Location</span>
          <span className="plain-text">Sweden — Available Remotely</span>
        </div>
      </div>
    </section>
  )
}

export default Contact