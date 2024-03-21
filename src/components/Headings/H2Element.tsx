interface propsTypes {
    children?: any;
    className?: string;
  }
  
  function H2(props: propsTypes) {
    const { children = "" } = props;
    return <h2 {...props}>{children}</h2>;
  };
  
  export default H2;