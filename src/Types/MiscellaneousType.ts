import * as Icon from 'react-feather';
import { AttributionControlProps, ZoomControlProps } from "react-leaflet";

export interface SearchBarProps {
    data: SupportDataType[];
    setFilteredData: React.Dispatch<React.SetStateAction<SupportDataType[]>>;
}

export interface SupportDataType {
    [key: string]: string | number;
    id: number;
    image: string;
    position: string;
    salary: string;
    office: string;
    skillColor: string;
    skillValue: number;
    extn: number;
    email: string;
    name: string;
    experience: string;
}

export interface CustomImageType {
    src: string;
    name: string;
}

export interface CustomProgressType {
    value: number;
    color: string;
}

interface AccordionCardData {
    id: string;
    title: string;
    subTitle?: string;
}

export interface CommonAccordionCardProps {
    items: {
        id: number;
        heading: string;
        buttonTitle: string;
        data: AccordionCardData[];
    };
}

export interface RightSidebarCardsProps {
    limit: number;
    colClass?: string;
}

export interface CardsDataType {
    id: number
    logo: string
    job_name: string
    badgeValue?: string
    job_area: string
    job_city: string
    Job_description: string
    type: string
    ribbon: boolean
}
export interface HandleDateChange {
    (date: Date, index: number): void;
}
export interface Position {
    lat: number;
    lng: number;
}
export interface CustomMapProps {
    center: Position;
    zoom: number;
    maxZoom?: number;
    minZoom?: number;
    attributionControl?: AttributionControlProps;
    zoomControl?: ZoomControlProps;
    doubleClickZoom?: boolean;
    scrollWheelZoom?: boolean;
    dragging?: boolean;
    easeLinearity?: number;
}
export interface FaqDataItem {
    id: number;
    mdClass?: number;
    title: string;
    paragraph: string;
    icon: keyof typeof Icon;
};

interface AccordionCardItems {
    id: number;
    title: string;
    paragraph: string
}
export interface AccordionCardType {
    item: AccordionCardItems;
}

interface FaqNavigationItemType {
    id: number;
    text: string;
    icon: keyof typeof Icon;
    badge?: number;
}

export interface FaqNavigationProps {
    id: number;
    child: FaqNavigationItemType[];
}

export interface LatestUpdatesDataType {
    id: number;
    icon: keyof typeof Icon;
    anchor?: string;
    title: string;
    time: string;
    name?: string;
}

interface ArticleChildItem {
    id: number;
    colClass: string;
    icon: keyof typeof Icon;
    title: string;
    text: string;
}

export interface LatestArticlesVideosData {
    id: number;
    colClass?: string;
    child: ArticleChildItem[];
};

interface CheckboxItem {
    id: number;
    type: string;
    text: string;
    name?: string;
    check?: string;
}

export interface CourseCheckboxProps {
    id: number;
    title: string;
    child: CheckboxItem[];
}

interface CommentItemType {
    id: number;
    src: string;
    name?: string;
    paragraph?: string;
}

export interface CommentSectionProp {
    socialComment?: boolean;
    colClass: string;
    item: CommentItemType;
}
