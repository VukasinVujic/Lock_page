import React from "react";

const Slide10 = (props) => {
  const givPicture = () => {
    if (props.numPicture === 0) {
      return (
        <img className="move-down" src="/images/road-SRB-picture.png" alt="" />
      );
    } else if (props.numPicture === 1) {
      return (
        <img className="move-down" src="/images/road-ENG-picture.png" alt="" />
      );
    } else if (props.numPicture === 2) {
      return (
        <img className="move-down" src="/images/road-RUS-picture.png" alt="" />
      );
    }
  };

  return <div>{givPicture()}</div>;
};

export default Slide10;
