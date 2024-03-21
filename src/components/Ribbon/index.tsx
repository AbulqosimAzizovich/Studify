import { Fragment } from "react";
interface propsTypes {
  children?: any;
  className?: string;
}

function Ribbon (props: propsTypes) {
  return (
    <Fragment>
      <div {...props}>{props.children}</div>
    </Fragment>
  );
};

export default Ribbon;