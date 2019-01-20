import React from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";

import profilePic from "../assets/images/profilepicbill.jpeg";

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>Hey There!</h2>
        <p>
          My name is William DiFulvio and I'm a web developer with over three years of management experience. 
          I started my Web Development journey in early 2018 when I began at Lambda School. Nine grueling months later, 
          I am a qualified Full-Stack Web developer with specialties in React and Javascript. I have completed
          over 15 projects over the past nine months, starting with the simple and continuing with more and more complex
          applications. Take a look at some of them below!
        </p>
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <span>William DiFulvio Jr.</span>
              <br />
              <span>
                3431 Astoria Ct
                <br /> Winter Park, FL 32792
              </span>
              <br />
              <span>(386)717-1109</span>
              <br />
              <span>w.difulvio523@gmail.com</span>
            </p>
          </div>
          <div className="columns download">
            <p>
              <a href="#" className="button">
              <FaCloudDownloadAlt size={15} />
              <span className="dlresume-span">
                  Download Resume
              </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
