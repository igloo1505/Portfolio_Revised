import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "../assets/dark_transparent.png";

const Navbar = () => {
  console.log(logo);
  return (
    <nav className="navBar">
      <div className="nav-wrapper">
        <div className="container">
          <Link to="/" className="brand-logo">
            <img className="navBarLogo" src={logo} alt="Igloo Development" />
          </Link>
          <a
            href="#"
            data-target="mobileMenu"
            class="sidenav-trigger black-text text-darken-2"
          >
            <i class="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/">
                <i className="material-icons left">perm_identity</i>About Me
              </Link>
            </li>
            <li>
              <Link to="/portfolio">
                <i className="material-icons left">lightbulb_outline</i>My Work
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <i className="material-icons left">email</i>Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <ul class="sidenav" id="mobileMenu">
        <li style={{ marginTop: "20px" }}>
          <Link to="/">
            <i className="material-icons left">perm_identity</i>About Me
          </Link>
        </li>
        <li>
          <Link to="/portfolio">
            <i className="material-icons left">lightbulb_outline</i>My Work
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <i className="material-icons left">email</i>Contact Me
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
