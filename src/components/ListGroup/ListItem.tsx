import { Fragment } from "react";
import { ListGroupItem } from "reactstrap";

function LI (props: any) {
  return (
    <Fragment>
      <ListGroupItem {...props}>{props.children}</ListGroupItem>
    </Fragment>
  );
};

export default LI;