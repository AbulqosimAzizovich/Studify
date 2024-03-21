import React from "react";
import { Card, CardBody } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import { TotalEarningCardProp } from "../../../../../Types/DashboardsType";
import DropdownWithHeader from "../DropdownWithHeader";
import { ProjectCreatedTitle } from "../../../../Constants";
import { monthlyDropdownList } from "../../../../../Data/DashboardsData/ECommerceData";
import { projectOptions } from "../../../../../Data/DashboardsData/ProjectData";

export default function ProjectCreated({ colClass }: TotalEarningCardProp) {
  return (
    <div className={colClass}>
      <Card>
        <DropdownWithHeader
          headerClass="pb-0"
          heading={ProjectCreatedTitle}
          dropDownClass="icon-dropdown"
          dropDownList={monthlyDropdownList}
          dropDownIcon={true}
        />
        <CardBody className="p-0">
          <div id="revenuegrowth">
            <ReactApexChart options={projectOptions} series={projectOptions.series} type="area" height={355} />
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
