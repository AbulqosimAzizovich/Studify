import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import { webCardData } from "../../../../../../Data/DashboardsData/ProjectData";
import SvgIcon from "../../../CommonIcons/CommonSvgIcons";
import { H4 } from "../../../../../../AbstractElements";
import CommonDropdown from "../../CommonDropdown";
import { monthlyDropdownList } from "../../../../../../Data/DashboardsData/ECommerceData";
import Comment_CustomerContent from "./Comment&CustomerContent";

export default function WebCard() {
  return webCardData.map((item) => (
    <Col xl={4} lg={4} md={item.md} key={item.id}>
      <Card className="web-card">
        <CardBody>
          <div className={`d-flex ${item.divClass}`}>
            <div className="header-top">
              <div className={`mobile-app bg-light-${item.color}`}>
                <span></span>
                <SvgIcon iconId={item.icon} />
              </div>
              <div className="flex-grow-1">
                <H4>{item.title}</H4>
                <span>{item.text}</span>
              </div>
            </div>
            <CommonDropdown dropDownList={monthlyDropdownList} dropDownClass="icon-dropdown" dropDownIcon={true} />
          </div>
          <Comment_CustomerContent item={item} />
        </CardBody>
      </Card>
    </Col>
  ));
}
