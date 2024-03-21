import * as Icon from 'react-feather';

type fetherType = {
    iconName: keyof typeof Icon,
    className?: string
}

export default function FeatherIconCom({ iconName, className }: fetherType) {
    const IconComp = Icon[iconName];
    return <IconComp className={className} />;

}