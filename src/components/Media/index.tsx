import { Media } from "reactstrap";
export interface ImageTypes {
  body?: boolean;
  className?: string;
  src: any;
  alt: any;
  ref?: any;
  onLoad?: () => void;
  style?: Object;
  height?: number;
  id?: string;
  title?: string;
  width?: number;
}

function Image(props: ImageTypes) {
  return (
    <Media {...props} />
  )
};

export default Image;