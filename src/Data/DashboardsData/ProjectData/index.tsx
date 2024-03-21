import { Link } from "react-router-dom";
import { H6, Image, ProgressBar } from "../../../AbstractElements";
import { CustomApexOptions, CustomComponentProps, ProjectSummaryTypes, } from "../../../Types/DashboardsType";
import { dynamicImage } from "../../../Utils";
import { FormGroup, Input, Label } from "reactstrap";
import { CustomBadge } from "../ECommerceData";
import { ApexOptions } from "apexcharts";
import { TableColumn } from "react-data-table-component";

export const webCardData = [
    {
        id: 1,
        md: 6,
        color: 'primary',
        icon: 'improvement',
        title: 'Web & mobile app',
        text: 'Dribble Presentation',
        comment: [
            { id: 1, icon: 'calendar', spanText: 'June 18,2023' },
            { id: 2, icon: 'message', spanText: '18' },
            { id: 3, icon: 'link', spanText: '08' },
        ],
        customers: [
            { id: 1, image: '1.png' },
            { id: 2, image: '2.png' },
            { id: 3, image: '3.png' },
        ],
        progressValue: 70,
    },
    {
        id: 2,
        md: 6,
        divClass: 'nft-card',
        color: 'success',
        icon: 'NFT',
        title: 'NFT website design',
        text: 'Pinterest Promotion',
        comment: [
            { id: 1, icon: 'calendar', spanText: 'June 15,2023' },
            { id: 2, icon: 'message', spanText: '20' },
            { id: 3, icon: 'link', spanText: '10' },
        ],
        customers: [
            { id: 1, image: '8.png' },
            { id: 2, image: '4.png' },
            { id: 3, image: '7.png' },
        ],
        progressValue: 60,
    },
    {
        id: 3,
        md: 12,
        divClass: 'twitter-card',
        color: 'danger',
        icon: 'management',
        title: 'Project dashboard',
        text: 'Twitter Marketing',
        comment: [
            { id: 1, icon: 'calendar', spanText: 'June 25,2023' },
            { id: 2, icon: 'message', spanText: '30' },
            { id: 3, icon: 'link', spanText: '12' },
        ],
        customers: [
            { id: 1, image: '9.png' },
            { id: 2, image: '5.png' },
            { id: 3, image: '6.png' },
        ],
        progressValue: 50,
    },
];

function CustomMemberName({ src, name, text }: CustomComponentProps) {
    return (
        <div className="d-flex">
            <div className="flex-shrink-0">
                <Image src={dynamicImage(`dashboard/user/${src}`)} alt="" />
            </div>
            <div className="flex-grow-1 ms-2">
                <Link to={`${process.env.PUBLIC_URL}/applications/users/user-profile`}>
                    <H6>{name}</H6><span>{text}</span>
                </Link>
            </div>
        </div>
    )
};

function CustomProgress({ value, color }: CustomComponentProps) {
    return (
        <ProgressBar className="sm-progress-bar" style={{ width: "50%" }} value={value} color={color} />
    )
}

export const projectSummaryData: ProjectSummaryTypes[] = [
    {
        id: 1,
        memberImage: '2.png',
        memberName: 'Elle Amberson',
        designation: 'Developer',
        projectType: 'UI/UX Designer',
        startDate: 'Nov 4,2023',
        progressValue: 50,
        color: 'primary',
        statusText: 'Paid',
    },
    {
        id: 2,
        memberImage: '1.png',
        memberName: 'Anna Catmire',
        designation: 'Designer',
        projectType: 'Website Design',
        startDate: 'Feb 20,2023',
        progressValue: 50,
        color: 'secondary',
        statusText: 'Wait',
    },
    {
        id: 3,
        memberImage: '3.png',
        memberName: 'Laura Dagson',
        designation: 'Developer',
        projectType: 'Landing Page',
        startDate: 'Nov 4,2023',
        progressValue: 50,
        color: 'primary',
        statusText: 'Paid',
    },
    {
        id: 4,
        memberImage: '4.png',
        memberName: 'Rachel Green',
        designation: 'Designer',
        projectType: 'Marketing',
        startDate: 'Oct 8,2023',
        progressValue: 50,
        color: 'danger',
        statusText: 'Due',
    },
];

export const projectSummaryColumn: TableColumn<ProjectSummaryTypes>[] = [
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
        // width: '6%'
    },
    {
        name: "Member Name",
        selector: (row) => row.memberName,
        cell: (row) => <CustomMemberName src={row.memberImage} name={row.memberName} text={row.designation} />,
        sortable: true,
    },
    {
        name: "Project Type",
        selector: (row) => row["projectType"],
        sortable: true,
    },
    {
        name: "Start Date",
        selector: (row) => row["startDate"],
        sortable: true,
    },
    {
        name: "Progress",
        selector: (row) => row.progressValue,
        cell: (row) => <CustomProgress value={row.progressValue} color={row.color} />,
        sortable: true,
    },
    {
        name: "Status",
        selector: (row) => row.statusText,
        cell: (row) => <CustomBadge color={row.color} text={row.statusText} />,
        sortable: true,
    },
];

export const budgetCardData = [
    {
        id: 1,
        color: 'primary',
        icon: 'design',
        title: 'Design',
        price: ' 35,842.00'
    },
    {
        id: 2,
        color: 'secondary',
        icon: 'development',
        iconClass: 'ms-1',
        title: 'Development',
        price: ' 5,647.00'
    },
    {
        id: 3,
        color: 'danger',
        icon: 'other',
        iconClass: 'mt-2',
        title: 'Others',
        price: ' 3,237.00'
    },
];

export const todayTasksHead = [
    { name: 'Task Name' },
    { name: 'Clients' },
    { name: 'Deadline' },
];

export const todayTasksTable = [
    {
        id: 1,
        paragraph: 'Wireframes for  mobile app on rails platform',
        customers: [
            { id: 1, image: '14.png' },
            { id: 2, image: '15.png' },
            { id: 3, image: '16.png' },
        ],
        date: 'Nov 14,2023'
    },
    {
        id: 2,
        paragraph: 'Update the stakehoders with ne strategy',
        customers: [
            { id: 1, image: '17.png' },
            { id: 2, image: '3.png' },
            { id: 3, image: '7.png' },
        ],
        date: 'Apr 12,2023'
    },
    {
        id: 3,
        paragraph: 'Send key stakeholders update pricing guides',
        customers: [
            { id: 1, image: '12.png' },
            { id: 2, image: '18.png' },
            { id: 3, image: '19.png' },
        ],
        date: 'Nov 4,2023'
    },
    {
        id: 4,
        paragraph: 'Add icons sprite sheet new marketing website',
        customers: [
            { id: 1, image: '13.png' },
            { id: 2, image: '3.png' },
            { id: 3, image: '11.png' },
        ],
        date: 'Dec 20,2023'
    }
];

export const pendingProjectData = [
    {
        id: 1,
        title: '5 ',
        text: 'In Progress',
        percent: '+ 26.28',
        color: 'primary',
        icon: 'danger'
    },
    {
        id: 2,
        title: '10 ',
        text: 'Completed',
        percent: '- 46.28',
        color: 'secondary',
        icon: 'check'
    },
    {
        id: 3,
        title: '24 ',
        text: 'Total',
        percent: '+ 36.28',
        color: 'danger',
        icon: 'stroke-charts'
    }
];

export const redesignCardData = [
    {
        id: 1,
        title: 'Brooklyn Simmons',
        text: 'Redesign kripton mobile app',
        date: 'Jan 10,2023',
        iconClass: 'deadline',
        dayDate: 'Tuesday, Sep 20th 2023'
    },
    {
        id: 2,
        title: 'Anna Catmireo',
        text: 'Business app landing page',
        date: 'Dec 19,2023',
        iconClass: 'bussiness-app',
        dayDate: 'Monday, Dec 10th 2023'
    },
    {
        id: 3,
        title: 'Laurs Dargerta',
        text: 'NFT web landing page',
        date: 'Dec 19,2023',
        iconClass: 'nft-web',
        dayDate: 'Tuesday, May 20th 2023'
    }
];

export const defaultEvents = [
    {
        id: '1',
        title: 'Team Outing',
        start: new Date('2023-10-07T01:00:00'),
        end: new Date('2023-10-07T09:30:00'),
    },
    {
        id: '2',
        title: 'Design Team',
        start: new Date('2023-10-07T02:00:00'),
        end: new Date('2023-10-07T09:30:00'),
    },
];

//charts
export const budgetOptions: ApexOptions = {
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
    markers: {
        discrete: [{
            seriesIndex: 0,
            dataPointIndex: 3,
            fillColor: "#307EF3",
            strokeColor: "#fff",
            size: 6,
            shape: "circle"
        },
        ],
    },
};

export const projectOptions: CustomApexOptions = {
    series: [{
        name: 'TEAM A',
        type: 'column',
        data: [220, 0, 250, 0, 210, 0, 210, 0, 270, 0, 220, 0, 250, 0, 260, 0, 210, 0, 230]
    }, {
        name: 'TEAM B',
        type: 'area',
        data: [210, 170, 240, 160, 200, 170, 200, 150, 260, 170, 210, 170, 240, 160, 250, 140, 200, 140, 220, 220]
    }],
    chart: {
        height: 355,
        type: 'area',
        stacked: false,
        toolbar: {
            show: false,
        }
    },
    stroke: {
        width: [0, 2, 5],
        curve: 'stepline'
    },
    plotOptions: {
        bar: {
            columnWidth: '100px'
        }
    },
    colors: ['#bebebe', "#307EF3"],
    dropShadow: {
        enabled: true,
        top: 5,
        left: 6,
        bottom: 5,
        blur: 2,
        color: "#307EF3",
        opacity: 0.5,
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
    grid: {
        show: true,
        strokeDashArray: 3,
        xaxis: {
            lines: {
                show: false,
            }
        },
        yaxis: {
            lines: {
                show: true,
            }
        },
    },
    xaxis: {
        categories: ["Jan", "", "feb", "", "Mar", "", "Apr", "", "May", "", "Jun", "", "July", "", "Aug", "", "Sep", "", "Oct", ""],
        labels: {
            style: {
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 500,
                colors: '#8D8D8D',
            },
        },
    },
    dataLabels: {
        enabled: false,
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
    tooltip: {
        custom: function ({ series, seriesIndex, dataPointIndex, }) {
            return '<div class="apex-tooltip p-2">' + '<span>' + '<span class="bg-primary">' + '</span>' + 'Project Created' + '<h3>' + '$' + series[seriesIndex][dataPointIndex] + '<h3/>' + '</span>' + '</div>';
        },
    },
};

export const progressOptions: ApexOptions = {
    series: [75],
    chart: {
        height: 300,
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            hollow: {
                size: '55%',
            }
        },
    },
    responsive: [{
        breakpoint: 1661,
        options: {
            chart: {
                height: 280
            },
        },
    }, {
        breakpoint: 1581,
        options: {
            chart: {
                height: 250
            },
        },
    }, {
        breakpoint: 1471,
        options: {
            chart: {
                height: 242
            },
        },
    }, {
        breakpoint: 1441,
        options: {
            chart: {
                height: 300
            },
        },
    },
    {
        breakpoint: 1301,
        options: {
            chart: {
                height: 250
            },
        },
    },
    {
        breakpoint: 1200,
        options: {
            chart: {
                height: 300
            },
        },
    }, {
        breakpoint: 1140,
        options: {
            chart: {
                height: 250
            },
        },
    }, {
        breakpoint: 992,
        options: {
            chart: {
                height: 300
            },
        },
    },
    {
        breakpoint: 821,
        options: {
            chart: {
                height: 270
            },
        },
    },
    ],
    colors: ["#307EF3"],
    labels: ['Progress'],
};

export const projectRadarChart: ApexOptions = {
    series: [
        {
            name: "Series 1",
            data: [80, 50, 30, 40, 100, 20],
        },
        {
            name: "Series 2",
            data: [20, 30, 40, 80, 20, 80],
        },
        {
            name: "Series 3",
            data: [45, 75, 80, 10, 40, 10],
        },
    ],
    colors: ["#307EF3", "#51bb25", "#EBA31D"],
    chart: {
        height: 300,
        type: "radar",
        dropShadow: {
            enabled: true,
            blur: 1,
            left: 1,
            top: 1,
        },
        toolbar: {
            show: false,
        },
    },
    stroke: {
        show: true,
        width: 2,
        colors: ["#307EF3", "#51bb25", "#EBA31D"],
        dashArray: 0
    },
    markers: {
        size: 0,
    },
    labels: ['1', "2", "3", "4", "5", "6"],
}