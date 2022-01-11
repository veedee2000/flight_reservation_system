import React, { useState } from "react";
import About from "./About";
import Contact from "./Contact";
import DatePicker from "react-datepicker";
import TableComponent from "./TableComponent";

import "react-datepicker/dist/react-datepicker.css";

export default function Home(props) {
  const [startDate, setStartDate] = useState(new Date());

  const [displayTable, setDisplayTable] = useState(0);

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
              }}>
              <span>From</span>
              <div className="input-group rounded pt-2">
                <input
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
              }}>
              <span>Destination</span>
              <div className="input-group rounded pt-2">
                <input
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
              }}>
              <span>Departure</span>
              <DatePicker
                className="mt-2"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                popperPlacement={"bottom"}
              />
            </div>
            <div
              className="searchBox col-sm m-3 pt-2"
              style={{
                borderRadius: 15 + "px",
                backgroundColor: "whitesmoke",
              }}>
              <span>Return</span>
              <DatePicker
                className="mt-2"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                popperPlacement={"bottom"}
              />
            </div>
            <div
              className="searchBox col-sm m-3 pt-2"
              style={{
                borderRadius: 15 + "px",
                backgroundColor: "whitesmoke",
              }}>
              <span>Passengers</span>
              <div class="input-group rounded pt-2">
                <input
                  type="number"
                  className="form-control rounded"
                  min="1"
                  max="100"></input>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setDisplayTable(1)}
            style={{ fontFamily: "inherit", borderRadius: "8px" }}>
            SEARCH
          </button>
          {/* <TableComponent></TableComponent> */}
          {displayTable ? <TableComponent></TableComponent> : <p></p>}
        </div>
      </div>
      <div style={{ paddingTop: "20px" }}>
        <About></About>
        <Contact></Contact>
      </div>
    </div>
  );
}
