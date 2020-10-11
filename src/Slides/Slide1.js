import React from "react";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const Slide1 = () => {
  return (
    <div>
      <h3 className="slide-title">Prednost GGL1 brave</h3>
      <div className="make-responsive">
        <img src="/images/phoneAndHands.png" alt="no house icons pict" />
      </div>
      <div className="make-responsive text-between-pictures">
        <p>
          <span className="icon">
            <CheckBoxOutlinedIcon
              style={{ fontSize: "250%", color: "#8c8c8c" }}
            />
            <ArrowForwardIosIcon
              style={{ fontSize: "250%", color: "#8c8c8c" }}
            />
          </span>
          Simbioza softverskog rešenja i kombinacije “third-party” hardvera koji
          formira pametnu bravu
        </p>
        <p>
          <span className="icon">
            <CheckBoxOutlinedIcon
              style={{ fontSize: "250%", color: "#e69500" }}
            />
            <ArrowForwardIosIcon
              style={{ fontSize: "250%", color: "#e69500" }}
            />
          </span>
          Bez upotrebe wireless-a i Bluetooth-a
        </p>
        <p>
          <span className="icon">
            <CheckBoxOutlinedIcon
              style={{ fontSize: "250%", color: "#990000" }}
            />
            <ArrowForwardIosIcon
              style={{ fontSize: "250%", color: "#990000" }}
            />
          </span>
          Koriscenje NFC modula na telefonu umesto fizičkog ključa, uz back-up
          opciju korišćenja fizičkog ključa
        </p>
        <p>
          <span className="icon">
            <CheckBoxOutlinedIcon
              style={{ fontSize: "250%", color: "#e69500" }}
            />
            <ArrowForwardIosIcon
              style={{ fontSize: "250%", color: "#e69500" }}
            />
          </span>
          Mogućnost kreiranja master ključa kao i manipulacija ostalim
          vremenskim ključevima
        </p>
      </div>
      <div className="make-responsive">
        <img src="/images/houseIcons.png" alt="no house icons pict" />
      </div>
    </div>
  );
};

export default Slide1;
