import React from "react";
import { Card, CardBody, CardHeader, Col } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import SvgIcon from "../../CommonIcons/CommonSvgIcons";
import { H2 } from "../../../../../AbstractElements";
import { OnlineOrderMainProp } from "../../../../../Types/DashboardsType";

export default function OnlineOrderCards({ data }: OnlineOrderMainProp) {
  return (
    <>
      {data.map((item) => (
        <Col xl={2} sm={6} className={`box-col-4 ${item.colClass}`} key={item.id}>
          <Card className="mb-0 online-order">
            <CardHeader className={item.headerClass}>
              <div className="d-flex">
                <div className={`order bg-light-${item.color}`}>
                  <span></span>
                  <SvgIcon iconId={item.icon} />
                </div>
                <div className="arrow-chart">
                  <SvgIcon iconId={item.arrowColor === "danger" ? "arrow-chart" : "arrow-chart-up"} />
                  <span className={`font-${item.arrowColor}`}>
                    {item.percent}
                    {"%"}
                  </span>
                </div>
              </div>
              <div className="online">
                <span>{item.text}</span>
                <H2>{item.rate}</H2>
              </div>
            </CardHeader>
            <CardBody className="pt-0 ps-2 pe-2">
              <div className={item.chartClass ? item.chartClass : ""}>
                <ReactApexChart
                  options={item.chart}
                  series={item.chart.series}
                  type={item.id === 1 ? "bar" : "area"}
                  height={item.chart.height}
                />
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  );
}
