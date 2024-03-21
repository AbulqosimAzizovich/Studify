import React, { useEffect, useState } from "react";
import { Bar, Line } from "react-chartjs-2";

import { Chart, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Tooltip, Filler, Legend, } from "chart.js";
Chart.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Tooltip, Filler, Legend,);

import {
  saleRevenue,
  activeSubscription,
  salesOverview,
  coinOverview,
  coinOverviewSet1,
  coinOverviewSet2,
  coinOverviewSet3,
  userActivity,
  orderOverviewSet1,
  orderOverviewSet2,
  orderOverviewSet3,
  userActivitySet2,
  userActivitySet3,
  userActivitySet4,
} from "./Data";

export const BarChart = ({ sales }) => {
  return (
    <Bar
      className="sales-bar-chart chartjs-render-monitor"
      data={sales ? saleRevenue : activeSubscription}
      options={{
        plugins: {
          legend: {
              display: false,
          },
          tooltip: {
              enabled: true,
              displayColors: false,
              backgroundColor: "#eff6ff",
              titleFont: {
                size: '11px',
              },
              titleColor: "#6783b8",
              titleMarginBottom: 4,
              bodyColor: "#9eaecf",
              bodyFont: {
                size: '10px',
              },
              bodySpacing: 3,
              padding: 8,
              footerMarginTop: 0,
          },
        },
        scales: {
          y:{
              display: false,
            },
          x:{
              display: false,
            },
        },
        maintainAspectRatio: false,
      }}
    />
  );
};

export const LineChart = () => {
  return (
    <Line
      className="sales-overview-chart"
      data={salesOverview}
      options={{
        plugins: {
          legend: {
              display: false,
          },
          tooltip: {
              enabled: true,
              displayColors: false,
              backgroundColor: "#eff6ff",
              titleFont: {
                size: '13px',
              },
              titleColor: "#6783b8",
              titleMarginBottom: 6,
              bodyColor: "#9eaecf",
              bodyFont: {
                size: '12px',
              },
              bodySpacing: 4,
              padding: 10,
              footerMarginTop: 0,
          },
        },
        maintainAspectRatio: false,
        scales: {
          y:{
              display: true,
              ticks: {
                beginAtZero: true,
                color:"#9eaecf", 
                font: {
                  size: '11px',
                },
                callback: function (value, index, values) {
                  return "$ " + value;
                },
                padding: 10,
                min: 100,
                stepSize: 3000,
              },
              grid: {
                tickMarkLength: 0,
              },
            },
          x:{
              display: true,
              ticks: {
                color:"#9eaecf", 
                font: {
                  size: '9px',
                },
                source: "auto",
                padding: 10,
              },
              grid: {
                color: "transparent",
                tickMarkLength: 0,
                zeroLineColor: "transparent",
              },
            },
        },
      }}
    />
  );
};

export const DoubleBar = ({ state }) => {
  let object;
  const setData = (state) => {
    switch (state) {
      case "set2":
        object = orderOverviewSet2;
        break;
      case "set3":
        object = orderOverviewSet3;
        break;
      default:
        object = orderOverviewSet1;
    }
    return object;
  };
  return (
    <Bar
      className="chartjs-render-monitor"
      data={setData(state)}
      options={{
        plugins: {
          legend: {
              display: false,
          },
          tooltip: {
              enabled: true,
              displayColors: false,
              backgroundColor: "#eff6ff",
              titleFont: {
                size: '13px',
              },
              titleColor: "#6783b8",
              titleMarginBottom: 6,
              bodyColor: "#9eaecf",
              bodyFont: {
                size: '12px',
              },
              bodySpacing: 4,
              padding: 10,
              footerMarginTop: 0,
          },
        },
        maintainAspectRatio: false,
        scales: {
          y: {
              display: true,
              ticks: {
                beginAtZero: true,
                color:"#9eaecf", 
                font: {
                  size: '11px',
                },
                padding: 10,
                callback: function (value, index, values) {
                  return "$ " + value;
                },
                min: 100,
                max: 5000,
                stepSize: 1200,
              },
              grid: {
                tickMarkLength: 0,
              },
            },
          x:{
              display: true,
              ticks: {
                color:"#9eaecf", 
                font: {
                  size: '9px',
                },
                source: "auto",
                padding: 10,
                stepSize: 2400,
              },
              grid: {
                color: "transparent",
                tickMarkLength: 0,
                zeroLineColor: "transparent",
              },
            },
        },
      }}
    />
  );
};

export const HorizontalBarChart = ({ state }) => {
  const [data, setData] = useState(coinOverview);
  useEffect(() => {
    let object;
    if (state === "day") {
      object = coinOverviewSet3;
    } else if (state === "month") {
      object = coinOverviewSet2;
    } else {
      object = coinOverviewSet1;
    }
    setData(object);
  }, [state]);
  return (
    <Bar
      data={data}
      className="coin-overview-chart"
      options={{
        plugins: {
          legend: {
              display: false,
          },
          tooltip: {
              enabled: true,
              displayColors: false,
              backgroundColor: "#eff6ff",
              titleFont: {
                size: '13px',
              },
              titleColor: "#6783b8",
              titleMarginBottom: 6,
              bodyColor: "#9eaecf",
              bodyFont: {
                size: '12px',
              },
              bodySpacing: 4,
              padding: 10,
              footerMarginTop: 0,
          },
        },
        indexAxis: "y",
        maintainAspectRatio: false,
        scales: {
          y: {
              display: false,
              stacked: true,
              ticks: {
                beginAtZero: true,
                padding: 0,
              },
              grid: {
                tickMarkLength: 0,
              },
            },
          x:{
              display: false,
              stacked: true,
              ticks: {
                color:"#9eaecf", 
                font: {
                  size: '9px',
                },
                source: "auto",
                padding: 0,
              },
              grid: {
                color: "transparent",
                tickMarkLength: 0,
                zeroLineColor: "transparent",
              },
            },
        },
      }}
    />
  );
};

export const StackedBarChart = ({ state }) => {
  const [data, setData] = useState(userActivity);
  useEffect(() => {
    let object;
    if (state === "day") {
      object = userActivitySet2;
    } else if (state === "month") {
      object = userActivitySet3;
    } else {
      object = userActivitySet4;
    }
    setData(object);
  }, [state]);
  return (
    <Bar
      className="usera-activity-chart"
      data={data}
      options={{
        plugins: {
          legend: {
              display: false,
          },
          tooltip: {
              enabled: true,
              displayColors: false,
              backgroundColor: "#eff6ff",
              titleFont: {
                size: '13px',
              },
              titleColor: "#6783b8",
              titleMarginBottom: 6,
              bodyColor: "#9eaecf",
              bodyFont: {
                size: '12px',
              },
              bodySpacing: 4,
              padding: 10,
              footerMarginTop: 0,
          },
        },
        maintainAspectRatio: false,
        scales: {
          y: {
              display: false,
              stacked: true,
              ticks: {
                beginAtZero: true,
              },
            },
          x:{
              display: false,
              stacked: true,
            },
        },
      }}
    />
  );
};
