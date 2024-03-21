import { useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { BasicDropdownType } from "../../../Types/UiKitsType";
import { Href } from "../../Constants";

type propsType = {
  item: BasicDropdownType;
};

function DropdownCommon({ item }: propsType) {
  const [open, setOpen] = useState<boolean>(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div className={`btn-group ${item.divClass}`}>
      <Dropdown isOpen={open} toggle={toggle} direction={item.position ? item.position : "down"}>
        <DropdownToggle color={item.class}>{item.text}</DropdownToggle>
        <DropdownMenu className={item.bodyClass}>
          {item.menulist &&
            item.menulist.map((item, index) => (
              <DropdownItem href={Href} key={index}>
                {item}
              </DropdownItem>
            ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
export default DropdownCommon;
