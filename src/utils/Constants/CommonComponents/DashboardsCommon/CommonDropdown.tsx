import React, { useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { CommonHeaderWithDropdownProps } from "../../../../Types/DashboardsType";

export default function CommonDropdown({
  dropDownList,
  dropDownTitle,
  caret,
  dropDownClass,
  dropDownIcon,
}: CommonHeaderWithDropdownProps) {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <Dropdown isOpen={open} toggle={toggle} className={dropDownClass ? dropDownClass : ""}>
      <DropdownToggle color="transparent" caret={caret ? true : false}>
        {dropDownIcon ? <i className="icon-more-alt" /> : dropDownTitle}
      </DropdownToggle>
      <DropdownMenu end={true}>
        {dropDownList.map((item, index) => (
          <DropdownItem key={index}>{item}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
