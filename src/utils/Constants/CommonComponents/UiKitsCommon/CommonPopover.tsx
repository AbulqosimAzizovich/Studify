import { Fragment, useState } from "react";
import { Popover, PopoverBody, PopoverHeader } from "reactstrap";
import { Btn } from "../../../../AbstractElements";

type objType = {
  id?: string;
  placement: any;
  popoverHeader?: string;
  popoverBody?: string;
  btnColor?: string;
  btnText?: string;
  trigger?: string;
};
type propsType = {
  data: objType;
};

const CommonPopover = ({ data }: propsType) => {
  const [popover, setPopover] = useState(false);
  const toggle = () => setPopover(!popover);
  return (
    <Fragment>
      <Btn color={`${data.btnColor}`} className="example-popover mb-0 me-0" id={`${"Popover-" + data.id}`}>
        {data.btnText}
      </Btn>
      <Popover
        placement={data.placement}
        isOpen={popover}
        target={"Popover-" + data.id}
        toggle={toggle}
        trigger={data.trigger}
      >
        <PopoverHeader>{data.popoverHeader}</PopoverHeader>
        <PopoverBody>{data.popoverBody}</PopoverBody>
      </Popover>
    </Fragment>
  );
};
export default CommonPopover;
