import React from "react";
import "./contact.css";
import Icon from './Icon'
function Contact() {
  return (
    <div className="contact-container" id="contact">
      <div className="top-container">
        <div className="client-heading about-head">
          <h1>Contact Us</h1>
        </div>
      </div>
      <div className="contact-details">
        <div className="form-container">
          <form>
            <div className="form-flex">
              <div style={{ flex: "0 0 auto", width: "45%" }}>
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="firstname" />
              </div>
              <div style={{ flex: "0 0 auto", width: "45%" }}>
                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" />
              </div>
            </div>

            <label for="lname">Email Address</label>
            <input
              type="text"
              id="email"
              name="email"
              style={{ width: "100%", textAlign: "left" }}
            />

            <label for="message">Message</label>
            <textarea
              id="message"
              name="message"
              style={{ height: "200px" }}
            ></textarea>
            <a
              href="#"
              className="btn-details"
              style={{ width: "120px", padding: "3%", fontSize: "15px" }}
            >
              Send Message
            </a>
          </form>
        </div>
        {/* <div className="social-media-icons">
   
        </div> */}

        <div className="contact-data">
          <p>
           
            <i className="fas fa-home"></i>
            <span className="icon-span"></span> 155 Market St #101,Paterson,NJ 07505, United States
          </p>
          <p>
            <i class="fas fa-phone"></i>
            <span className="icon-span"></span> +1 202 2020 200
          </p>
          <p>
            <i class="fas fa-envelope"></i>
            <span className="icon-span"></span>@info@mydomain.com
          </p>
        </div>
      
      </div>
      <Icon/>
    </div>
  );
}

export default Contact;

