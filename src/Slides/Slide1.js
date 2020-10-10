import React from "react";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const Slide1 = () => {
  return (
    <div>
      <div className="make-responsive">
        <img src="/images/phoneAndHands.png" alt="no house icons pict" />
      </div>
      <div className="make-responsive text-between-pictures">
        <p>
          <span className="icon">
            <CheckBoxIcon />
            <ArrowForwardIosIcon />
          </span>
          Simbioza softverskog rešenja i kombinacije “third-party” hardvera koji
          formira pametnu bravu
        </p>
        <p>
          <span className="icon">
            <CheckBoxIcon />
            <ArrowForwardIosIcon />
          </span>
          Bez upotrebe wireless-a i Bluetooth-a
        </p>
        <p>
          <span className="icon">
            <CheckBoxIcon />
            <ArrowForwardIosIcon />
          </span>
          Koriscenje NFC modula na telefonu umesto fizičkog ključa, uz back-up
          opciju korišćenja fizičkog ključa
        </p>
        <p>
          <span className="icon">
            {/* style={{ fontSize: "80px" }} */}
            <CheckBoxIcon className="lala" />
            <ArrowForwardIosIcon />
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
