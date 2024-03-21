export interface propsTypes {
    children?: any;
    className?: string;
  }
  function H5 (props: propsTypes) {
    return <h5 {...props}>{props.children}</h5>;
  };
  export default H5;