import { Tooltip } from 'reactstrap';

function ToolTip (props:any) {
      const { children = '' } = props;
      return (
        <Tooltip {...props} >
          {children}
        </Tooltip>
      );
};

export default ToolTip;