import React from 'react';
import { ReactNode } from 'react';
import { Badge, BadgeProps } from 'reactstrap';

interface BadgesProps extends BadgeProps {
  children?: ReactNode;
}

function Badges (props : BadgesProps) {
  const { children = '' } = props;
  return <Badge {...props}>{children}</Badge>;
};

export default Badges;
