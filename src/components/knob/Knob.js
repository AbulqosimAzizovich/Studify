import React from "react";
import { Doughnut } from "react-chartjs-2";

import { Chart, CategoryScale, LinearScale, Legend, Tooltip } from "chart.js";
Chart.register(CategoryScale, LinearScale, Legend, Tooltip);

const Knob = ({ data, type, centerText }) => {
  return (
    <div className="nk-knob position-relative">
      <Doughnut
        data={data}
        options={{
          plugins:{
            legend: {
              display: false,
            },
            tooltips: {
              enabled: false,
            },
          },
          rotation: 270,
          circumference: type === "half" ? 180 : 360,
          cutout: '93%',
          maintainAspectRatio: true,
          hover: false,
        }}
      />
      <div className={`position-absolute top-50 start-50 translate-middle fs-1 fw-light ${type === "full" ? "pb-4" : "pt-5"}`}>
        <div className="text-lead">{centerText}</div>
      </div>
    </div>
  );
};

export default Knob;
