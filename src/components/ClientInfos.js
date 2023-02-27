import React, { useEffect, useState } from "react";

const ClientInfos = ({clientClicked}) => {
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
        clientClicked(repetition[index])
      };
      useEffect(()=>{clientClicked(repetition[0])},[])


  return (
    <div className="bigdivinfosclient">
    {repetition.map((repetition, index)=>(
        <div 
        className={isClick[index] ? "ClientInfosDiv clicked" : "ClientInfosDiv"}
        key={index}
        onClick={() => handleClick(index)} >
        <div className="ClientInfosContainer">
            <div className="InfosNom">
                <img src={`../assets/png/Logo${repetition}.jpg`} alt="" />
                <div>
                    <p className="NomEntreprise">{repetition}</p>
                    <p className="NomClient">Georges Field</p>
                </div>
            </div>
            <div className="StatutPark">
                <p className="Statut">Maintenue</p>
            </div>
        </div>
        <p className="DateClient">Client depuis 07/08/2014</p>
        </div>
    ))}
    </div>

  );
};

export default ClientInfos;