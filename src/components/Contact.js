import React from "react";

function Contact() {
  return (
    <div>
      <div
        className="container card"
        style={{
          scrollBehavior: "smooth",
          paddingTop: "20px",
          width: "70rem",
          borderLeftWidth: "0px",
          borderRightWidth: "0px",
        }}
        id="contact">
        <h3 style={{ fontFamily: "roboto" }}>Contact</h3>
        <div className="row">
          <div className="col-sm" style={{ margin: "20px", textAlign: "left" }}>
            <h6>
              <i className="fa fa-phone fa-rotate-90"></i> 24 x 7 Helpline
              Number : <a href="tel:+03340612442">+033 1234 5678</a>
            </h6>
            <h6 style={{ paddingTop: "20px" }}>
              <i className="fas fa-envelope"></i> Email :{" "}
              <a href="mailto:webdevgroupproject@gmail.com">
                webdevgroupproject@gmail.com
              </a>
            </h6>
          </div>
          <div className="col-sm">
            <h4 style={{ fontFamily: "roboto", marginLeft: "40px" }}>
              Connect with Us
            </h4>
            <ul className="row pt-3" style={{ listStyleType: "none" }}>
              <li className="col-sm">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer">
                  <i
                    className="fab fa-facebook fa-2x"
                    style={{ color: "59 89 152" }}></i>
                </a>
              </li>
              <li className="col-sm">
                <a
                  href="https://www.linkedin.com/in/varun-das-514526141/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <i
                    className="fab fa-linkedin fa-2x"
                    style={{ color: "40 103 178" }}></i>
                </a>
              </li>
              <li className="col-sm">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer">
                  <i
                    className="fab fa-twitter fa-2x"
                    style={{ color: "29 161 242" }}></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="card container bg-light"
          style={{
            fontFamily: "-moz-initial",
            fontSize: "20px",
            width: "relative",
            marginTop: "30px",
            maxWidth: "800px",
            paddingBottom: "20px",
            marginBottom: "20px",
          }}>
          <h4
            style={{
              fontFamily: "roboto",
              paddingTop: "30px",
              paddingBottom: "40px",
            }}>
            Write to Us{" "}
            <i className="fas fa-heart fa-xs" style={{ color: "#A83F39" }}></i>
          </h4>
          <form action="https://formspree.io/f/mnqlkbbz" method="POST">
            <div
              className="form-group"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                paddingRight: "200px",
              }}>
              <label
                for="Name"
                style={{ paddingRight: "40px", paddingLeft: "100px" }}>
                Name:{" "}
              </label>
              <input
                type="text"
                name="Name"
                required
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="What shall we call you"></input>
            </div>
            <div
              className="form-group"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                paddingRight: "200px",
                paddingTop: "20px",
                paddingBottom: "40px",
              }}>
              <label
                for="Message"
                style={{ paddingRight: "20px", paddingLeft: "100px" }}>
                Message:{" "}
              </label>
              <textarea
                type="text"
                name="Message"
                required
                className="form-control"
                placeholder="Anything you want to say"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
