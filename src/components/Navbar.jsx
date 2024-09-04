import "./NavbarStyles.css";
import React from "react";
import { FaBars } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [hamClick, setHamClick] = useState(false);
  const [color, setColor] = useState(false);
  const location = useLocation();
  const handleHamClick = () => {
    if (location.pathname === "/" && hamClick) {
      setHamClick(false);
    } else {
      setHamClick(!hamClick);
    }
  };
  // const handleHamClick = ()=> setHamClick(!hamClick);

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/" onClick={() => setHamClick(false)}>
        <h1>☾ZarNadeem</h1>{" "}
      </Link>
      <ul className={hamClick ? "nav-menu active" : "nav-menu"}>
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/" onClick={() => setHamClick(false)}>
            <h4>Home</h4>
          </Link>
        </li>
        <li className={location.pathname === "/about" ? "active" : ""}>
          <Link to="/about" onClick={() => setHamClick(false)}>
            <h4>About</h4>
          </Link>
        </li>
        <li className={location.pathname === "/projects" ? "active" : ""}>
          <Link to="/projects" onClick={() => setHamClick(false)}>
            <h4>Projects</h4>
          </Link>
        </li>
        <li className={location.pathname === "/contact" ? "active" : ""}>
          <Link to="/contact" onClick={() => setHamClick(false)}>
            <h4>Contact</h4>
          </Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleHamClick}>
        {hamClick ? (
          <FaTimes size={20} style={{ color: "#145183" }} />
        ) : (
          <FaBars size={25} style={{ color: "#145183" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
