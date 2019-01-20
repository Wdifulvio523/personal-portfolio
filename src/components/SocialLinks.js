import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaSkype,
  FaGooglePlus,
  FaTwitter,
  FaLinkedin
} from "react-icons/fa";
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a href="#">
        <FaFacebook />
      </a>
    </li>
    <li>
      <a href="#">
        <FaTwitter />
      </a>
    </li>
    <li>
      <a href="https://linkedin.com/in/william-difulvio" target="_blank">
        <FaLinkedin />
      </a>
    </li>
    <li>
      <a href="https://github.com/Wdifulvio523" target="_blank">
        <FaGithub />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
