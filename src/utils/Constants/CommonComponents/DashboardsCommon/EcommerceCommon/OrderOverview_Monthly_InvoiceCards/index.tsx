import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import DropdownWithHeader from "../../DropdownWithHeader";
import { OrderOverviewTitle, TotalRevenue } from "../../../../../Constants";
import { monthlyDropdownList, orderOverviewData } from "../../../../../../Data/DashboardsData/ECommerceData";
import { H2, H5, H6, ProgressBar } from "../../../../../../AbstractElements";
import { TotalEarningCardProp } from "../../../../../../Types/DashboardsType";
import MonthlySaleCard from "./MonthlySaleCard";
import InvoicesCard from "./InvoicesCard";

export default function OrderOverview_Monthly_InvoiceCards({ colClass }: TotalEarningCardProp) {
  return (
    <Row>
      <Col md={7}>
        <Card className="order-overview">
          <DropdownWithHeader
            headerClass="pb-0"
            heading={OrderOverviewTitle}
            dropDownList={monthlyDropdownList}
            dropDownClass="icon-dropdown"
            dropDownIcon={true}
          />
          <CardBody>
            <div className="d-flex">
              <H2 className="me-2">{"($3,512,201)"}</H2>
              <H6>{TotalRevenue}</H6>
            </div>
            {orderOverviewData.map((item) => (
              <div className="total-revenue" key={item.id}>
                <div className="d-flex">
                  <H5 className="me-2">{item.value}</H5>
                  <span>({item.text})</span>
                </div>
                <ProgressBar value={item.value} color={item.color} />
              </div>
            ))}
          </CardBody>
        </Card>
      </Col>
      <Col md={5}>
        <Row>
          <MonthlySaleCard colClass={colClass} />
          <InvoicesCard colClass={colClass} />
        </Row>
      </Col>
    </Row>
  );
}
