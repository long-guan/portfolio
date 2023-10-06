import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact(props) {
  const form = useRef();
  const [hidden, setHidden] = useState("");
  const [sentMessage, setSentMessage] = useState("hidden");

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("submitted");

    emailjs
      .sendForm(
        "service_6u11m8j",
        "template_gg2gd99",
        form.current,
        "vMWFiErGcm7q0lPF0"
      )
      .then(
        (result) => {
          console.log(result.text);
          setHidden("hidden");
          setSentMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={props.mode}>
      <h2 className="padding-top" id="contact">
        Contact 💬
      </h2>
      <div className="project-card p-4">
        <div className={hidden}>
          <p>
            I am currently looking for opportunities to be part of your team as
            a full-stack software engineer. Please feel free to contact me
            through{" "}
            <a
              target="_blank"
              rel="noreferrer"
              className="link"
              href="https://www.linkedin.com/in/long-guan/"
            >
              LinkedIn
            </a>{" "}
            or leave me a message below. I will respond back within 48 hours!
          </p>
          <p>
            I also appreciate any feedback that you have on my portfolio page.
          </p>
          <form ref={form} onSubmit={sendEmail} className="d-flex flex-column">
            <div className="row">
              <div className="col">
                <label>First Name</label>
                <input
                  type="text"
                  className="form-control form-hover"
                  name="first_name"
                  required
                />
              </div>
              <div className="col">
                <label>Last Name</label>
                <input
                  type="text"
                  className="form-control form-hover"
                  name="last_name"
                  required
                />
              </div>
            </div>
            <label>Email</label>
            <input
              type="email"
              className="form-control form-hover"
              name="email"
              required
            />
            <label>Message</label>
            <textarea
              style={{ marginBottom: "16px" }}
              name="message"
              className="form-control form-hover"
              required
            />
            <div className="d-flex">
              <button type="submit" className="link">
                Send 📬
              </button>
            </div>
          </form>
        </div>
        <div className={sentMessage} style={{ textAlign: "center" }}>
          Thank you for reaching out, your message has been sent! I will respond
          within 48 hours 😊
        </div>
      </div>
    </div>
  );
}

export default Contact;
