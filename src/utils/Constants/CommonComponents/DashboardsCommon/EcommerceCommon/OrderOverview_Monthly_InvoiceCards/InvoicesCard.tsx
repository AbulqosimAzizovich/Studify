import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import { TotalEarningCardProp } from "../../../../../../Types/DashboardsType";
import DropdownWithHeader from "../../DropdownWithHeader";
import { Due, InvoicesTitle, Overdue } from "../../../../../Constants";
import { monthlyDropdownList } from "../../../../../../Data/DashboardsData/ECommerceData";
import { H3, H5 } from "../../../../../../AbstractElements";

export default function InvoicesCard({ colClass }: TotalEarningCardProp) {
  return (
    <Col xl={12} className={colClass}>
      <Card className="invoices">
        <DropdownWithHeader
          headerClass="pb-0"
          heading={InvoicesTitle}
          dropDownList={monthlyDropdownList}
          dropDownClass="icon-dropdown"
          dropDownIcon={true}
        />
        <CardBody>
          <div className="d-flex">
            <div className="flex-shrink-0">
              <H5>{Due}</H5>
              <H3>{"$8,727"}</H3>
            </div>
            <div className="flex-grow-1">
              <H5>{Overdue}</H5>
              <H3>{"$8,727"}</H3>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
}
