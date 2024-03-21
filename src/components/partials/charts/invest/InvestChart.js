import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

import { Chart, CategoryScale, LinearScale, BarElement, PointElement, Tooltip, Legend, } from "chart.js";
Chart.register(CategoryScale, LinearScale, BarElement, PointElement, Tooltip, Legend,);

import {
  planPurchase,
  planPurchaseSet2,
  planPurchaseSet3,
  planPurchaseSet4,
  totalBalance,
  totalDeposit,
  totalWithdraw,
} from "./InvestData";

export const DepositBarChart = () => {
  return (
    <Bar
      className="iv-data-chart"
      data={totalDeposit}
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
        maintainAspectRatio: false,
        scales: {
          y: {
              display: false,
              ticks: {
                beginAtZero: true,
              },
            },
          x: {
              display: false,
            },
        },
      }}
    ></Bar>
  );
};

export const BalanceBarChart = () => {
  return (
    <Bar
      className="iv-data-chart"
      data={totalBalance}
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
        maintainAspectRatio: false,
        scales: {
          y:{
              display: false,
              ticks: {
                beginAtZero: true,
              },
            },
          x:{
              display: false,
            },
        },
      }}
    ></Bar>
  );
};

export const WithdrawBarChart = () => {
  return (
    <Bar
      className="iv-data-chart"
      data={totalWithdraw}
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
        maintainAspectRatio: false,
        scales: {
          y:{
              display: false,
              ticks: {
                beginAtZero: true,
              },
            },
          x:{
              display: false,
            },
        },
      }}
    ></Bar>
  );
};

export const PurchasePlanChart = ({ set }) => {
  const [data, setData] = useState(planPurchase);
  useEffect(() => {
    let object;
    if (set === "7") {
      object = planPurchaseSet2;
    } else if (set === "15") {
      object = planPurchaseSet3;
    } else {
      object = planPurchaseSet4;
    }
    setData(object);
  }, [set]);

  return (
    <Bar
      className="iv-plan-purchase"
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
        maintainAspectRatio: false,
        scales: {
          y:{
              display: false,
              ticks: {
                beginAtZero: true,
              },
            },
          x:{
              display: false,
            },
        },
      }}
    ></Bar>
  );
};
