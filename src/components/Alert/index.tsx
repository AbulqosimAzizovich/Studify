import { Alert } from "reactstrap";

function Alerts(props: any) {
  return (
    <Alert {...props}>
      {props.children}
    </Alert>
  );
};

export default Alerts;