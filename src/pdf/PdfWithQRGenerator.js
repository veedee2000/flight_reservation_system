import React from "react";
import QRcode from "qrcode.react";
import { jsPDF } from "jspdf";
import { getProfileValue, useAuth } from "../firebase/Firebase";

const PdfWithQRGenerator = () => {
  const currentUser = useAuth();

  const generatePDF = async () => {
    // Defines the pdf
    let pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    const data = await getProfileValue(currentUser);

    //Adding Personal Details
    const name = data.name;
    const age = data.age;
    const sex = data.sex;
    const email = data.email;
    const phone = data.phone;
    pdf.text("Personal Details", 20, 20);
    pdf.text("Name : " + name, 30, 30);
    pdf.text("Age : " + age, 30, 40);
    pdf.text("Sex : " + sex, 30, 50);
    pdf.text("Email : " + email, 30, 60);
    pdf.text("Phone No : " + phone, 30, 70);

    //Adding Ticket Details
    const departure_time = "7:15";
    const arriconst_time = "10:45";
    const departure_place = "Kolkata (CCU)";
    const arrival_place = "Mumbai (MUM)";
    const flight_no = "FL12305";
    const price = 5435;
    pdf.text("Ticket Details ", 20, 80);
    pdf.text(
      "Departure : " + departure_time + "A.M. from " + departure_place,
      30,
      90
    );
    pdf.text(
      "Arrival : " + arriconst_time + "A.M. at " + arrival_place,
      30,
      100
    );
    pdf.text("Flight No : " + flight_no, 30, 110);
    pdf.text("Price : Rs." + price + "/-", 30, 120);

    // Adding QR code to PDF
    let base64Image = document.getElementById("qrcode").toDataURL();
    pdf.text("QR Code", 30, 150);
    pdf.addImage(base64Image, "png", 80, 197, 40, 40);

    // Downloads the pdf
    pdf.save("Flight_Ticket.pdf");
  };

  return (
    <div>
      <center>
        <QRcode value="VD-21052022-FL12305" id="qrcode" />
      </center>
      <button
        type="button"
        className="btn btn-primary container"
        style={{
          fontFamily: "inherit",
          borderRadius: "8px",
          width: "10rem",
        }}
        onClick={generatePDF}
      >
        Download
      </button>
    </div>
  );
};

export default PdfWithQRGenerator;
