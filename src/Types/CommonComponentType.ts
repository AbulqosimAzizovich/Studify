import * as Icon from 'react-feather';

export interface CommonToastProps {
    icon: keyof typeof Icon;
    iconColor: string;
    smallClass?: string;
    strongText: string;
    smallText: string;
    bodyText: string;
}
export interface TableHeadType {
    class?: string;
    name: string;
}
export interface CardHeaderSpanType {
    bigHeadingClassName?: string;
    heading?: string
    smallHeading?: string
    span?: string
    headingClassName?: string
    span2?: string
}
interface SubTitleObjectType {
    text?: string;
    code?: string;
};
export interface CommonCardHeaderTypes {
    headClass?: string;
    title: string;
    subTitle?: SubTitleObjectType[];
    titleClass?: string;
};

export interface TableHeaderProp {
    headeData: TableHeadType[]
}

export interface SocialProfileCardProps {
    id: number;
    avatar: string;
    icon: string;
    name: string;
    email: string;
    totalPost: string;
    follower: string;
    following: string;
}

export interface UsersInitialStateType {
    allUsers: SocialProfileCardProps[];
}

export interface SocialProfileType {
    colClass: string;
}

export interface CommonChartProps {
    title: string;
    bodyClass?: string;
    data: any;
    colClass?: string;
    divClass?: string;
}