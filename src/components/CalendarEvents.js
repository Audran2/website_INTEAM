import React from "react";
import moment from "moment";
import "moment/locale/fr";

const CalendarEvents = ({ date }) => {
  const timestampString = date; 
  const timestamp = parseInt(timestampString, 10);
  const dateFormat = moment(timestamp).format("DD-MM-YYYY");
  return (
    <div className="calendarEvents">
      <div className="event">
        <div className="topCard">
          <div className="title">
            <span className="nomClient">Fitness park</span>
            <span> - </span>
            <span className="nomProduit">Tapis de course</span>
          </div>
          <div className="typeAction">
            <span>Maintenance</span>
          </div>
        </div>
        <div className="middleCard">
          <span>Date intervention : </span>
          <span>{dateFormat}</span>
        </div>
        <div className="bottomCard">
          <div className="techni">
            <img src="../assets/png/useravatar.png" alt="" />
            <span>Nom technicien</span>
          </div>
          <span className="status termine">Terminé</span>
        </div>
      </div>
    </div>
  );
};

export default CalendarEvents;
