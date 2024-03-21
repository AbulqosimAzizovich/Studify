export interface propsTypes {
    children?: any;
    className?: string;
  }
  function H1(props: propsTypes) {
    return <h1 {...props}>{props.children}</h1>;
  };
  
  export default H1;