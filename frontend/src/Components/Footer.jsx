import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="text">Copyright © FOREMAP</p>
      <a href="https://github.com/alextrandev/fullstack_travel_buddy">
        <p className="link-text">View Github Repo</p>
        <i class="devicon-github-original"></i>
      </a>
    </footer>
  );
};

export default Footer;
