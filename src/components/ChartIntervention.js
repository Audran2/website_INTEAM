import React, { useEffect } from "react";
import Chart from "chart.js/auto";

const ChartIntervention = () => {
  const labelCenter = {
    id: "labelCenter",
    beforeDraw: (chart, args, options) => {
      if (!Array.isArray(options.labels)) {
        return console.error('"options.lables" must be array', options.lables);
      }
  
      const {
        ctx,
        chartArea: { width, height }
      } = chart;
      const context = ctx.canvas.getContext("2d");
      context.save();
  
      const labels = options.labels.slice();
      const totalFontSize = labels.reduce((x, y, index) => {
        let prevSize = x[index - 1] || 0;
        x.push(prevSize + y.font.size);
        return x;
      }, []);
      labels.forEach((label, index) => {
        let textPosition = totalFontSize[index] - label.font.size;
        const values = {
          text: label.text || "?",
          font: {
            size: label.font.size || 30,
            family: label.font.family || "sans-serif",
            color: label.font.color || "black",
            style: label.font.style || "normal",
            unit: label.font.unit || "px"
          }
        };
        switch (values.font.unit) {
          case "em":
            values.font.size = label.font.size * 0.05;
            textPosition *= 0.8;
            break;
          default:
            break;
        }
  
        context.font = `${values.font.style} ${values.font.size}${values.font.unit} ${values.font.family}`;
        context.textAlign = "center";
        context.fillStyle = values.font.color;
        context.fillText(values.text, width / 2, height / 2 + textPosition);
      });
      context.restore();
    }
  };
  const canvasRef = React.useRef();
  useEffect(() => {
    const chart = new Chart(canvasRef.current, {
      plugins: [labelCenter],
      type: "doughnut",
      data: {
        labels: ["Terminé", "Assigné", "Annulé"],
        datasets: [
          {
            data: [60, 25, 5],
            backgroundColor: ["#0EAD69", "#e7e349", "#F7685B"],
            borderWidth: 0,
            weight: 0.5,
            cutoutPercentage: 10
          },
        ],
      },
      options: {
        cutout : 70,
        plugins:{
          legend : {
            position:"right",
          },
          labelCenter: {
            labels: [
              {
                text: '60%',
                font: {
                  size: 4,
                  unit: "rem",
                  color: "rgb(80, 80, 80)",
                  style: "bold"
                }
              }
            ],
          },
        }
      },
    });
    return () => {
      chart.destroy();
    };
  }, []);
  return (
    <div className="chartIntervention">
      <div className="topCard">
        <span>Intervention</span>
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

export default ChartIntervention;
