import React, { Fragment, useState } from "react";
import { Label } from "reactstrap";
import { ToolTip } from "../../../../AbstractElements";
import { TooltipProp } from "../../../../Types/EcommerceType";

export default function Tooltip({ labelText, tooltip, targetId }: TooltipProp) {
  const [hoverTool, setHoverTool] = useState(false);
  const hoverToggle = () => setHoverTool(!hoverTool);
  return (
    <Fragment>
      <Label>
        {labelText}
        <i className="icon-help-alt ms-1" id={targetId}></i>
      </Label>
      <ToolTip placement="top" isOpen={hoverTool} target={targetId} toggle={hoverToggle}>
        {tooltip}
      </ToolTip>
    </Fragment>
  );
}
