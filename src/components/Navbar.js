import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="col-md-12 bg-dark py-2">
      <nav className="navbar navbar-dark">
        <Link className="navbar-brand" to="/">
          Voice Controlled Navigation
        </Link>

        <ul className="nav ml-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link text-light">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/tutorials" className="nav-link text-light">
              Tutorials
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link text-light">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link text-light">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
