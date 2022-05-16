import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { login } from "../firebase/Firebase";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleLogin = async () => {
    try {
      await login(emailRef.current.value, passwordRef.current.value);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div
      className="container card"
      style={{
        padding: "15px 15px 15px 15px",
        borderRadius: "15px",
        width: "25rem",
        backgroundColor: "lightgray",
      }}
    >
      <form>
        <h3>Sign In</h3>

        <div className="form-group pt-2">
          <label>Email address</label>
          <input
            ref={emailRef}
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group pt-2">
          <label>Password</label>
          <input
            ref={passwordRef}
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <Link
          onClick={handleLogin}
          type="submit"
          className="btn btn-primary btn-block mt-2"
          to="/"
        >
          Submit
        </Link>
      </form>
    </div>
  );
}

export default Login;
