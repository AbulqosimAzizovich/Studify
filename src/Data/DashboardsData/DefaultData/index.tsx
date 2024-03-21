import { ApexOptions } from "apexcharts";
import { CommonImageProps, CustomBadgeProps, CustomOrderDateProps, CustomerCardDataProps, LeadsStatusProps, RecentOrderTableColumns } from "../../../Types/DashboardsType";
import { Badges, H6, Image } from "../../../AbstractElements";
import { Link } from "react-router-dom";
import { TableColumn } from "react-data-table-component";
import { FormGroup, Input, Label } from "reactstrap";
import { dynamicImage } from "../../../Utils";

export const monthlyDropdownList = ['Weekly', 'Monthly', 'Yearly'];

//charts
const incomeOption: ApexOptions = {
    series: [
        {
            name: 'series2',
            data: [15, 25, 20, 35, 60, 30, 20, 30, 20, 35, 25, 20],
        },
    ],
    colors: ["var(--theme-default)", "#FFA941"],
    chart: {
        height: 95,
        type: 'bar',
        sparkline: {
            enabled: true,
        },
    },
    tooltip: {
        enabled: false
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: 'smooth',
    },
    plotOptions: {
        bar: {
            borderRadius: 3,
            distributed: true,
            columnWidth: "50%",
            barHeight: '38%',
            dataLabels: {
                position: 'top',
            },
        }
    },
    responsive: [
        {
            breakpoint: 1700,
            options: {
                chart: {
                    height: 86,
                },
            },
        },
        {
            breakpoint: 1699,
            options: {
                chart: {
                    height: 95,
                },
            },
        },
        {
            breakpoint: 1460,
            options: {
                grid: {
                    padding: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 5,
                    },
                },
            },
        },
        {
            breakpoint: 376,
            options: {
                chart: {
                    height: 50,
                },
            },
        },
    ],
};

const expenseOptions: ApexOptions = {
    series: [{
        name: "Desktops",
        data: [50, 50, 50, 25, 25, 25, 2, 2, 2, 25, 25, 25, 62, 62, 62, 35, 35, 35, 66, 66],
    }],
    chart: {
        height: 100,
        type: 'area',
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
            color: '#7366ff',
            opacity: 0.2,
        },
    },
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.5,
            opacityTo: 0.1,
            stops: [0, 90, 100]
        }
    },
    tooltip: {
        enabled: false
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
            fillColor: '#7366ff',
            strokeColor: '#fff',
            size: 5,
            shape: "circle"
        }],
    }
};

export const productOptions: ApexOptions = {
    series: [{
        data: [10, 50, 80, 120, 160, 160]
    }],
    chart: {
        type: 'area',
        height: 350,
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false,
        },
        dropShadow: {
            enabled: true,
            top: 5,
            left: 0,
            blur: 2,
            color: '#7366ff',
            opacity: 0.2,
        },
    },
    xaxis: {
        categories: ['Mac', 'iPhone', 'Laptop', 'Watch', 'AirPords', 'Headphone'],
    },
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.5,
            opacityTo: 0.1,
            stops: [0, 90, 100]
        }
    },
    stroke: {
        curve: 'stepline',
    },
    dataLabels: {
        enabled: false
    },
    yaxis: {
        show: false,
    },
    grid: {
        show: false,
    },
    markers: {
        discrete: [{
            seriesIndex: 0,
            dataPointIndex: 3,
            fillColor: "#E16371",
            strokeColor: '#E16371',
            size: 6,
            shape: "circle"
        }],
    },
    responsive: [{
        breakpoint: 1440,
        options: {
            chart: {
                height: 330,
            },
        },
    }],
};

export const salesOptions: ApexOptions = {
    series: [65, 55, 40, 30],
    chart: {
        type: 'donut',
        height: 300,
    },
    plotOptions: {
        pie: {
            expandOnClick: false,
            startAngle: -90,
            endAngle: 90,
            offsetY: 10,
            donut: {
                size: "75%",
                labels: {
                    show: true,
                    name: {
                        offsetY: -10,
                    },
                    value: {
                        offsetY: -50,
                    },
                    total: {
                        show: true,
                        fontSize: "14px",
                        fontFamily: "Outfit",
                        fontWeight: 400,
                        label: "Total",
                        color: "#9B9B9B",
                        formatter: (w) => "45.764",
                    },
                },
            },
            customScale: 1,
            offsetX: 0,
        },
    },
    grid: {
        padding: {
            bottom: -120
        }
    },
    colors: ['#307EF3', '#EBA31D', "#DC3545", "#53a653"],
    responsive: [{
        breakpoint: 1660,
        options: {
            chart: {
                height: 280,
            },
        },
    }, {
        breakpoint: 1500,
        options: {
            chart: {
                height: 250,
            },
        },
    }
    ],
    legend: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
};

//datas

export const totalEarningCardsData = [
    {
        id: 1,
        title: 'Total Earning',
        rate: '20.790',
        lastWeek: 16.06,
        chart: {
            ...incomeOption,
            series: incomeOption.series,
            type: incomeOption.chart?.type,
        },
    },
    {
        id: 2,
        title: 'Total Expense',
        rate: '4683.90',
        lastWeek: 10.34,
        chart: {
            ...expenseOptions,
            series: expenseOptions.series,
            type: expenseOptions.chart?.type
        }
    },
];

export const newsUpdateData = [
    {
        id: 1,
        src: '1.jpg',
        title: 'Indonesian Navy Lauds Mental Perseverance of Teenager...',
        spanText: "Today's News Headlines, Breaking...",
        time: 10
    },
    {
        id: 2,
        src: '2.jpg',
        title: "Why now may be the 'golden age' for Southeast asia start-ups...",
        spanText: "Check out the latest news from...",
        time: 2
    },
    {
        id: 3,
        src: '3.jpg',
        title: "China's renewed crypto crackdown wipes nearly $400...",
        spanText: "Technology and indian business news...",
        time: 14
    },
    {
        id: 4,
        src: '4.jpg',
        title: 'Indonesian Navy Lauds Mental Perseverance of Teenager...',
        spanText: "Today's News Headlines, Breaking...",
        time: 17
    }
];

const CommonImage = ({ src, name, span }: CommonImageProps) => (
    <div className="d-flex">
        <div className="flex-shrink-0"><Image src={dynamicImage(`dashboard/user/${src}`)} alt="" /></div>
        <div className="flex-grow-1 ms-2">
            <Link to={`${process.env.PUBLIC_URL}/applications/users/user-profile`}>
                <H6>{name}</H6><span className="text-muted">{span}</span>
            </Link>
        </div>
    </div>
);

const CustomBadge = ({ color, text }: CustomBadgeProps) => (
    <Badges color={`light-${color}`} pill className={`txt-${color}`}>{text}</Badges>
)

const CustomOrderDate = ({ date, time }: CustomOrderDateProps) => (
    <><H6>{date}</H6><span>{time}</span></>
)

export const recentOrderTableData: RecentOrderTableColumns[] = [
    {
        id: 1,
        image: '1.png',
        span: '#Gh3649K',
        customerName: "Elle Amberson",
        orderTime: '02:45 PM',
        orderDate: '15 Nov, 2022',
        itemsName: "Wood Chair",
        price: "$152",
        statusColor: 'primary',
        statusText: 'Paid',
    },
    {
        id: 2,
        image: '2.png',
        span: '#A5647KB',
        customerName: "Anna Catmire",
        orderTime: '01:24 PM',
        orderDate: '25 Nov, 2022',
        itemsName: "Men Sneakers",
        price: "$652",
        statusColor: 'secondary',
        statusText: 'Wait',
    },
    {
        id: 3,
        image: '3.png',
        span: '#KO093M',
        customerName: "Laura Dagson",
        orderTime: '12:34 PM',
        orderDate: '26 Nov, 2022',
        itemsName: "Tree Stylish",
        price: "$256",
        statusColor: 'primary',
        statusText: 'Paid',
    },
    {
        id: 4,
        image: '4.png',
        span: '#KMG403',
        customerName: "Rachel Green",
        orderTime: '10:27 PM',
        orderDate: '28 Nov, 2022',
        itemsName: "Mi Watch",
        price: "$659",
        statusColor: 'danger',
        statusText: 'Due',
    },
]

export const recentOrderTableColumns: TableColumn<RecentOrderTableColumns>[] = [
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
        // width: '7%'
    },
    {
        name: "Customers name",
        selector: (row) => row.customerName,
        sortable: true,
        cell: (row) => <CommonImage src={row.image} name={row.customerName} span={row.span} />,
        // width: '25%'
    },
    {
        name: "Order Date",
        selector: (row) => row.orderDate,
        sortable: true,
        cell: (row) => <CustomOrderDate date={row.orderDate} time={row.orderTime} />,
    },
    {
        name: "Items Name",
        selector: (row) => row.itemsName,
        sortable: true,
    },
    {
        name: "Price",
        selector: (row) => row.price,
        sortable: true,
    },
    {
        name: "Status",
        selector: (row) => row.statusText,
        sortable: true,
        cell: (row) => <CustomBadge color={row.statusColor} text={row.statusText} />,
    },
];

export const customerCardData: CustomerCardDataProps[] = [
    {
        id: 1,
        divClass: 'col-xxl-3 col-xl-50 col-sm-6 proorder-xl-2',
        color: 'primary',
        title: 'Customers',
        rate: '1.485',
        icon: 'male',
        percent: 4.6
    },
    {
        id: 2,
        divClass: 'col-xxl-3 col-xl-50 col-sm-6 proorder-xl-3',
        bodyClass: 'money',
        color: 'secondary',
        title: 'Revenue',
        rate: '$5.873',
        icon: 'money',
        percent: 3.10
    },
    {
        id: 3,
        divClass: 'col-xxl-3 col-xl-50 col-sm-6 proorder-xl-4',
        bodyClass: 'profit',
        color: 'danger',
        title: 'Profit',
        rate: '70%',
        icon: 'profile',
        percent: 2.3
    },
    {
        id: 4,
        divClass: 'col-xxl-3 col-xl-50 col-sm-6 proorder-xl-5',
        bodyClass: 'invoice-profit',
        color: 'success',
        title: 'Invoices',
        rate: '1.256',
        icon: 'invoice',
        percent: 6.3
    }
];

export const reviewSliderData = [
    {
        id: 1,
        src: '14.png',
        title: 'John Connor',
        rate: 4.3,
        rate2: 136,
    },
    {
        id: 2,
        src: '20.png',
        title: 'Paul Miller',
        rate: 5.6,
        rate2: 120,
    },
    {
        id: 1,
        src: '21.png',
        title: 'Alen Lee',
        rate: 6.3,
        rate2: 140,
    },
];

export const reviewSliderOptions = {
    dots: true,
    infinite: true,
    speed: 500,
    AutoPlay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    pauseOnHover: true
};

export const salesOverviewOptions: ApexOptions = {
    series: [{
        name: 'TEAM A',
        type: 'area',
        data: [183, 175, 170, 178, 185, 171, 177, 185, 170, 180, 175, 170]
    }, {
        name: 'TEAM B',
        type: 'line',
        data: [183, 193, 170, 182, 200, 180, 185, 178, 165, 175, 190, 190],
    }],
    chart: {
        height: 288,
        type: 'line',
        stacked: false,
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false,
        },
    },
    stroke: {
        curve: 'smooth',
        width: [3, 3],
        dashArray: [0, 4]
    },
    grid: {
        show: true,
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
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',],
    markers: {
        discrete: [{
            seriesIndex: 0,
            dataPointIndex: 2,
            fillColor: "#fff",
            strokeColor: '#000',
            size: 7,
            shape: "circle"
        },
        {
            seriesIndex: 0,
            dataPointIndex: 4,
            fillColor: "#fff",
            strokeColor: '#000',
            size: 7,
            shape: "circle"
        },
        {
            seriesIndex: 0,
            dataPointIndex: 6,
            fillColor: "#fff",
            strokeColor: '#000',
            size: 7,
            shape: "circle"
        },
        {
            seriesIndex: 0,
            dataPointIndex: 9,
            fillColor: "#fff",
            strokeColor: '#000',
            size: 7,
            shape: "circle"
        },
        ],
    },
    tooltip: {
        shared: true,
        intersect: false,
        y: {
            formatter: function (y) {
                if (typeof y !== "undefined") {
                    return y.toFixed(0) + " points";
                }
                return y;
            }
        }
    },
    legend: {
        show: false,
    },
    colors: ["#307EF3", '#EAEAEA'],
    fill: {
        type: ['gradient', 'solid', 'gradient'],
        gradient: {
            shade: 'light',
            type: "vertical",
            shadeIntensity: 1,
            gradientToColors: ["#307EF3", '#fff5f7', "#307EF3"],
            inverseColors: true,
            opacityFrom: 0.4,
            opacityTo: 0,
            stops: [0, 100, 100, 100],
        }
    },
    xaxis: {
        labels: {
            style: {
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 500,
                colors: '#8D8D8D',
            },
        },
        axisBorder: {
            show: false
        },
    },
    yaxis: {
        labels: {
            show: false
        },
    },
    responsive: [{
        breakpoint: 1440,
        options: {
            chart: {
                height: 220
            },
        },
    },
    ]
};

export const activeTasksData = [
    {
        id: 1,
        title: 'Regina Cooper',
        text: 'Create userflow social application design'
    },
    {
        id: 2,
        title: 'Install Appointment',
        text: 'Homepage design for slimmuch product'
    },
    {
        id: 3,
        title: 'Regina Cooper',
        text: 'Interactive prototype design - web design'
    },
    {
        id: 4,
        title: 'Regina Cooper',
        text: 'Create Application design for topbuzz'
    }
]

export const totalInvestmentData = [
    { text: 'Total', rate: ' 5,8272' },
    { text: 'Monthly', rate: ' 6,2456' },
    { text: 'Daily', rate: ' 5,8704' },
];

export const investmentOptions: ApexOptions = {
    series: [100, 10, 30, 40],
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
        breakpoint: 1500,
        options: {
            chart: {
                height: 180
            },
        },
    }, {
        breakpoint: 1441,
        options: {
            chart: {
                height: 200
            },
        },
    },
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
                        formatter: () => "$ 9,8373",
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
    colors: ["#307EF3", '#F3F3F3', '#DC3545', "#EBA31D"],
};

export const leadsStatusData: LeadsStatusProps[] = [
    {
        id: 1,
        child: [
            { id: 1, text: 'Customers' },
            { id: 2, text: 'Lena Smith', class: 'border-3 b-l-primary' },
            { id: 3, text: 'Nicol Green', class: 'border-3 b-l-secondary' },
            { id: 4, text: 'Tom Taylor', class: 'border-3 b-l-danger mb-0' },
        ]
    },
    {
        id: 2,
        child: [
            { id: 1, text: 'Last Contacted' },
            { id: 2, text: 'June 14, 2023' },
            { id: 3, text: 'June 16, 2023' },
            { id: 4, text: 'June 18, 2023', class: 'mb-0' },
        ]
    },
    {
        id: 3,
        child: [
            { id: 1, text: 'Sales Rep' },
            { id: 2, image: '2.png', text: 'Paul Miller' },
            { id: 3, image: '1.png', text: 'Alen Lee' },
            { id: 4, class: 'mb-0', image: '3.png', text: 'Lucy White' },
        ]
    },
    {
        id: 4,
        child: [
            { id: 1, text: 'Status' },
            { id: 2, class: "bg-light-primary font-primary", text: 'Deal Won' },
            { id: 3, class: "bg-light-secondary font-secondary", text: 'Intro Call' },
            { id: 4, class: "bg-light-danger font-danger mb-0", text: 'Stuck' },
        ]
    },
    {
        id: 5,
        child: [
            { id: 1, text: 'Deal Value' },
            { id: 2, text: '$ 200.2k' },
            { id: 3, text: '$210k' },
            { id: 4, class: "mb-0", text: '$70k' },
        ]
    }
];

export const notificationCardData = [
    {
        id: 1,
        image: '15.png',
        title: 'Paul Svensson invite you Prototyping',
        text: '05 April, 2023 | 03:00 PM'
    },
    {
        id: 2,
        image: '16.png',
        title: 'Adam Nolan mentioned you in UX Basics',
        text: '04 April, 2023 | 05:00 PM'
    },
    {
        id: 3,
        image: '17.png',
        title: 'Paul Morgan Commented in UI Design',
        text: '05 April, 2023 | 02:00 PM'
    },
    {
        id: 4,
        image: '18.png',
        title: 'Robert Babinski Said nothing important',
        text: '01 April, 2023 | 06:00 PM'
    },
];
