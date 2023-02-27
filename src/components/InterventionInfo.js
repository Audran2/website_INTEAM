import React, { useEffect, useState } from "react";

const InterventionInfo = ({interventionClicked}) => {
  const repetition = [
    "FitnessPark",
    "FitnessPark",
    "LouRugby",
    "FitnessPark",
    "FitnessPark",
    "LouRugby",
    "FitnessPark",
    "LouRugby",
    "LouRugby",
  ];
  const [isClick, setIsClick] = useState([true, ...Array(repetition.length).fill(false)]);
  const handleClick = (index) => {
    const newIsClick = Array(repetition.length).fill(false);
    newIsClick[index] = !newIsClick[index];
    setIsClick(newIsClick);
    interventionClicked(repetition[index])
  };
  useEffect(()=>{
    interventionClicked(repetition[0])
  },[])
  return (
    <div className="interventionInfo">
      {repetition.map((sta, index) => (
        <div
          className={isClick[index] ? "isClick reportCard" : "reportCard"}
          key={index}
          onClick={() => handleClick(index)}
        >
          <div className="photo">
            <img
              src={`../assets/png/Logo${repetition[index]}.jpg`}
              alt=""
              className="imgTechni"
            />
          </div>
          <div className="otherInfo">
            <div className="infoCli">
              <span className="nom">{repetition[index]}</span>
              <span className="date">{new Date().toDateString("fr-FR")}</span>
            </div>
            <div className="inforeport">
              <span>Maintenance - Vélo d'appartement</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InterventionInfo;
