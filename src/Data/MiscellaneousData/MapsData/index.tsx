import { CustomMapProps, Position } from "../../../Types/MiscellaneousType";

export const containerStyle = {
    height: "500px",
};
export const defaultCenter = {
    lat: -3.745,
    lng: -38.523,
};

export const worldMapSubheading = [
    {
        text: "Below Map is displaying the world map.",
    },
];

export const usaMapSubHeading = [
    {
        text: "Below Map is displaying the USA map.",
    },
];
export const indiaMapSubHeading = [
    {
        text: "Below Map is displaying the India map.",
    },
];

export const australiaMapSubHeading = [
    {
        text: "Below Map is displaying the Australia map.",
    },
];

const worldPosition: Position = { lat: 50, lng: 10 };
const usaPosition: Position = { lat: 37.0902, lng: -95.7129 }
const indiaPosition: Position = { lat: 20.5937, lng: 78.9629 }

export const worldMapProps: CustomMapProps = {
    center: worldPosition,
    zoom: 2,
    maxZoom: 10,
    attributionControl: true,
    zoomControl: true,
    doubleClickZoom: true,
    scrollWheelZoom: true,
    dragging: true,
    easeLinearity: 0.35,
};

export const usaMapProps: CustomMapProps = {
    center: usaPosition,
    zoom: 4,
    minZoom: 2,
    maxZoom: 10
}

export const indiaMapProps: CustomMapProps = {
    center: indiaPosition,
    zoom: 5,
}

export const centerAustralia: Position = { lat: -25.2744, lng: 130.7751 };

export const australiaMapProps: CustomMapProps = {
    center: centerAustralia,
    zoom: 4,
    zoomControl: true,
    doubleClickZoom: true,
    scrollWheelZoom: true,
    dragging: true,
}