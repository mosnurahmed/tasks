import React from "react";
import { image } from "../assets/img/img";

function Contact() {
  return (
    <div className="contactContainer" id="contact">
      <div className="contactContent">
        <div className="contactText">
          <h1>Got a project in mind?</h1>
          <p>Helping in bringing your Ideas to Reality.</p>
          <input type="text" placeholder="Enter Your Email Address" />
          <input type="text" />
          <p>Subscribe</p>
        </div>
        <img src={image.contact} alt="" />
      </div>
    </div>
  );
}

export default Contact;
