import React, { useEffect } from "react";
import Chart from "chart.js/auto";

const ChartReparation = () => {
  const canvasRef = React.useRef();
  useEffect(() => {
    const chart = new Chart(canvasRef.current, {
      type: "line",
      data: {
        datasets: [
          {
            label:"Réparation",
            backgroundColor:"#e7e349",
            borderColor: "#90A0B7",
            data: [{x: "janvier",y:20},{x: "fevrier",y:30},{x:"mars" ,y:25},{x: "avril",y:28},{x: "mai",y:21},{x:"juin" ,y:30},{x:"juillet" ,y:24},{x:"aout" ,y:32},{x:"septembre" ,y:14},{x:"octobre" ,y:24},{x:"novembre" ,y:32},{x:"decembre" ,y:18}],
            fill: true,
            tension:0.5
          },
        ],
      },
    });
    return () => {
      chart.destroy();
    };
  }, []);
  return (
    <div className="chartReparation">
      <div className="topCard">
        <span>Réparation</span>
        <div className="select">
          <label htmlFor="frequence">Afficher : </label>
          <select name="" id="frequence">
            <option value="">Par mois</option>
            <option value="">Par semaine</option>
            <option value="">Par an</option>
          </select>
        </div>
      </div>
      <div className="diagrammeIntervention">
        <canvas ref={canvasRef}></canvas>
      </div>
    </div>
  );
};

export default ChartReparation;
