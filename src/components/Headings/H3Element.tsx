export interface propsTypes {
    children?: any;
    className?: string;
  }
  
  function H3(props: propsTypes) {
    const { children = "" } = props;
    return <h3 {...props}>{children}</h3>;
  };
  
  export default H3;