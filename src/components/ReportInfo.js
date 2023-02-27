import React, { useEffect, useState } from "react";

const ReportInfo = ({ rapportClicked, dateFilter }) => {
  const event = [
    {
      status:"assigne",
      date: 1676847600000,
      client: "Fitness Park"
    },
    {
      status:"termine",
      date:1676934000000,
      client: "Lou Rugby"
    },
    {
      status:"termine",
      date:1677020400000,
      client: "Fitness Park"
    },
    {
      status:"termine",
      date: 1677106800000,
      client: "Fitness Park"
    },
    {
      status:"annule",
      date: 1677106800000,
      client: "Lou Rugby"
    },
    {
      status:"annule",
      date:1677106800000,
      client: "Lou Rugby"
    },
    {
      status:"termine",
      date:1677193200000,
      client: "Lou Rugby"
    },
    {
      status:"termine",
      date:1677193200000,
      client: "Fitness Park"
    },
    {
      status:"annule",
      date:1677279600000,
      client: "Lou Rugby"
    },
    {
      status:"assigne",
      date:1677366000000,
      client: "Lou Rugby"
    }
  ]
  const [isClick, setIsClick] = useState([
    true,
    ...Array(event.length).fill(false),
  ]);
  const handleClick = (index) => {
    const newIsClick = Array(event.length).fill(false);
    newIsClick[index] = !newIsClick[index];
    setIsClick(newIsClick);
    rapportClicked(event[index]);
  };

  useEffect(() => {
    rapportClicked(event[0]);
  }, []);

  return (
    <div className="reportInfo">
      {event
      .filter((ev)=>{
        return dateFilter === null ? true : ev.date === dateFilter
      })
      .map((sta, index) => (
        <div
          className={isClick[index] ? "isClick reportCard" : "reportCard"}
          key={index}
          onClick={() => handleClick(index)}
        >
          <div className="photo">
            <img
              src="../assets/png/useravatar.png"
              alt=""
              className="imgTechni"
            />
          </div>
          <div className="otherInfo">
            <div className="infotech">
              <span>George Fields</span>
              <span>{new Date(sta.date).toLocaleDateString('fr-FR')}</span>
            </div>
            <div className="inforeport">
              <span>{sta.client} - Tapis de course</span>
              <span className={sta.status + " status"}></span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReportInfo;
