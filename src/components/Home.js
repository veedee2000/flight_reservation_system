import React, { useEffect, useRef, useState } from "react";
import About from "./About";
import Contact from "./Contact";
import DatePicker from "react-datepicker";
import TableComponent from "./TableComponent";
import { Link } from "react-router-dom";

import "react-datepicker/dist/react-datepicker.css";
import { getFlights } from "../firebase/Firebase";

export default function Home() {
  const [startDate, setStartDate] = useState(new Date());
  const [displayTable, setDisplayTable] = useState(0);

  const [loading, setLoading] = useState(true);
  var [rows, setRows] = useState([]);

  const fromRef = useRef();
  const toRef = useRef();
  const departureRef = useRef();

  // useEffect(() => {
  //   if (loading) {
  //     setRows(handleSearch());
  //     setDisplayTable(1);
  //   }
  //   return () => handleSearch();
  // }, [loading, displayTable]);

  const handleSearch = async () => {
    try {
      const data = await getFlights(fromRef.current.value, toRef.current.value);
      const rows = data.map((eachData) => {
        console.log(eachData);
        return (
          <tr>
            <td>{eachData.departure}</td>
            <td>{eachData.duration}</td>
            <td>{eachData.arrival}</td>
            <td>Non - Stop</td>
            <td>{eachData.company}</td>
            <td>{eachData.price}</td>
            <td>
              <Link to="/payment">
                <button
                  type="button"
                  className="btn btn-primary container"
                  style={{
                    fontFamily: "inherit",
                    borderRadius: "8px",
                    width: "10rem",
                  }}
                >
                  Book Now
                </button>
              </Link>
            </td>
          </tr>
        );
      });
      setLoading(false);
      return rows;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="jumbotron">
        <div className="container-fluid" style={{ fontFamily: "-moz-initial" }}>
          <div className="row">
            <div
              className="searchBox col-sm m-3 pt-2"
              style={{
                borderRadius: 15 + "px",
                backgroundColor: "whitesmoke",
              }}
            >
              <span>From</span>
              <div className="input-group rounded pt-2">
                <input
                  ref={fromRef}
                  type="search"
                  className="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
                <span className="input-group-text border-0" id="search-addon">
                  <i className="fas fa-search"></i>
                </span>
              </div>
            </div>
            <div
              className="searchBox col-sm m-3 pt-2"
              style={{
                borderRadius: 15 + "px",
                backgroundColor: "whitesmoke",
              }}
            >
              <span>Destination</span>
              <div className="input-group rounded pt-2">
                <input
                  ref={toRef}
                  type="search"
                  className="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
                <span className="input-group-text border-0" id="search-addon">
                  <i className="fas fa-search"></i>
                </span>
              </div>
            </div>
            <div
              className="searchBox col-sm m-3 pt-2"
              style={{
                borderRadius: 15 + "px",
                backgroundColor: "whitesmoke",
              }}
            >
              <span>Departure</span>
              <DatePicker
                ref={departureRef}
                className="mt-2"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                popperPlacement={"bottom"}
              />
            </div>
          </div>
          <div
            type="button"
            className="btn btn-primary"
            onClick={() => setDisplayTable(1)}
            style={{ fontFamily: "inherit", borderRadius: "8px" }}
          >
            SEARCH
          </div>
          {displayTable ? (
            <TableComponent></TableComponent>
          ) : (
            // <div>
            //   <table className="container mt-5">
            //     <thead>
            //       <tr>
            //         <th>Departure</th>
            //         <th>Duration</th>
            //         <th>Arrival</th>
            //         <th>Stops</th>
            //         <th>Company</th>
            //         <th>Fare</th>
            //         <th>Book</th>
            //       </tr>
            //     </thead>
            //     <tbody>{rows}</tbody>
            //   </table>
            // </div>
            <p></p>
          )}
        </div>
      </div>
      <div style={{ paddingTop: "20px" }}>
        <About></About>
        <Contact></Contact>
      </div>
    </div>
  );
}
