import { Fragment } from "react";
import { ListGroup } from "reactstrap";
export interface propsTypes {
  children?: any;
  className?: string;
  role?:string
  style?: Object;
  id?: string;
}

function UL (props: propsTypes) {
  return (
    <Fragment>
      <ListGroup {...props}>{props.children}</ListGroup>
    </Fragment>
  );
};

export default UL;