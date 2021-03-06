import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import {
  useAuth,
  upload,
  setProfileValue,
  getProfileValue,
} from "../firebase/Firebase";
import DefaultUserPic from "../images/team-male.jpg";
import PdfWithQRGenerator from "../pdf/PdfWithQRGenerator";

function Profile() {
  const currentUser = useAuth();
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [photoURL, setPhotoURL] = useState(DefaultUserPic);

  const [nameDefault, setNameDefault] = useState("");
  const [emailDefault, setEmailDefault] = useState("");
  const [phoneDefault, setPhoneDefault] = useState("");
  const [ageDefault, setAgeDefault] = useState("");
  const [sexDefault, setSexDefault] = useState("");
  const [addressDefault, setAddressDefault] = useState("");
  const [stateDefault, setStateDefault] = useState("");
  const [countryDefault, setCountryDefault] = useState("");

  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const ageRef = useRef();
  const sexRef = useRef();
  const addressRef = useRef();
  const stateRef = useRef();
  const countryRef = useRef();

  const [displayTable, setDisplayTable] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  };
  const handleClick = () => {
    upload(photo, currentUser, setLoading);
  };

  useEffect(() => {
    if (currentUser?.photoURL) {
      setPhotoURL(currentUser.photoURL);
    }
    if (currentUser) {
      const defaultValue = getProfileValue(currentUser);
      setNameDefault(defaultValue.name);
      setEmailDefault(defaultValue.email);
      setPhoneDefault(defaultValue.phone);
      setAgeDefault(defaultValue.age);
      setSexDefault(defaultValue.sex);
      setAddressDefault(defaultValue.address);
      setStateDefault(defaultValue.state);
      setCountryDefault(defaultValue.country);
    }
  }, [currentUser]);

  const handleSave = async () => {
    try {
      await setProfileValue(
        currentUser,
        nameRef.current.value,
        emailRef.current.value,
        phoneRef.current.value,
        ageRef.current.value,
        sexRef.current.value,
        addressRef.current.value,
        stateRef.current.value,
        countryRef.current.value
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  const loader = () => {
    console.log(currentUser);
  };

  return (
    <div onLoad={loader}>
      <div id="account">
        <Container>
          <Row>
            <Col>
              <img
                src={photoURL}
                alt={DefaultUserPic}
                style={{
                  borderRadius: "50%",
                  width: "400px",
                  height: "400px",
                  marginTop: "100px",
                }}
              />
              <input type="file" alt="Profile Pic" onChange={handleChange} />
              <button disabled={loading || !photo} onClick={handleClick}>
                Upload
              </button>
            </Col>
            <Col
              className="container card"
              style={{
                padding: "15px 15px 15px 15px",
                borderRadius: "15px",
                width: "25rem",
              }}
            >
              <h1>User Profile</h1>
              <Form className="form mx-5">
                <Form.Group
                  controlId="formCategory1"
                  className="my-2 container"
                >
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    ref={nameRef}
                    defaultValue="Varun Das"
                  />
                </Form.Group>
                <Form.Group
                  controlId="formCategory2"
                  className="my-2 pt-2 container"
                >
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    ref={emailRef}
                    defaultValue="veedee6789@gmail.com"
                  />
                </Form.Group>
                <Form.Group
                  controlId="formCategory2"
                  className="my-2 pt-2 container"
                >
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="tel"
                    ref={phoneRef}
                    defaultValue="8583052213"
                  />
                </Form.Group>
                <Row>
                  <Col>
                    <Form.Group
                      controlId="formCategory3"
                      className="my-2 pt-2 container"
                    >
                      <Form.Label>State</Form.Label>
                      <Form.Control
                        type="text"
                        ref={stateRef}
                        defaultValue="West Bengal"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group
                      controlId="formCategory4"
                      className="my-2 pt-2 container"
                      style={{ textAlign: "center" }}
                    >
                      <Form.Label>Country</Form.Label>
                      <Form.Control
                        type="text"
                        ref={countryRef}
                        defaultValue="India"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group
                  controlId="formCategory2"
                  className="my-2 pt-2 container"
                >
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    ref={addressRef}
                    defaultValue="Flat 26-04, Block 5, Elita Garden Vista, Newtown, Kol-156"
                  />
                </Form.Group>
                <Row>
                  <Col>
                    <Form.Group
                      controlId="formCategory3"
                      className="my-2 pt-2 container"
                    >
                      <Form.Label>Age</Form.Label>
                      <Form.Control
                        type="text"
                        ref={ageRef}
                        defaultValue="21"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group
                      controlId="formCategory4"
                      className="my-2 pt-2 container"
                      style={{ textAlign: "center" }}
                    >
                      <Form.Label>Sex</Form.Label>
                      <Form.Control type="text" ref={sexRef} defaultValue="M" />
                    </Form.Group>
                  </Col>
                </Row>
                <Col>
                  <div
                    onClick={handleSave}
                    type="button"
                    className="btn btn-primary mt-4"
                    style={{ fontFamily: "inherit", borderRadius: "8px" }}
                  >
                    Save Changes!
                  </div>
                </Col>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
      <div
        id="#history"
        style={{
          scrollBehavior: "smooth",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        <h4
          onClick={() => setDisplayTable(1)}
          style={{ fontFamily: "monospace" }}
        >
          Travel History
        </h4>
        {displayTable ? (
          <table className="container mt-4">
            <thead>
              <tr>
                <th>Departure Date</th>
                <th>Departure Time</th>
                <th>Departure Location</th>
                <th>Arrival Date</th>
                <th>Arrival Time</th>
                <th>Arrival Location</th>
                <th>Airline Company</th>
                <th>Ticket</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>21/05/2022</td>
                <td>7:15 A.M.</td>
                <td>Kolkata (CCU)</td>
                <td>21/05/2022</td>
                <td>03:35 P.M.</td>
                <td>Mumbai (MUM)</td>
                <td>Air India</td>
                <td>{PdfWithQRGenerator()}</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <p hidden="true">{PdfWithQRGenerator()}</p>
        )}
      </div>
    </div>
  );
}

export default Profile;
