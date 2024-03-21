import React from "react";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import ReactApexChart from "react-apexcharts";
import DropdownWithHeader from "../DropdownWithHeader";
import { BudgetCardTitle, BudgetSpent } from "../../../../Constants";
import { monthlyDropdownList } from "../../../../../Data/DashboardsData/ECommerceData";
import { H2, H6 } from "../../../../../AbstractElements";
import { budgetCardData, budgetOptions } from "../../../../../Data/DashboardsData/ProjectData";
import SvgIcon from "../../CommonIcons/CommonSvgIcons";
import { TotalEarningCardProp } from "../../../../../Types/DashboardsType";

export default function BudgetCard({ colClass }: TotalEarningCardProp) {
  return (
    <div className={colClass}>
      <Card className="budget-card">
        <DropdownWithHeader
          headerClass="pb-0"
          heading={BudgetCardTitle}
          dropDownClass="icon-dropdown"
          dropDownList={monthlyDropdownList}
          dropDownIcon={true}
        />
        <CardBody className="pb-0">
          <div className="budget-spent">
            <span>{BudgetSpent}</span>
            <H2>{"$ 65,847.00"}</H2>
          </div>
          {budgetCardData.map((item) => (
            <Link to={`${process.env.PUBLIC_URL}/miscellaneous/learning/learning-list-view`} key={item.id}>
              <div className="d-flex">
                <div className={`design-score bg-light-${item.color}`}>
                  <SvgIcon className={item.iconClass ? item.iconClass : ""} iconId={item.icon} />
                </div>
                <div className="flex-grow-1">
                  <H6>{item.title}</H6>
                  <span>
                    {"$"}
                    {item.price}
                  </span>
                </div>
                <div className="flex-shrink-0">
                  <div className="design-menu">
                    {" "}
                    <i className="fa fa-angle-right"></i>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </CardBody>
        <CardBody className="p-0">
          <div className="budget-chart" id="budget-chart">
            <ReactApexChart options={budgetOptions} series={budgetOptions.series} type="area" height={120} />
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
