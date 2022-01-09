import React from "react";

import { Link, Router } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "##FF7F7F" }}>
        <div className="container-fluid">
          <div className="navbar-header pt-2">
            <Link
              to="/home"
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
              <a className="navbar-brand text-dark" href="/home/#about">
                About Us
              </a>
            </li>
            <li className="nav-item col pt-2">
              <a className="navbar-brand text-dark" href="/home/#contact">
                Contact
              </a>
            </li>
            <li className="nav-item col dropdown">
              <div className="dropdown">
                <button
                  className="btn btn-light dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{ fontSize: "20px" }}>
                  <Link className="navbar-brand text-dark" to="/profile">
                    Profile
                  </Link>
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="#">
                    Account
                  </a>
                  <a className="dropdown-item" href="#">
                    History
                  </a>
                  <a className="dropdown-item" href="#">
                    Logout
                  </a>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <hr></hr>
    </div>
  );
}
