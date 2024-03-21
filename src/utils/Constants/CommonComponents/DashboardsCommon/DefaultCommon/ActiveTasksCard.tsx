import React, { useState } from "react";
import { Card, CardBody, FormGroup, Input, Label } from "reactstrap";
import { Link } from "react-router-dom";
import DropdownWithHeader from "../DropdownWithHeader";
import { ActiveTasksTitle, Href } from "../../../../Constants";
import { activeTasksData, monthlyDropdownList } from "../../../../../Data/DashboardsData/DefaultData";
import { H5, LI, P, UL } from "../../../../../AbstractElements";
import { TotalEarningCardProp } from "../../../../../Types/DashboardsType";
import SvgIcon from "../../CommonIcons/CommonSvgIcons";

export default function ActiveTasksCard({ colClass }: TotalEarningCardProp) {
  const [tasks, setTasks] = useState(activeTasksData);

  const handleDelete = (itemId: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== itemId);
    setTasks(updatedTasks);
  };
  return (
    <div className={colClass}>
      <Card>
        <DropdownWithHeader
          headerClass="card-no-border pb-0"
          heading={ActiveTasksTitle}
          dropDownList={monthlyDropdownList}
          dropDownClass="icon-dropdown"
          dropDownIcon={true}
        />
        <CardBody className="active-task">
          <UL className="simple-list">
            {tasks.map((item) => (
              <LI className={`d-flex ${item.id === 1 ? "pt-0" : ""}`} key={item.id}>
                <div className="flex-shrink-0">
                  <FormGroup check>
                    <Input type="checkbox" value="" />
                    <Label check></Label>
                  </FormGroup>
                </div>
                <div className="flex-grow-1">
                  <Link to={`${process.env.PUBLIC_URL}/applications/to-do`}>
                    <H5>{item.title}</H5>
                  </Link>
                  <P>{item.text}</P>
                </div>
                <span className="delete-option" onClick={() => handleDelete(item.id)}>
                  <a href={Href} onClick={(e) => e.preventDefault()}>
                    <SvgIcon className="remove" iconId="Delete" />
                  </a>
                </span>
              </LI>
            ))}
          </UL>
        </CardBody>
      </Card>
    </div>
  );
}
