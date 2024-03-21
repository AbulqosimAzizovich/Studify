import { Link } from "react-router-dom";
import { ApexOptions } from "apexcharts";
import { Badges, H6, Image } from "../../../AbstractElements";
import { CustomComponentProps, CustomMapProps, OnlineOrderCardTypes, Position, RecentOrderTableProps } from "../../../Types/DashboardsType";
import { FormGroup, Input, Label } from "reactstrap";
import { dynamicImage } from "../../../Utils";
import { TableColumn } from "react-data-table-component";

export const monthlyDropdownList = ['Weekly', 'Monthly', 'Yearly'];

//charts
export const onlineOptions = {
    series: [
        {
            name: "Activity",
            data: [42, 44, 55, 66, 55, 86, 52, 44, 44, 66, 55, 86, 52, 44, 44],
        },
    ],
    chart: {
        height: 100,
        type: "bar",
        toolbar: {
            show: false,
        },
        sparkline: {
            enabled: true,
        },
    },
    plotOptions: {
        bar: {
            distributed: true,
            borderRadius: 3,
            columnWidth: "40%",
        },
    },
    dataLabels: {
        enabled: false,
    },
    grid: {
        show: false,
    },
    xaxis: {
        labels: {
            show: false
        },
    },
    legend: {
        show: false,
    },
    yaxis: {
        labels: {
            show: false
        },
    },
    colors: ['#d6e5fd', '#d6e5fd', '#d6e5fd', '#d6e5fd', '#d6e5fd', "#307EF3", '#d6e5fd', '#d6e5fd', '#d6e5fd', '#d6e5fd', '#d6e5fd', '#d6e5fd', '#d6e5fd', '#d6e5fd', '#d6e5fd'],
};

export const offlineOptions = {
    series: [{
        name: "Desktops",
        data: [50, 50, 50, 25, 25, 25, 2, 2, 2, 25, 25, 25, 62, 62, 62, 35, 35, 35, 66, 66],
    }],
    chart: {
        type: 'area',
        offsetY: 30,
        height: 140,
        zoom: {
            enabled: false
        },
        toolbar: {
            show: false,
        },
        dropShadow: {
            enabled: true,
            top: 5,
            left: 0,
            blur: 2,
            color: "#EBA31D",
            opacity: 0.2,
        },
    },
    colors: ["#EBA31D"],
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.5,
            opacityTo: 0.1,
            stops: [0, 90, 100]
        }
    },
    dataLabels: {
        enabled: false
    },
    grid: {
        show: false,
    },
    xaxis: {
        labels: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    yaxis: {
        show: false,
    },
    stroke: {
        curve: 'straight',
        width: 2,
    },
    markers: {
        discrete: [{
            seriesIndex: 0,
            dataPointIndex: 12,
            fillColor: "#EBA31D",
            strokeColor: '#fff',
            size: 5,
            shape: "circle"
        }],
    },
    responsive: [{
        breakpoint: 1661,
        options: {
            chart: {
                height: 140
            },
        },
    }
    ],
};

export const revenueOptions = {
    series: [{
        name: "Desktops",
        data: [15, 14, 11, 20, 10, 15, 11],
    }],
    chart: {
        type: 'area',
        height: 120,
        offsetY: 10,
        zoom: {
            enabled: false
        },
        toolbar: {
            show: false,
        },
        dropShadow: {
            enabled: true,
            top: 5,
            left: 0,
            blur: 2,
            color: '#DC3545',
            opacity: 0.2,
        },
    },
    colors: ['#DC3545'],
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.6,
            opacityTo: 0.2,
            stops: [0, 100, 100]
        }
    },
    dataLabels: {
        enabled: false
    },
    grid: {
        show: false,
    },
    xaxis: {
        labels: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    yaxis: {
        show: false,
    },
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    markers: {
        discrete: [{
            seriesIndex: 0,
            dataPointIndex: 3,
            fillColor: "#DC3545",
            strokeColor: "#fff",
            size: 6,
            shape: "circle"
        },
        ],
    },
};

export const categoriesoptions: ApexOptions = {
    series: [52, 35, 15, 45],
    chart: {
        type: 'donut',
        height: 200,
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        show: false
    },
    responsive: [{
        breakpoint: 1700,
        options: {
            chart: {
                height: 150
            },
        },
    }, {
        breakpoint: 1441,
        options: {
            chart: {
                height: 205
            },
        },
    }, {
        breakpoint: 421,
        options: {
            chart: {
                height: 170
            },
        },
    }
    ],
    plotOptions: {
        pie: {
            expandOnClick: false,
            donut: {
                size: "70%",
                labels: {
                    show: true,
                    value: {
                        offsetY: 5,
                    },
                    total: {
                        show: true,
                        fontSize: "14px",
                        color: "#9B9B9B",
                        fontFamily: "Outfit', sans-serif",
                        fontWeight: 400,
                        label: "Total",
                        formatter: () => "60%",
                    },
                },
            },
        },
    },
    yaxis: {
        labels: {
            formatter: function (val) {
                return val / 100 + "$";
            },
        },
    },
    colors: ["#307EF3", '#DC3545', '#F3F3F3', "#EBA31D"],
};

export const earnedOptions: ApexOptions = {
    series: [{
        name: "Desktops",
        data: [50, 50, 50, 25, 25, 25, 2, 2, 2, 25, 25, 25, 62, 62],
    }],
    chart: {
        type: 'area',
        height: 200,
        zoom: {
            enabled: false
        },
        toolbar: {
            show: false,
        },
        dropShadow: {
            enabled: true,
            top: 5,
            left: 0,
            blur: 2,
            color: "#307EF3",
            opacity: 0.2,
        },
    },
    colors: ["#307EF3"],
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.6,
            opacityTo: 0.2,
            stops: [0, 100, 100]
        }
    },
    dataLabels: {
        enabled: false
    },
    grid: {
        show: false,
    },
    xaxis: {
        labels: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    yaxis: {
        show: false,
    },
    stroke: {
        curve: 'smooth',
        width: 2,
    },
};

export const totalProjectOptions: ApexOptions = {
    series: [{
        name: 'Web App Design',
        data: [150, 100, 100, 100, 70, 70, 70, 270, 50, 100]
    }, {
        name: 'Website Design',
        data: [320, 210, 290, 200, 230, 230, 230, 350, 230, 300]
    }, {
        name: 'App Design',
        data: [150, 165, 165, 165, 280, 155, 155, 140, 170, 130]
    }],
    colors: ["#307EF3", '#78A6ED', '#4F5875'],
    chart: {
        type: 'bar',
        height: 320,
        stacked: true,
        toolbar: {
            show: false,
            tools: {
                download: false,
            }
        },
        zoom: {
            enabled: true
        }
    },
    responsive: [{
        breakpoint: 1661,
        options: {
            chart: {
                height: 340
            },
        },
    }],
    grid: {
        strokeDashArray: 3,
        position: "back",
        row: {
            opacity: 0.5,
        },
        column: {
            opacity: 0.5,
        },
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '20%',
        },
    },
    dataLabels: {
        enabled: false,
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct'],
        labels: {
            style: {
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 500,
                colors: '#8D8D8D',
            },
        },
    },
    yaxis: {
        labels: {
            style: {
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 500,
                colors: '#8D8D8D',
            },
        },
    },
    legend: {
        show: false,
    },
    fill: {
        opacity: 1
    }
};

export const monthlyGrowthOptions: ApexOptions = {
    series: [{
        name: 'Growth',
        data: [0, 14, 5, 20, 14, 30]
    }],
    chart: {
        height: 120,
        type: 'line',
        stacked: true,
        offsetY: 40,
        toolbar: {
            show: false
        },
    },
    grid: {
        show: false,
        borderColor: '#000000',
        strokeDashArray: 0,
        position: 'back',
        xaxis: {
            lines: {
                show: false,
            },
        },
        yaxis: {
            lines: {
                show: false,
            },
        },
    },
    colors: ["#307EF3"],
    stroke: {
        width: 3,
        curve: 'smooth'
    },
    xaxis: {
        labels: {
            show: false
        },
    },
    yaxis: {
        min: -10,
        max: 40,
        labels: {
            show: false
        }
    },
    markers: {
        discrete: [{
            seriesIndex: 0,
            dataPointIndex: 0,
            fillColor: "#307EF3",
            strokeColor: "#307EF3",
            size: 4,
            shape: "circle"
        },
        {
            seriesIndex: 0,
            dataPointIndex: 1,
            fillColor: "#307EF3",
            strokeColor: "#307EF3",
            size: 4,
            shape: "circle"
        },
        {
            seriesIndex: 0,
            dataPointIndex: 2,
            fillColor: "#307EF3",
            strokeColor: "#307EF3",
            size: 4,
            shape: "circle"
        },
        {
            seriesIndex: 0,
            dataPointIndex: 3,
            fillColor: "#307EF3",
            strokeColor: "#307EF3",
            size: 4,
            shape: "circle"
        },
        {
            seriesIndex: 0,
            dataPointIndex: 4,
            fillColor: "#307EF3",
            strokeColor: "#307EF3",
            size: 4,
            shape: "circle"
        },
        {
            seriesIndex: 0,
            dataPointIndex: 5,
            fillColor: "#fff",
            strokeColor: "#307EF3",
            size: 5,
            shape: "circle"
        },
        ],
    },
};

//datas
export const onlineOrderCardData: OnlineOrderCardTypes[] = [
    {
        id: 1,
        colClass: 'col-xl-33 ps-0',
        headerClass: 'pb-0',
        color: 'primary',
        icon: 'basket',
        arrowColor: 'danger',
        percent: '-6.3',
        text: 'Online Order',
        rate: '16,2873',
        chart: {
            ...onlineOptions,
            series: onlineOptions.series,
            height: onlineOptions.chart?.height
        },
    },
    {
        id: 2,
        colClass: 'col-xl-33 pedding-sm',
        headerClass: 'offline-order',
        color: 'secondary',
        icon: 'delivery',
        arrowColor: 'success',
        percent: '+8.3',
        text: 'Offline Order',
        rate: '62,5461',
        chart: {
            ...offlineOptions,
            series: offlineOptions.series,
            height: offlineOptions.chart?.height
        },
        chartClass: 'offline-chart'
    },
    {
        id: 3,
        colClass: 'col-xl-33 pedding-end pedding-sm-start pedding-sm',
        headerClass: 'revenue-order pb-0',
        color: 'danger',
        icon: 'increased',
        arrowColor: 'danger',
        percent: '-3.5',
        text: 'Total Revenue',
        rate: '45,9561',
        chart: {
            ...revenueOptions,
            series: revenueOptions.series,
            height: revenueOptions.chart?.height
        },
        chartClass: 'revenue'
    },
];

export const saleTopCountriesData = [
    {
        id: 1,
        child: [
            {
                id: 1,
                title: 'China',
                percent: 90
            },
            {
                id: 2,
                title: 'Hong Kong',
                percent: 70
            }
        ]
    },
    {
        id: 2,
        child: [
            {
                id: 1,
                title: 'Great Britain',
                percent: 60
            },
            {
                id: 2,
                class: 'me-3',
                title: 'Australia',
                percent: 50
            }
        ]
    }
]

const worldPosition: Position = { lat: 50, lng: 10 };

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

function CustomProductName({ src, name, text }: CustomComponentProps) {
    return (
        <div className="d-flex">
            <div className="flex-shrink-0">
                <Image src={dynamicImage(`dashboard-2/product/${src}`)} alt="" />
            </div>
            <div className="flex-grow-1 ms-2">
                <Link to={`${process.env.PUBLIC_URL}/applications/ecommerce/product-list`}>
                    <H6>{name}</H6><span>{text}</span>
                </Link>
            </div>
        </div>
    )
};
function CustomCustomerName({ name, text }: CustomComponentProps) {
    return (
        <><H6>{name}</H6><span>{text}</span></>
    )
}
export function CustomBadge({ color, text }: CustomComponentProps) {
    return (
        <Badges color={`light-${color}`} className={`txt-${color}`} pill>{text}</Badges>
    )
}
export const recentOrderData: RecentOrderTableProps[] = [
    {
        id: 1,
        productImage: '1.png',
        productName: 'Rocky Shoes',
        productCode: '#Gh3649K',
        customerName: 'Rocky Shoes',
        customerCode: 'White Crater',
        date: 'Oct 24, 2023',
        statusColor: 'primary',
        statusText: 'Paid',
        total: '$21.56'
    },
    {
        id: 2,
        productImage: '2.png',
        productName: 'iPhone 14 Pro',
        productCode: '#A5647KB',
        customerName: 'iPhone 14 Pro',
        customerCode: 'World Bandung',
        date: 'Nov 13, 2023',
        statusColor: 'secondary',
        statusText: 'Wait',
        total: '$65.36'
    },
    {
        id: 3,
        productImage: '3.png',
        productName: 'Stylish Watches',
        productCode: '#KO093M',
        customerName: 'Stylish Watches',
        customerCode: 'Jalan Braga',
        date: 'Sep 16, 2023',
        statusColor: 'primary',
        statusText: 'Paid',
        total: '$95.48'
    },
    {
        id: 4,
        productImage: '4.png',
        productName: 'Laptop Backpack',
        productCode: '#KMG403',
        customerName: 'Rocky Shoes',
        customerCode: 'Rachel Green',
        date: 'Dec 20, 2023',
        statusColor: 'danger',
        statusText: 'Due',
        total: '$95.78'
    },
];

export const recentOrderColumn : TableColumn<RecentOrderTableProps>[] = [
    {
        name: (
            <FormGroup check>
                <Input type="checkbox" value="" />
                <Label check></Label>
            </FormGroup>),
        sortable: false,
        cell: () => {
            return (
                <FormGroup check>
                    <Input type="checkbox" value="" />
                    <Label check></Label>
                </FormGroup>
            );
        },
        width: '15px'
    },
    {
        name: "Product Name",
        selector: (row) => row.productName,
        cell: (row) => <CustomProductName src={row.productImage} name={row.productName} text={row.productCode} />,
        sortable: true,
    },
    {
        name: "Customer Name",
        selector: (row) => row.customerName,
        cell: (row) => <CustomCustomerName name={row.customerName} text={row.customerCode} />,
        sortable: true,
    },
    {
        name: "Date",
        selector: (row) => row["date"],
        sortable: true,
    },
    {
        name: "Status",
        selector: (row) => row.statusText,
        cell: (row) => <CustomBadge color={row.statusColor} text={row.statusText} />,
        sortable: true,
    },
    {
        name: "Total",
        selector: (row) => row["total"],
        sortable: true,
    },
];

export const categoriesSalesData = [
    {
        id: 1,
        color: 'primary',
        title: 'Income',
        rate: '21,654'
    },
    {
        id: 2,
        color: 'secondary',
        title: 'Visitors',
        rate: '62,842'
    },
    {
        id: 3,
        color: 'danger',
        title: 'Expense',
        rate: '37,210'
    },
];

export const orderOverviewData = [
    {
        id: 1,
        value: 40,
        text: 'Online Order',
        color: 'primary'
    },
    {
        id: 2,
        value: 60,
        text: 'Offline Order',
        color: 'secondary'
    },
    {
        id: 3,
        value: 20,
        text: 'Cash On Develery',
        color: 'danger'
    }
];

export const recentActivityData = [
    {
        id: 2,
        src: '6.png',
        dateTime: '5 hrs Ago',
        paragraph: "That is the key of this collection, being yourself.Don't be into trends."
    },
    {
        id: 3,
        dateTime: '25 Oct,2022',
    },
    {
        id: 4,
        src: '7.png',
        dateTime: '12 hrs Ago',
        paragraph: "I am no longer concerned with sensation and innovation, but with the perfection my style."
    },
    {
        id: 5,
        src: '8.png',
        dateTime: '12:00 pm',
        paragraph: "You have added new product in Clothe  text of the Printing and tyesetting industry."
    },
];

export const newCustomersTableData = [
    {
        id: 1,
        src: '9.png',
        name: 'Selena Wagner',
        mail: '@selena.oi',
        brand: 'iPhone 14 Pro',
        date: 'Oct 24, 2023',
        price: 239
    },
    {
        id: 2,
        src: '10.png',
        name: 'Walter Reuter',
        mail: '@walter.me',
        brand: 'Stylish Watches',
        date: 'Sep 16, 2023',
        price: 326
    },
    {
        id: 3,
        src: '11.png',
        name: 'Leopold Ebert',
        mail: '@larissa.gb',
        brand: 'Rocky Shoes',
        date: 'Dec 20, 2023',
        price: 985
    },
];

export const discountCardData = [
    {
        id: 1,
        brand: 'IPhone 14 Pro',
        discount: 21.45,
        price: 65.40,
        deal: 48,
        time: [
            { id: 1, digit: 28, text: 'Days' },
            { id: 2, digit: 3, text: 'Hours' },
            { id: 3, digit: 14, text: 'Min' },
            { id: 4, digit: 45, text: 'Sec' },
        ],
        image: '7.png'
    },
    {
        id: 2,
        brand: 'Apple Airpods',
        discount: 20.35,
        price: 35.43,
        deal: 38,
        time: [
            { id: 1, digit: 20, text: 'Days' },
            { id: 2, digit: 5, text: 'Hours' },
            { id: 3, digit: 30, text: 'Min' },
            { id: 4, digit: 15, text: 'Sec' },
        ],
        image: '8.png'
    },
    {
        id: 3,
        brand: 'Apple Watch Series 7',
        discount: 25.30,
        price: 45.40,
        deal: 25,
        time: [
            { id: 1, digit: 15, text: 'Days' },
            { id: 2, digit: 6, text: 'Hours' },
            { id: 3, digit: 18, text: 'Min' },
            { id: 4, digit: 30, text: 'Sec' },
        ],
        image: '9.png'
    },
];

export const discountSliderOptions = {
    dots: true,
    AutoPlay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
};
