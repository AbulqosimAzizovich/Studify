import React from "react";
import ReactApexChart from "react-apexcharts";
import { Col, Row } from "reactstrap";
import { H5, H6 } from "../../../../../../AbstractElements";
import { categoriesSalesData, categoriesoptions } from "../../../../../../Data/DashboardsData/ECommerceData";

export default function CategoriesSales() {
  return (
    <Row className="mt-2">
      <Col xs={6} className="p-0">
        <div id="Categories-chart">
          <ReactApexChart options={categoriesoptions} series={categoriesoptions.series} type="donut" height={200} />
        </div>
      </Col>
      <Col xs={6} className="categories-sales">
        {categoriesSalesData.map((item) => (
          <div className="d-flex gap-2" key={item.id}>
            <div className="flex-shrink-0">
              <span className={`bg-${item.color}`}> </span>
            </div>
            <div className="flex-grow-1">
              <H6>{item.title}</H6>
            </div>
            <H5>
              {"$"}
              {item.rate}
            </H5>
          </div>
        ))}
      </Col>
    </Row>
  );
}
