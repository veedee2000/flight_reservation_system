import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <div
        className="container card"
        style={{
          padding: "15px 15px 15px 15px",
          borderRadius: "15px",
          width: "25rem",
          backgroundColor: "lightgray",
        }}>
        <form>
          <h3>Sign In</h3>

          <div className="form-group pt-2">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>

          <div className="form-group pt-2">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>

          <div className="form-group pt-2">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-block mt-2">
            Submit
          </button>
          {/* <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p> */}
        </form>
      </div>
    );
  }
}
