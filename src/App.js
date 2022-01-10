import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import { Router } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
