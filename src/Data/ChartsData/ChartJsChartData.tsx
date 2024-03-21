import ConfigDB from "../../Config/ThemeConfig";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarController,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Colors,
} from "chart.js";

const primary = ConfigDB.color.primary_color;
const secondary = ConfigDB.color.secondary_color;
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  LineElement,
  Colors,
  Title,
  Tooltip,
  Legend,
  BarController,
  BarElement,
  ArcElement,
  RadialLinearScale
);

export const barChartData = {
  labels: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль"],
  datasets: [
    {
      data: [35, 59, 80, 81, 56, 55, 40],
      borderColor: primary,
      backgroundColor: "rgba(115, 102 ,255, 0.4)",
      highlightFill: "rgba(115, 102 ,255, 0.6)",
      highlightStroke: primary,
      borderWidth: 2,
    },
    {
      data: [28, 48, 40, 19, 86, 27, 90],
      borderColor: secondary,
      backgroundColor: "rgba(247, 49, 100, 0.4)",
      highlightFill: "rgba(247, 49, 100, 0.6)",
      highlightStroke: secondary,
      borderWidth: 2,
    },
  ],
  plugins: {
    datalabels: {
      display: false,
      color: "white",
    },
  },
};
export const barChartOptions = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    datalabels: {
      display: false,
    },
    legend: {
      display: false,
    },
  },
};

export const lineGraphData = {
  labels: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль"],
  datasets: [
    {
      label: "My First dataset",
      strokeColor: primary,
      pointColor: primary,
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "#000",
      data: [10, 59, 80, 81, 56, 55, 40],
      fill: {
        target: "origin",
        above: "rgba(115, 102 ,255, 0.3)",
      },
    },
    {
      label: "My Second dataset",
      strokeColor: secondary,
      pointColor: secondary,
      pointStrokeColor: "#fff",
      pointHighlightFill: "#000",
      pointHighlightStroke: secondary,
      data: [28, 48, 40, 19, 86, 27, 90],
      fill: {
        target: "origin",
        above: "rgba(247, 49, 100, 0.3)",
      },
    },
  ],
};

export const lineGraphOptions = {
  scales: {
    x: {
      grid: {
        display: true,
        color: "rgba(0,0,0,.05)",
        lineWidth: 1,
      },
      display: true,
    },
    y: {
      grid: {
        display: true,
        color: "rgba(0,0,0,.05)",
        lineWidth: 1,
      },
      display: true,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  elements: {
    point: {
      radius: 4,
      borderWidth: 1,
      hoverRadius: 20,
    },
    line: {
      tension: 0.4,
    },
  },
};

export const radarGraphData = {
  labels: ["Ford", "Chevy", "Toyota", "Honda", "Mazda"],
  datasets: [
    {
      label: "My First dataset",
      fillColor: "rgba(115, 102 ,255, 0.4)",
      strokeColor: primary,
      pointColor: primary,
      pointStrokeColor: primary,
      pointHighlightFill: primary,
      pointHighlightStroke: "rgba(115, 102 ,255, 0.4)",
      data: [12, 3, 5, 18, 7],
    },
  ],
};

export const radarOptions = {
  responsive: true,
  maintainAspectRatio: false,
  elements: {
    line: {
      borderWidth: 2,
    },
  },
  plugins: {
    datalabels: {
      display: false,
    },
    legend: {
      display: false,
    },
  },
};

export const lineChartData = {
  labels: ["", "10", "20", "30", "40", "50", "60", "70", "80"],
  datasets: [
    {
      backgroundColor: "rgba(81, 187, 37, 0.2)",
      borderColor: "#51bb25",
      pointColor: "#51bb25",
      data: [10, 20, 40, 30, 0, 20, 10, 30, 10],
      fill: {
        target: "origin",
        above: "rgba(81, 187, 37, 0.2)",
      },
    },
    {
      backgroundColor: "rgba(247, 49, 100, 0.2)",
      borderColor: secondary,
      pointColor: secondary,
      data: [20, 40, 10, 20, 40, 30, 40, 10, 20],
      fill: {
        target: "origin",
        above: "rgba(247, 49, 100, 0.2)",
      },
    },
    {
      backgroundColor: "rgba(115, 102 ,255, 0.2)",
      borderColor: primary,
      pointColor: primary,
      data: [60, 10, 40, 30, 80, 30, 20, 90, 0],
      fill: {
        target: "origin",
        above: "rgba(115, 102 ,255, 0.2)",
      },
    },
  ],
};

export const lineChartOption = {
  responsive: true,
  maintainAspectRatio: true,
  animation: {
    duration: 0,
  },
  scaleShowVerticalLines: false,
  plugins: {
    datalabels: {
      display: false,
      color: "white",
    },
    legend: {
      display: false,
    },
  },
};

export const doughnutData = {
  labels: ["Primary", "Secondary", "Success"],
  datasets: [
    {
      data: [350, 50, 100],
      backgroundColor: [primary, secondary, "#51bb25"],
    },
  ],
};
export const doughnutOption = {
  maintainAspectRatio: false,
  plugins: {
    datalabels: {
      display: false,
      color: "white",
    },
    legend: {
      display: false,
    },
  },
};

export const polarData = {
  labels: ["Yellow", "Sky", "Black", "Grey", "Dark Grey"],
  datasets: [
    {
      data: [300, 500, 100, 40, 120],
      backgroundColor: [primary, "#f8d62b", "#51bb25", "#a927f9", secondary],
    },
  ],
};

export const polarOption = {
  maintainAspectRatio: false,
  plugins: {
    datalabels: {
      display: false,
      color: "white",
    },
    legend: {
      display: false,
    },
  },
};
