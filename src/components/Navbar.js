import React, { useState } from "react";

import { Link } from "react-router-dom";

export default function Navbar(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(0);

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "##FF7F7F" }}>
        <div className="container-fluid">
          <div className="navbar-header pt-2">
            <Link
              to="/"
              className="navbar-brand px-2"
              style={{
                fontFamily: "cursive",
                color: "white",
                borderRadius: "10px",
                backgroundColor: "#eb6e00",
              }}>
              Kurama Airlines
            </Link>
          </div>
          <ul className="navbar-nav row" style={{ fontFamily: "optima" }}>
            <li className="nav-item col pt-2">
              <a className="navbar-brand text-dark" href="/#about">
                About Us
              </a>
            </li>
            <li className="nav-item col pt-2">
              <a className="navbar-brand text-dark" href="/#contact">
                Contact
              </a>
            </li>
            <li className="nav-item col pt-2">
              <Link className="navbar-brand text-dark" to="/profile">
                Profile
              </Link>
            </li>
            <li className="nav-item col pt-2">
              {isLoggedIn ? (
                <Link
                  className="navbar-brand text-dark"
                  to="/"
                  onClick={() => setIsLoggedIn(0)}>
                  Logout
                </Link>
              ) : (
                <Link
                  className="navbar-brand text-dark"
                  to="/signup"
                  onClick={() => setIsLoggedIn(1)}>
                  Sign Up
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
      <hr></hr>
    </div>
  );
}
