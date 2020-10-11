import React from "react";

const Slide11 = (props) => {
  const { languageContext } = props;

  return (
    <div>
      <h3 className="title-class">{languageContext.slide_11_title_1}</h3>
      <div className="two-pictures">
        <img className="move-down" src="/images/hardware.png" alt="" />
        <img className="move-down" src="/images/board.png" alt="" />
      </div>
    </div>
  );
};

export default Slide11;
