import React, { useState } from "react";
import CalendarEvents from "../components/CalendarEvents";
import CalendarHomePage from "../components/CalendarHomePage";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import ChartReparation from "../components/ChartReparation";
import ChartIntervention from "../components/ChartIntervention";
import ReportInfo from "../components/ReportInfo";

const Home = () => {
  const [selectDate, setSelectDate] = useState(Date.now().toString());
  const selectedDay = (date) => {
    setSelectDate(date);
  };
  return (
    <div className="page-main">
      <Navbar />
      <div className="container">
        <div className="pageContainer">
        <SearchBar />
          <div className="stats">
            <div className="calendarContainer">
              <div className="topCalendar">
                <span className="suiveInter">
                  8 / 10 interventions réalisées
                </span>
                <div className="selectContainer">
                  <label htmlFor="region">Région : </label>
                  <select name="" id="region" className="selectDept">
                    <option value="" disabled>
                      Région{" "}
                    </option>
                    <option value="Rhône">Rhône</option>
                    <option value="Ain">Ain</option>
                  </select>
                </div>
              </div>
              <div className="progessBarContainer">
                <div className="progress"></div>
              </div>
              <span className="dateToday">
                {new Date().toLocaleDateString("fr")}
              </span>
              <CalendarHomePage selectedDay={selectedDay} />
              {/* <CalendarEvents date={selectDate} /> */}
              <ReportInfo rapportClicked={()=>{}} dateFilter={selectDate}/>
              
            </div>
            <div className="chartRight">
              <ChartReparation />
              <ChartIntervention/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
