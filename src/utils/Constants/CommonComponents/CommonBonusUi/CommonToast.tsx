import React, { useState } from "react";
import { Toast, ToastBody, ToastHeader } from "reactstrap";
import FeatherIconCom from "../CommonIcons/FeatherIconCom";
import { CommonToastProps } from "../../../../Types/CommonComponentType";

export default function CommonToast({
  icon,
  iconColor,
  smallClass,
  strongText,
  smallText,
  bodyText,
}: CommonToastProps) {
  const [open, setOpen] = useState(true);
  const toggle = () => setOpen(!open);
  return (
    <Toast isOpen={open}>
      <ToastHeader
        toggle={toggle}
        icon={<FeatherIconCom className={`toast-icons toast-${iconColor}`} iconName={icon} />}
      >
        <strong className="me-auto">{strongText}</strong>
        <small className={smallClass}>{smallText}</small>
      </ToastHeader>
      <ToastBody className="toast-dark">{bodyText}</ToastBody>
    </Toast>
  );
}
