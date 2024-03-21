import { MoreVertical } from "react-feather";
import { TableColumn } from "react-data-table-component";
import { Image } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../utils";
import { Href } from "../../../../Utils/Constants";
import { OrderHistoryDataTableProps } from "../../../../Types/EcommerceType";

export const orderHistoryData = [
    {
        id: 1,
        heading: 'New Orders',
        details: [
            {
                id: 1,
                image: '6.png',
                name: 'Women Top',
                avaiabilty: 'Processing',
                color: 'primary'
            },
            {
                id: 2,
                image: '5.png',
                name: 'Women Shorts',
                avaiabilty: 'Processing',
                color: 'primary'
            },
            {
                id: 3,
                image: '4.png',
                name: 'Cyclamen',
                avaiabilty: 'Processing',
                color: 'primary'
            },
            {
                id: 4,
                image: '3.png',
                name: 'Men Solid Denim jacket',
                avaiabilty: 'Processing',
                color: 'primary'
            },
            {
                id: 5,
                image: '2.png',
                name: 'Blue shirt',
                avaiabilty: 'Processing',
                color: 'primary'
            },
            {
                id: 6,
                image: '1.png',
                name: 'Red shirt',
                avaiabilty: 'Processing',
                color: 'primary'
            },
            {
                id: 7,
                image: '1.png',
                name: 'Red shirt',
                avaiabilty: 'Processing',
                color: 'primary'
            },
            {
                id: 8,
                image: '6.png',
                name: 'Women Top',
                avaiabilty: 'Processing',
                color: 'primary'
            },
            {
                id: 9,
                image: '5.png',
                name: 'Women shorts',
                avaiabilty: 'Processing',
                color: 'primary'
            },
        ]
    },
    {
        id: 2,
        heading: 'Shipped Orders',
        details: [
            {
                id: 10,
                image: '6.png',
                name: 'Women Top',
                avaiabilty: 'Shipped',
                color: 'success'
            },
            {
                id: 11,
                image: '5.png',
                name: 'Women Shorts',
                avaiabilty: 'Shipped',
                color: 'success'
            },
            {
                id: 12,
                image: '4.png',
                name: 'Cyclamen',
                avaiabilty: 'Shipped',
                color: 'success'
            },
            {
                id: 13,
                image: '3.png',
                name: 'Men Solid Denim jacket',
                avaiabilty: 'Shipped',
                color: 'success'
            },
            {
                id: 14,
                image: '2.png',
                name: 'Blue shirt',
                avaiabilty: 'Shipped',
                color: 'success'
            },
            {
                id: 15,
                image: '1.png',
                name: 'Red shirt',
                avaiabilty: 'Shipped',
                color: 'success'
            },
            {
                id: 16,
                image: '1.png',
                name: 'Red shirt',
                avaiabilty: 'Shipped',
                color: 'success'
            },
            {
                id: 17,
                image: '6.png',
                name: 'Women Top',
                avaiabilty: 'Shipped',
                color: 'success'
            },
            {
                id: 18,
                image: '5.png',
                name: 'Women shorts',
                avaiabilty: 'Shipped',
                color: 'success'
            },
        ]
    },
    {
        id: 3,
        heading: 'Cancelled Orders',
        details: [
            {
                id: 19,
                image: '6.png',
                name: 'Women Top',
                avaiabilty: 'Cancelled',
                color: 'danger'
            },
            {
                id: 20,
                image: '5.png',
                name: 'Women Shorts',
                avaiabilty: 'Cancelled',
                color: 'danger'
            },
            {
                id: 21,
                image: '4.png',
                name: 'Cyclamen',
                avaiabilty: 'Cancelled',
                color: 'danger'
            },
            {
                id: 22,
                image: '3.png',
                name: 'Men Solid Denim jacket',
                avaiabilty: 'Cancelled',
                color: 'danger'
            },
            {
                id: 23,
                image: '2.png',
                name: 'Blue shirt',
                avaiabilty: 'Cancelled',
                color: 'danger'
            },
            {
                id: 24,
                image: '1.png',
                name: 'Red shirt',
                avaiabilty: 'Cancelled',
                color: 'danger'
            },
            {
                id: 25,
                image: '1.png',
                name: 'Red shirt',
                avaiabilty: 'Cancelled',
                color: 'danger'
            },
            {
                id: 26,
                image: '6.png',
                name: 'Women Top',
                avaiabilty: 'Cancelled',
                color: 'danger'
            },
            {
                id: 27,
                image: '5.png',
                name: 'Women shorts',
                avaiabilty: 'Cancelled',
                color: 'danger'
            },
        ]
    }
];

export const orderHistoryDataTable: OrderHistoryDataTableProps[] = [
    {
        product: '1.png',
        productName: 'Long Top',
        order: 'Processing',
        size: 'M',
        color: 'Lavander',
        articleNumber: '4215738',
        units: '1',
        price: '$21',
    },
    {
        product: '13.png',
        productName: 'Fancy Watch',
        order: 'Processing',
        size: '35 mm',
        color: 'Blue',
        articleNumber: '5476182',
        units: '1',
        price: '$10',
    },
    {
        product: '4.png',
        productName: 'Man Shoes',
        order: 'Processing',
        size: '8',
        color: 'Black & White',
        articleNumber: '1756457',
        units: '11',
        price: '$ 18',
    },
    {
        product: '10.png',
        productName: 'Ledis side bag',
        order: 'Shipped',
        orderClass: 'shipped-order',
        size: '22cm x 18cm',
        color: 'Brown',
        articleNumber: '7451725',
        units: '1',
        price: '$13',
    },
    {
        product: '12.png',
        productName: 'Ledis slipper',
        order: 'Shipped',
        orderClass: 'shipped-order',
        size: '6',
        color: 'Brown',
        articleNumber: '4127421',
        units: '1',
        price: '$6',
    },
    {
        product: '3.png',
        productName: 'Fancy ledis Jacket',
        order: 'Shipped',
        orderClass: 'shipped-order',
        size: 'Xl',
        color: 'Light Gray',
        articleNumber: '3581714',
        units: '1',
        price: '$24',
    },
    {
        product: '2.png',
        productName: 'Ledis Handbag',
        order: 'Cancelled',
        orderClass: 'cancel-order',
        size: '25cm x 20cm',
        color: 'Black',
        articleNumber: '6748142',
        units: '1',
        price: '$12',
    },
    {
        product: '15.png',
        productName: 'Iphone6 mobile',
        order: 'Cancelled',
        orderClass: 'cancel-order',
        size: '10cm x 15cm',
        color: 'Black',
        articleNumber: '5748214',
        units: '1',
        price: '$25',
    },
    {
        product: '14.png',
        productName: 'Watch',
        order: 'Cancelled',
        orderClass: 'cancel-order',
        size: '27mm',
        color: 'Brown',
        articleNumber: '2471254',
        units: '1',
        price: '$12',
    },
    {
        product: '11.png',
        productName: 'Watch',
        order: 'Cancelled',
        orderClass: 'cancel-order',
        size: '6',
        color: 'Blue',
        articleNumber: '8475112',
        units: '1',
        price: '$6',
    },
]

export const orderHistoryColumns: TableColumn<OrderHistoryDataTableProps>[] = [
    {
        name: 'Product',
        selector: (row) => row.product,
        sortable: true,
        center: true,
        cell: (row) => (
            <Image className="img-fluid img-30" src={dynamicImage(`product/${row.product}`)} alt="" />
        )
    },
    {
        name: 'Product Name',
        selector: (row) => row.productName,
        sortable: true,
        center: false,
        cell: (row) => (
            <div className="product-name"><a href={Href}>{row.productName}</a>
                <div className="order-process"><span className={`order-process-circle ${row.orderClass}`}></span>{row.order}</div>
            </div>
        )
    },
    {
        name: 'Size',
        selector: (row) => row.size,
        sortable: true,
        center: true,
    },
    {
        name: 'Color',
        selector: (row) => row.color,
        sortable: true,
        center: true,
    },
    {
        name: 'Article Number',
        selector: (row) => row.articleNumber,
        sortable: true,
        center: true,
    },
    {
        name: 'Units',
        selector: (row) => row.units,
        sortable: true,
        center: true,
    },
    {
        name: 'Price',
        selector: (row) => row.price,
        sortable: true,
        center: true,
    },
    {
        name: <i className='fa fa-angle-down' />,
        cell: (row) => <MoreVertical />,
        sortable: false,
        center: true,
    },
]