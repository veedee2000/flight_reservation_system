import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useRef } from "react";
import GoogleButton from "react-google-button";
import { Link } from "react-router-dom";
import { signup, auth } from "../firebase/Firebase";

function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSignup = async () => {
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleSignin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
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
        <h3>Sign Up</h3>

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
          type="submit"
          className="btn btn-primary btn-block my-3"
          onClick={handleSignup}
          to="/"
        >
          Sign Up
        </Link>
        <p className="forgot-password text-right">
          Already registered? <Link to="/login">Sign In</Link>
        </p>
        <b className="my-2">Or</b>
        <center>
          <Link to="/">
            <GoogleButton onClick={handleGoogleSignin}></GoogleButton>
          </Link>
        </center>
      </form>
    </div>
  );
}

export default SignUp;
