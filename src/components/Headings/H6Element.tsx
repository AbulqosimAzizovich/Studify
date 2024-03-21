export interface propsTypes {
    children?: any;
    className?: string;
  }
  
  function H6 (props: propsTypes) {
    return <h6 {...props}>{props.children}</h6>;
  };
  
  export default H6;