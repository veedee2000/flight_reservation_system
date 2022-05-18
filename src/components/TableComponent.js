import React from "react";
import { Link } from "react-router-dom";

function TableComponent() {
  return (
    <div>
      <table className="container mt-5">
        <tr>
          <th>Departure</th>
          <th>Duration</th>
          <th>Arrival</th>
          <th>Stops</th>
          <th>Company</th>
          <th>Fare</th>
          <th>Book</th>
        </tr>
        <tr>
          <td>7:15 A.M.</td>
          <td>3hrs 30mins</td>
          <td>10:45 A.M.</td>
          <td>Non - Stop</td>
          <td>Air India</td>
          <td>Rs 5,435</td>
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
        <tr>
          <td>8:35 A.M.</td>
          <td>2hrs 15mins</td>
          <td>10:50 A.M.</td>
          <td>Non - Stop</td>
          <td>Indigo</td>
          <td>Rs 7,810</td>
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
        <tr>
          <td>7:15 A.M.</td>
          <td>3hrs 15mins</td>
          <td>10:30 A.M.</td>
          <td>Non - Stop</td>
          <td>Etihad</td>
          <td>Rs 12,000</td>
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
        <tr>
          <td>9:20 A.M.</td>
          <td>1hr 55mins</td>
          <td>11:15 A.M.</td>
          <td>Non - Stop</td>
          <td>Jet Airways</td>
          <td>Rs 7,299</td>
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
        <tr>
          <td>12:15 P.M.</td>
          <td>2hrs 20mins</td>
          <td>2:35 P.M.</td>
          <td>Non - Stop</td>
          <td>SpiceJet</td>
          <td>Rs 6,435</td>
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
      </table>
    </div>
  );
}

export default TableComponent;
