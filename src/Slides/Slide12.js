import React from "react";

const Slide12 = (props) => {
  const { languageContext } = props;

  return (
    <div>
      <h2>Meet our</h2>
      <h2>Team</h2>
      <div className="puzzle-slide-container">
        <div>
          <div className="space-between">
            <p className="name-container">Grigorije Jakšić</p>
            <ul>
              <li>Social engineering</li>
              <li>Penetration tester</li>
              <li>DevOps engineer</li>
            </ul>
          </div>
          <div className="space-between2">
            <p className="name-container">Predrag Ožegović</p>
            <ul>
              <li>Software developer</li>
              <li>Python i Android developer</li>
              <li>Penetration tester</li>
            </ul>
          </div>
        </div>
        <div>
          <img className="remove-image" src="/images/puzzle.png" alt="" />
        </div>
        <div>
          <div className="space-between">
            <p className="name-container">Aleksandar Kovačević</p>
            <ul>
              <li>Business development</li>
              <li>Finance</li>
            </ul>
          </div>
          <div className="space-between2">
            <p className="name-container">Gavrilo Bosakov</p>
            <ul>
              <li>Machine Learning engineer</li>
              <li>Python developer</li>
              <li>Computer vision specialist</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide12;
