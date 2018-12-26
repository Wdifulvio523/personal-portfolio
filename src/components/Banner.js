import React from "react";
import SocialLinks from "./SocialLinks";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">William DiFulvio</h1>
      <h3>
        I'm an Orlando based <span>webdesigner</span>,creating awesome
        and effective visual identities for companies of all sizes around the
        globe. Let's learn more about me.
      </h3>
      <hr />
      <SocialLinks />
    </div>
  </div>
);

export default Banner;
