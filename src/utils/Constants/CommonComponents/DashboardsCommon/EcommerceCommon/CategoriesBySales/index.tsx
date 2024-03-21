import React from "react";
import { Card, CardBody, CardHeader, Col } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import { H2, H4, H6 } from "../../../../../../AbstractElements";
import { CategoriesBySalesTitle, TotalEarned } from "../../../../../Constants";
import CommonDropdown from "../../CommonDropdown";
import { earnedOptions, monthlyDropdownList } from "../../../../../../Data/DashboardsData/ECommerceData";
import { TotalEarningCardProp } from "../../../../../../Types/DashboardsType";
import CategoriesSales from "./CategoriesSales";

export default function CategoriesBySales({ colClass }: TotalEarningCardProp) {
  return (
    <Col xl={3} className={`col-xl-100 box-col-12 ${colClass}`}>
      <Card className="categories-chart">
        <CardHeader className="pb-0">
          <div className="header-top">
            <H4>{CategoriesBySalesTitle}</H4>
            <CommonDropdown dropDownList={monthlyDropdownList} dropDownIcon={true} dropDownClass="icon-dropdown" />
          </div>
          <CategoriesSales />
        </CardHeader>
        <CardBody className="p-0">
          <div className="total-earn">
            <H2>{"$3,512,201"}</H2>
            <H6>{TotalEarned}</H6>
          </div>
          <div className="earned" id="Earned-chart">
            <ReactApexChart options={earnedOptions} series={earnedOptions.series} type="area" height={195} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
}
