import React from "react";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin
} from "react-icons/fa";
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a href="https://github.com/Wdifulvio523" target="_blank">
        <FaGithub />
      </a>
    </li>
    <li>
      <a href="https://linkedin.com/in/william-difulvio" target="_blank">
        <FaLinkedin />
      </a>
    </li>
    <li>
      <a href="https://twitter.com/billdifulvio" target="_blank">
        <FaTwitter />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
