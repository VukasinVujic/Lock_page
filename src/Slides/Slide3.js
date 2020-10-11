import React, { useState } from "react";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const Slide3 = (props) => {
  const { languageContext } = props;
  return (
    <div>
      <h3 className="slide-title">{languageContext.slide_3_title}</h3>

      <div className="make-responsive">
        <img src="/images/phoneAndHands.png" alt="no house icons pict" />
      </div>
      <div className="make-responsive text-icon-container picture-height">
        <p>
          <span className="icon">
            <CheckBoxOutlinedIcon
              style={{ fontSize: "250%", color: "#8c8c8c" }}
            />
            <ArrowForwardIosIcon
              style={{ fontSize: "250%", color: "#8c8c8c" }}
            />
          </span>
          {languageContext.slide_3_par_1}
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
          {languageContext.slide_3_par_2}
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
          {languageContext.slide_3_par_3}
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
          {languageContext.slide_3_par_4}
        </p>
      </div>
      <div className="make-responsive picture-height-2">
        <img src="/images/houseIcons.png" alt="no house icons pict" />
      </div>
      {/* something is wrong the second slide instead of going under the first one interactes with first one */}
      <div>
        <p style={{ color: "white" }}>aaa</p>
        <p style={{ color: "white" }}>aaa</p>
        <p style={{ color: "white" }}>aaa</p>
        <h3 className="slide-title"> {languageContext.slide_6_title} </h3>
      </div>
    </div>
  );
};

export default Slide3;
