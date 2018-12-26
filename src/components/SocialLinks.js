import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaSkype,
  FaGooglePlus,
  FaTwitter,
  FaLinkedinSquare
} from "react-icons/lib/fa";
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
      <a href="#">
        <FaGooglePlus />
      </a>
    </li>
    <li>
      <a href="https://linkedin.com/in/william-difulvio">
        <FaLinkedinSquare />
      </a>
    </li>
    <li>
      <a href="https://github.com/Wdifulvio523">
        <FaGithub />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
