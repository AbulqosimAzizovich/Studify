import { CustomerCardDataProps, OnlineOrderCardTypes } from "../../../Types/DashboardsType";

//charts
export const onlineOptions = {
    series: [
        {
            name: "Activity",
            data: [42, 44, 55, 66, 55, 86, 52, 44, 44, 66, 55, 86, 52, 44, 44],
        },
    ],
    chart: {
        height: 130,
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
        height: 172,
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

//datas
export const onlineOrderCardData: OnlineOrderCardTypes[] = [
    {
        id: 1,
        colClass: 'col-xl-30',
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
        colClass: 'col-xl-33 offline-card',
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
]

export const customerCardData: CustomerCardDataProps[] = [
    {
        id: 1,
        divClass: 'col-xl-12 col-lg-12 col-md-12 col-sm-6',
        color: 'primary',
        title: 'Customers',
        rate: '1.485',
        icon: 'male',
        percent: 4.6
    },
    {
        id: 2,
        divClass: 'col-xl-12 col-lg-12 col-md-12 col-sm-6',
        bodyClass: 'money',
        color: 'secondary',
        title: 'Revenue',
        rate: '$5.873',
        icon: 'money',
        percent: 3.10
    },
];
