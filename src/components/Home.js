import React from "react";
import About from "./About";
import Contact from "./Contact";

export default function Home(props) {
  return (
    <div>
      <div className="container">
        Hello there this is the home page you are looking at
      </div>
      <div style={{ paddingTop: "2000px" }}>
        <hr></hr>
        <About></About>
        <hr></hr>
        <Contact></Contact>
      </div>
    </div>
  );
}
