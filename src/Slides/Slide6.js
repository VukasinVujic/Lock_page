import React from "react";
import ComputerIcon from "@material-ui/icons/Computer";
import LanguageIcon from "@material-ui/icons/Language";
import EnhancedEncryptionIcon from "@material-ui/icons/EnhancedEncryption";

const Slide6 = (props) => {
  const { languageContext } = props;

  return (
    <div>
      <div className="pict-in-midd-container">
        <div className="order-class-1">
          <h3 style={{ color: "#990000" }}>
            <LanguageIcon />
            {languageContext.slide_6_title_1}
          </h3>
          <hr style={{ border: 0, borderTop: "2px solid #990000" }} />
          <ul>
            <li>{languageContext.slide_6_par_1_1}</li>
            <li>{languageContext.slide_6_par_1_2}</li>
            <li>{languageContext.slide_6_par_1_3}</li>
            <li>{languageContext.slide_6_par_1_4}</li>
          </ul>
        </div>
        <div className="order-class-2">
          <img
            style={{ marginLeft: "8%" }}
            src="/images/hexagon-triangle.png"
            alt=""
          />
        </div>
        <div className="order-class-3">
          <h3 style={{ color: "#8c8c8c" }}>
            <ComputerIcon />
            {languageContext.slide_6_title_2}
          </h3>
          <hr style={{ border: 0, borderTop: "2px solid #8c8c8c" }} />
          <ul>
            <li>{languageContext.slide_6_par_2_1}</li>
            <li>{languageContext.slide_6_par_2_2}</li>
            <li>{languageContext.slide_6_par_2_3}</li>
            <li>{languageContext.slide_6_par_2_4}</li>
          </ul>
        </div>
      </div>
      <div className="text-in-midd-container">
        <div className="order-class-4 middle-position">
          <h3 style={{ color: "#e69500" }}>
            <EnhancedEncryptionIcon />
            {languageContext.slide_6_title_3}
          </h3>
          <hr style={{ border: 0, borderTop: "2px solid #e69500" }} />
          <ul>
            <li>{languageContext.slide_6_par_3_1}</li>
            <li>{languageContext.slide_6_par_3_2}</li>
            <li>{languageContext.slide_6_par_3_3}</li>
            <li>{languageContext.slide_6_par_3_4}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Slide6;
