import React from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";

import profilePic from "../assets/images/IMG_1552.jpg";

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>Hey There!</h2>
        <p>
          My name is William DiFulvio and I'm a Full-Stack Web Developer
          specializing in front end development. In addition, I have a strong
          background in high-level project and operations management as well as
          with client and customer relations. I started my Web Development
          journey in early 2018 when I began at Lambda School. Nine grueling
          months later, I am a qualified Full-Stack Web developer with
          specialties in React and Javascript. I have completed over 15 projects
          over the past nine months, starting with the simple and continuing
          with more and more complex applications. Take a look at some of them
          below!
        </p>
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <span>William DiFulvio Jr.</span>
              <br />
              <span>Orlando, FL</span>
              <br />
              <span>(386) 717 - 1109</span>
              <br />
              <span>w.difulvio523@gmail.com</span>
            </p>
          </div>
          <div className="columns download">
            <p>
              <a href="https://resume.creddle.io/resume/e66vldf68ar" target="_blank" className="button">
               
                <span className="dlresume-span">See Resume</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
