import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import Chart from "react-apexcharts";
import { totalEarningCardsData } from "../../../../../Data/DashboardsData/DefaultData";
import { H3, H5 } from "../../../../../AbstractElements";
import { ThanLastWeek } from "../../../../Constants";
import { TotalEarningCardProp } from "../../../../../Types/DashboardsType";

export default function TotalEarningCards({ colClass }: TotalEarningCardProp) {
  return (
    <Row>
      {totalEarningCardsData.map((item) => (
        <Col xs={12} lg={12} className={`${colClass} box-col-12`} key={item.id}>
          <Card className="total-earning">
            <CardBody className={item.id === 2 ? "pb-0" : ""}>
              <Row>
                <Col sm={7} className="box-col-7">
                  <div className="d-flex">
                    <H3 className="font-primary">{item.title}</H3>
                  </div>
                  <H5>
                    {"$"}
                    {item.rate}
                  </H5>
                  <span>
                    {"+ "}
                    {item.lastWeek}
                    {"%"} {ThanLastWeek}
                  </span>
                </Col>
                <Col sm={5} className="box-col-5 p-0">
                  <div id="income-chart">
                    <Chart type={item.chart.type} options={item.chart} series={item.chart.series} height={100} />
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
