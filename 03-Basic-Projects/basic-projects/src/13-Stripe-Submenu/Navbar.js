import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-header">
        <img src={logo} alt="stripe" className="nav-img" />
      </div>

      <ul className="nav-links">
        <li className="nav-link">
          <button type="button" className="nav-btn">
            products
          </button>
        </li>
        <li className="nav-link">
          <button type="button" className="nav-btn">
            developers
          </button>
        </li>
        <li className="nav-link">
          <button type="button" className="nav-btn">
            company
          </button>
        </li>
      </ul>

      <nutton className="nav-bar">
        <FaBars />
      </nutton>
    </nav>
  );
};

export default Navbar;
