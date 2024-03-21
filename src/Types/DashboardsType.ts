import { ApexOptions } from "apexcharts";
import { EventApi, ViewApi } from "@fullcalendar/core";
import { AttributionControlProps, ZoomControlProps } from "react-leaflet";

export interface CustomerCardDataProps {
    id: number;
    color: string;
    divClass: string;
    title: string;
    rate: string;
    icon: string;
    percent: number;
    bodyClass?: string;
}

export interface CustomerCardMainProp {
    data: CustomerCardDataProps[];
}

export interface TotalEarningCardProp {
    colClass?: string;
}

export interface CommonHeaderWithDropdownProps {
    heading?: string;
    dropDownList: string[];
    headerClass?: string;
    dropDownTitle?: string;
    headingClass?: string;
    caret?: boolean;
    dropDownClass?: string;
    dropDownIcon?: boolean;
}

interface SeriesItem {
    name: string;
    data: number[];
}

interface ChartItems {
    series: SeriesItem[];
    height?: number | undefined;
}

export interface OnlineOrderCardTypes {
    id: number;
    colClass: string;
    headerClass: string;
    color: string;
    icon: string;
    arrowColor: string;
    percent: string;
    text: string;
    rate: string;
    chart: ChartItems;
    chartClass?: string;
}

export interface OnlineOrderMainProp {
    data: OnlineOrderCardTypes[];
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

export interface EcommerceSearchBarProp {
    data: RecentOrderTableProps[];
    setFilteredData: React.Dispatch<React.SetStateAction<RecentOrderTableProps[]>>;
}

export interface CustomComponentProps {
    src?: string;
    name?: string;
    text?: string;
    color?: string;
    value?: number;
}

export interface RecentOrderTableProps {
    [key: string]: string | number;
    id: number;
    productImage: string;
    productName: string;
    productCode: string;
    customerName: string;
    customerCode: string;
    date: string;
    statusColor: string
    statusText: string;
    total: string
}

interface CommentItems {
    id: number;
    icon: string;
    spanText: string;
}

interface CustomerItems {
    id: number;
    image: string;
}

interface WebCardData {
    id: number;
    divClass?: string;
    color: string;
    icon: string;
    title: string;
    text: string;
    comment: CommentItems[];
    customers: CustomerItems[];
    progressValue: number;
}

export interface WebCardProps {
    item: WebCardData;
}

export interface ProjectSummaryTypes {
    [key: string]: string | number;
    id: number;
    memberImage: string;
    memberName: string;
    designation: string;
    projectType: string;
    startDate: string;
    progressValue: number;
    color: string;
    statusText: string;
}

export interface ProjectSearchBarProp {
    data: ProjectSummaryTypes[];
    setFilteredData: React.Dispatch<React.SetStateAction<ProjectSummaryTypes[]>>;
}

export interface CustomApexOptions extends ApexOptions {
    dropShadow: {
        enabled: boolean;
        top: number;
        left: number;
        bottom: number;
        blur: number;
        color: string;
        opacity: number;
    };
}

interface YRangeItem {
    min: number;
    max: number;
};

export interface GenerateDataProps {
    baseval: number;
    count: number;
    yrange: YRangeItem;
};

export interface EventClickProp {
    el: HTMLElement;
    event: EventApi;
    jsEvent: MouseEvent;
    view: ViewApi;
}

export interface SearchBarProps {
    data: RecentOrderTableColumns[];
    setFilteredData: React.Dispatch<React.SetStateAction<RecentOrderTableColumns[]>>;
}

export interface RecentOrderTableColumns {
    [key: string]: string | number;
    id: number;
    image: string;
    span: string;
    customerName: string;
    orderTime: string;
    orderDate: string;
    itemsName: string;
    price: string;
    statusColor: string;
    statusText: string;
}

export interface CommonImageProps {
    src: string;
    name: string;
    span: string;
}

export interface CustomBadgeProps {
    color: string;
    text: string;
}

export interface CustomOrderDateProps {
    date: string;
    time: string;
}

export interface CustomerCardDataProps {
    id: number;
    color: string;
    divClass: string;
    title: string;
    rate: string;
    icon: string;
    percent: number;
    bodyClass?: string;
}

export interface CustomerCardMainProp {
    data: CustomerCardDataProps[];
}

interface LeadsStatusDataItem {
    id: number;
    text?: string;
    class?: string;
    image?: string;
}

export interface LeadsStatusProps {
    id: number;
    child: LeadsStatusDataItem[];
};
