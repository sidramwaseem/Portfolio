import React from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  console.log(formData);
  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_32c8us6",
        "template_kt5xq4f",
        e.target,
        "j2fJhD0Gj6xGmIWgF"
      )
      .then((resp) => {
        console.log(resp);
      }).catch(error => console.log(error));
  }
  return (
    <section id="contact">
      <blockquote className="contact-header section-heading reveal">
        <h2><span className="cyan">Contact</span></h2>
        <p >
          Let's <span className="cyan">create</span> something cool together.
        </p>
      </blockquote>
      <div className="contact-wrapper">
        <form id="contact-form" class="form-horizontal" onSubmit={sendEmail}>
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="NAME"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <div class="col-sm-12">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="EMAIL"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <textarea
            className="form-control"
            type="text"
            rows="10"
            placeholder="MESSAGE"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button
            className="btn btn-primary send-button"
            id="submit"
            type="submit"
            value="SEND"
          >
            <div className="alt-send-button">
              <i class="fa fa-paper-plane"></i>
              <span class="send-text">SEND</span>
            </div>
          </button>
        </form>

        <div className="direct-contact-container reveal">
          <ul className="contact-list">
            <li className="list-item">
              <i class="fa-solid fa-location-dot fa-2x">
                <span className="contact-text place">Karachi, Pakistan</span>
              </i>
            </li>

            <li className="list-item">
              <i class="fa fa-envelope fa-2x">
                <span className="contact-text gmail">
                  <a href="mailto:sidraw24@gmail.com" title="Send me an email">
                    sidraw24@gmail.com
                  </a>
                </span>
              </i>
            </li>
          </ul>

          <ul className="social-media-list">
            <li>
              <a href="https://github.com/sidramwaseem" target="_blank" className="contact-icon" rel="noreferrer">
                <i class="fa-brands fa-github"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/sidramwaseem/" target="_blank" className="contact-icon" rel="noreferrer">
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/sidramwaseem" target="_blank" className="contact-icon" rel="noreferrer">
                <i class="fa-brands fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
