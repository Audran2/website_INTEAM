import React, { useState, useEffect } from "react";
import moment from "moment";
import "moment/locale/fr";

const CalendarHomePage = ({selectedDay}) => {
  const [currentWeek, setCurrentWeek] = useState([]);
  const todayDate = new Date().getDate().toString()
  const [selectedDayIndex, setSelectedDayIndex] = useState(-1);

  const handleClick = (index, stamp) => {
    setSelectedDayIndex(index);
    selectedDay(stamp)
  }
  useEffect(() => {
    moment.locale("fr");
    const today = moment();
    const startOfWeek = today.startOf("week");

    const days = [];

    for (let i = 0; i < 7; i++) {
      const day = startOfWeek.clone().add(i, "days");
      const dayName = day.format("ddd");
      const dayDate = day.format("D");
      const stamp = day.valueOf()
      days.push({ name: dayName, date: dayDate, stamp: stamp });    
    }

    setCurrentWeek(days);
  }, []);
  return (
    <div className="calendarDisplay">
      {currentWeek.map((day, index) => (
        <div className={todayDate === day.date ? "today day" : "day"} key={index}>
          <span className="nameDay">{day.name}</span>
          <span className={selectedDayIndex === index ? "selectedDay" : "numberDay"} onClick={()=>handleClick(index, day.stamp)}>{day.date}</span>
        </div>
      ))}
    </div>
  );
};

export default CalendarHomePage;
