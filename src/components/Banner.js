import React from "react";
import SocialLinks from "./SocialLinks";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">William DiFulvio</h1>
      <h3>
        I'm an Orlando based <span>Full-Stack Web Developer</span>, specializing in front end development.
        I'm also a high-level project manager and operations manager as well as a client-relations specialist.
        <br></br> 
        Let's learn more about me.
      </h3>
      <hr />
      <SocialLinks />
    </div>
  </div>
);

export default Banner;
