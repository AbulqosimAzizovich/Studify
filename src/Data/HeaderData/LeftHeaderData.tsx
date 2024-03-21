import { FolderItemType, HeaderDataType } from "../../Types/LayoutTypes";

export const folderPlusData: FolderItemType[] = [
    {
        id: 1,
        link: `${process.env.PUBLIC_URL}/applications/file-manager`,
        text: 'File Manager'
    },
    {
        id: 2,
        link: `${process.env.PUBLIC_URL}/applications/social-app`,
        text: 'Social App'
    },
    {
        id: 3,
        link: `${process.env.PUBLIC_URL}/applications/bookmark`,
        text: 'Bookmark'
    },
];

export const leftHeaderData: HeaderDataType[] = [
    {
        id: 1,
        icon: 'fill-bonus',
        text: 'Bonus Ui',
        child: [
            {
                id: 1,
                link: `${process.env.PUBLIC_URL}/components/bonus-ui/scrollable`,
                text: 'Scrollable'
            },
            {
                id: 2,
                link: `${process.env.PUBLIC_URL}/components/bonus-ui/tree`,
                text: 'Tree view'
            },
            {
                id: 3,
                link: `${process.env.PUBLIC_URL}/components/bonus-ui/toasts`,
                text: 'Toasts'
            },
            {
                id: 4,
                link: `${process.env.PUBLIC_URL}/components/bonus-ui/rating`,
                text: 'Rating'
            },
            {
                id: 5,
                link: `${process.env.PUBLIC_URL}/components/bonus-ui/dropzone`,
                text: 'Dropzone'
            },
            {
                id: 6,
                link: `${process.env.PUBLIC_URL}/components/bonus-ui/tour`,
                text: 'Tour'
            },
            {
                id: 7,
                link: `${process.env.PUBLIC_URL}/components/bonus-ui/sweet-alert-2`,
                text: 'SweetAlert2'
            },
            {
                id: 8,
                link: `${process.env.PUBLIC_URL}/components/bonus-ui/owl-carousel`,
                text: 'Owl Carousel'
            },
            {
                id: 9,
                link: `${process.env.PUBLIC_URL}/components/bonus-ui/ribbons`,
                text: 'Ribbons'
            },
            {
                id: 10,
                link: `${process.env.PUBLIC_URL}/components/bonus-ui/pagination`,
                text: 'Pagination'
            },
            {
                id: 11,
                link: `${process.env.PUBLIC_URL}/components/bonus-ui/breadcrumb`,
                text: 'Breadcrumb'
            },
            {
                id: 12,
                link: `${process.env.PUBLIC_URL}/components/bonus-ui/range-slider`,
                text: 'Range Slider'
            },
            {
                id: 13,
                link: `${process.env.PUBLIC_URL}/components/bonus-ui/image-cropper`,
                text: 'Image cropper'
            },
            {
                id: 14,
                link: `${process.env.PUBLIC_URL}/components/bonus-ui/basic-card`,
                text: 'Basic Card'
            },
            {
                id: 15,
                link: `${process.env.PUBLIC_URL}/components/bonus-ui/creative-card`,
                text: 'Creative Card'
            },
            {
                id: 16,
                link: `${process.env.PUBLIC_URL}/components/bonus-ui/timeline`,
                text: 'Timeline'
            },
        ]
    },
    {
        id: 2,
        icon: 'fill-Grid',
        text: 'Level Menu',
        child: [
            {
                id: 1,
                link: `${process.env.PUBLIC_URL}/applications/ecommerce/add-products`,
                text: 'Add Product'
            },
            {
                id: 2,
                link: `${process.env.PUBLIC_URL}/applications/ecommerce/product`,
                text: 'Product'
            },
            {
                id: 3,
                link: `${process.env.PUBLIC_URL}/applications/ecommerce/product-page`,
                text: 'Product page'
            },
            {
                id: 4,
                link: `${process.env.PUBLIC_URL}/applications/ecommerce/product-list`,
                text: 'Product list'
            },
            {
                id: 5,
                link: `${process.env.PUBLIC_URL}/applications/ecommerce/payment-details`,
                text: 'Payment Details'
            },
            {
                id: 6,
                link: `${process.env.PUBLIC_URL}/applications/ecommerce/order-history`,
                text: 'Order History'
            },
            {
                id: 7,
                link: `${process.env.PUBLIC_URL}/invoice/invoice-6`,
                text: 'Invoice'
            },
            {
                id: 8,
                link: `${process.env.PUBLIC_URL}/applications/ecommerce/cart`,
                text: 'Cart'
            },
            {
                id: 9,
                link: `${process.env.PUBLIC_URL}/applications/ecommerce/wishlist`,
                text: 'Wishlist'
            },
            {
                id: 10,
                link: `${process.env.PUBLIC_URL}/applications/ecommerce/checkout`,
                text: 'Checkout'
            },
            {
                id: 11,
                link: `${process.env.PUBLIC_URL}/applications/ecommerce/pricing`,
                text: 'Pricing'
            },
        ]
    },
    {
        id: 3,
        icon: 'fill-Perk-Ui',
        text: 'Project',
        child: [
            {
                id: 1,
                link: `${process.env.PUBLIC_URL}/applications/project/project-list`,
                text: 'Project List'
            },
            {
                id: 2,
                link: `${process.env.PUBLIC_URL}/applications/project/create-project`,
                text: 'Create new'
            },
        ]
    },
    {
        id: 4,
        icon: 'fill-bonus',
        text: 'Blog',
        child: [
            {
                id: 1,
                link: `${process.env.PUBLIC_URL}/miscellaneous/blog/blog-detail`,
                text: 'Blog Details'
            },
            {
                id: 2,
                link: `${process.env.PUBLIC_URL}/miscellaneous/blog/blog-single`,
                text: 'Blog Single'
            },
            {
                id: 3,
                link: `${process.env.PUBLIC_URL}/miscellaneous/blog/add-post`,
                text: 'Add Post'
            },
        ]
    },
]