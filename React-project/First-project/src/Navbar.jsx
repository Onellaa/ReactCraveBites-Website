import "./Navbar.css";
import React, { useState } from "react";
import ReorderIcon from "@mui/icons-material/Reorder";
import { Link } from "react-router-dom";
import Logo from "./assets/pizza.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="header">
      <div className="container" id={isOpen ? "open" : "close"}>
        <nav>
          <img src={Logo} alt="logo-pic" className="logo" />
          <b>CraveBites</b>
          <button className="button" onClick={toggleNavbar}>
            <ReorderIcon />
          </button>
          <ul className={isOpen ? "nav-links open" : "nav-links"}>
            <li>
              <Link to="/home" className="link" onClick={toggleNavbar}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="link" onClick={toggleNavbar}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/menu" className="link" onClick={toggleNavbar}>
                Menu
              </Link>
            </li>
            <li>
              <Link to="/contact" className="link" onClick={toggleNavbar}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
