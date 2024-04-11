import "../styles/Banner.css";
import React from "react";
function Banner() {
  return (
    <header className="header">
      <a href="#" className="logo">
        Chloe Girten
      </a>
      <input type="checkbox" id="check" />
      <label for="check" className="icons">
        <i className="bx bx-menu" id="menu-icon"></i>
        <i className="bx bx-x" id="close-icon"></i>
      </label>

      <nav className="navbar">
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Banner;
