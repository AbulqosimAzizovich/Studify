import { Button } from "reactstrap";
interface propsTypes {
  children?: any;
  color?: string;
  className?: string;
  onClick?: (value: any) => void;
  id?: string;
  name?: string;
  size?: string;
  active?: boolean;
  style?:React.CSSProperties;
  disabled?: boolean;
  outline?:boolean
  type?: 'button' | 'submit' | 'reset'
  databsdismiss?: 'modal'
   arialabel?: 'Close' 


}

function Btn(props: propsTypes) {
  return <Button {...props}>{props.children}</Button>;
};

export default Btn;