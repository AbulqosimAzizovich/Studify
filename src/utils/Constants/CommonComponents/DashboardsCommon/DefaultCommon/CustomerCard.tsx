import React from "react";
import { Card, CardBody } from "reactstrap";
import { H3, H5 } from "../../../../../AbstractElements";
import SvgIcon from "../../CommonIcons/CommonSvgIcons";
import { SinceLastWeek } from "../../../../Constants";
import { CustomerCardMainProp } from "../../../../../Types/DashboardsType";

export default function CustomerCard({ data }: CustomerCardMainProp) {
  return (
    <>
      {data.map((item) => (
        <div className={item.divClass} key={item.id}>
          <Card className="since">
            <CardBody className={item.bodyClass}>
              <div className={`customer-card d-flex b-l-${item.color} border-2`}>
                <div className="ms-3">
                  <H3 className="mt-1">{item.title}</H3>
                  <H5 className="mt-1">{item.rate}</H5>
                </div>
                <div className={`dashboard-user bg-light-${item.color}`}>
                  <span></span>
                  <SvgIcon iconId={item.icon} />
                </div>
              </div>
              <div className="customer mt-2">
                <span className="me-1">
                  <SvgIcon iconId={item.id === 3 ? "arrow-down" : "arrow-up"} />
                </span>
                <span className={`font-${item.id === 3 ? "danger" : "success"} me-2`}>
                  {"+ "}
                  {item.percent}
                  {"%"}
                </span>
                <span>{SinceLastWeek}</span>
              </div>
            </CardBody>
          </Card>
        </div>
      ))}
    </>
  );
}
