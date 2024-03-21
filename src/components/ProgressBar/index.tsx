import { ReactNode } from 'react';
import { Progress, ProgressProps } from 'reactstrap';

interface ProgressBarProps extends ProgressProps {
  children?: ReactNode;
}

function ProgressBar (props: ProgressBarProps) {
  return <Progress {...props}>{props.children}</Progress>;
};

export default ProgressBar;
