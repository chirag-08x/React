import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <section className="section-center navbar-center">
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>

        <ul className="nav-link">
          <li className="nav-link">
            <Link to={"/"}>home</Link>
          </li>
          <li className="nav-link">
            <Link to={"/about"}>about</Link>
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;
