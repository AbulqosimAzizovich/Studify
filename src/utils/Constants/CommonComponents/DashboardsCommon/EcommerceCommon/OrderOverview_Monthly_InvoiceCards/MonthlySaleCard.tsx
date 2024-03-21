import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import DropdownWithHeader from "../../DropdownWithHeader";
import { Growth, MonthlySaleTitle } from "../../../../../Constants";
import { monthlyDropdownList, monthlyGrowthOptions } from "../../../../../../Data/DashboardsData/ECommerceData";
import { H3, H5 } from "../../../../../../AbstractElements";
import { TotalEarningCardProp } from "../../../../../../Types/DashboardsType";

export default function MonthlySaleCard({ colClass }: TotalEarningCardProp) {
  return (
    <Col xl={12} className={colClass}>
      <Card className="monthly-chart">
        <DropdownWithHeader
          headerClass="pb-0"
          heading={MonthlySaleTitle}
          dropDownList={monthlyDropdownList}
          dropDownClass="icon-dropdown"
          dropDownIcon={true}
        />
        <CardBody>
          <div className="d-flex">
            <div className="monthly">
              <H5>{Growth}</H5>
              <H3>{"$7,234"}</H3>
            </div>
            <div className="growth" id="monthlychart">
              <ReactApexChart
                options={monthlyGrowthOptions}
                series={monthlyGrowthOptions.series}
                type="line"
                height={120}
              />
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
}
