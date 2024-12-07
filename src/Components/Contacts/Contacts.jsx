import React from "react";
import "./Contacts.css";
import mail_3 from "../../assets/mail_3.svg";
import location_3 from "../../assets/location_3.svg";
import call_3 from "../../assets/call_3.svg";
import Linkedln_3 from "../../assets/Linkedln_3.svg";
import Twitter_3 from "../../assets/Twitter_3.svg";

const Contacts = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "938a32cf-3324-4921-bc8d-1d9ad6247479");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      alert("Your message has been sent successfully!");
      event.target.reset();
    } else {
      console.error("Error:", data);
    }
  };

  return (
    <div id="contacts" className="contacts">
      <div className="contacts-title">
        <h1>Contact Me</h1>
      </div>
      <div className="contacts-section">
        <div className="contacts-left">
          <h1>Let's Connect</h1>
          <p>
            I'm currently looking for a new project or opportunities. My inbox
            is always open. Feel free to contact me if you want to collaborate
            on a project or ask questions.
          </p>
          <div className="contacts-details">
            <div className="contacts-detail">
              <img src={Linkedln_3} alt="LinkedIn" />
              <a
                href="https://www.linkedin.com/in/femi-okunlade-795293266" 
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
            <div className="contacts-detail">
              <img src={Twitter_3} alt="Twitter" />
              <a
                href="https://twitter.com/Okunladeoluphe1?t=WXWSjMrkGnQpFbuuvEt4VQ&s=09" 
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </div>
            <div className="contacts-detail">
              <img src={call_3} alt="Phone" />
              <a href="tel:+2349074156887">+234-907-415-6887</a>
            </div>
            <div className="contacts-detail">
              <img src={mail_3} alt="Email" />
              <a href="mailto:okunlade.oluphemmy@gmail.com">
                okunlade.oluphemmy@gmail.com
              </a>
            </div>
            <div className="contacts-detail">
              <img src={location_3} alt="Location" />
              <p>Abuja, Nigeria</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contacts-right">
          <label htmlFor="name"></label>
          <input type="text" placeholder="Name" name="name" />
          <label htmlFor="email"></label>
          <input type="email" placeholder="Email" name="email" />
          <label htmlFor="message"></label>
          <textarea
            name="message"
            rows="8"
            placeholder="Message"
          ></textarea>
          <button type="submit" className="contacts-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
