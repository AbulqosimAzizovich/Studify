import { Clock, CreditCard, Gift, Truck } from "react-feather";

//product page
export const brandData = ["Clothing", "Bags", "Footwear", "Watches", "ACCESSORIES"];
export const productPageMainNav = ['Febric', 'Video', 'Details', 'Brand']

export const shippingData = [
  {
    id: 1,
    icon: <Truck />,
    title: 'Free Shipping',
    subTitle: 'Free Shipping World Wide'
  },
  {
    id: 2,
    icon: <Clock />,
    title: '24 X 7 Service',
    subTitle: 'Online Service For New Customer'
  },
  {
    id: 3,
    icon: <Gift />,
    title: 'Festival Offer',
    subTitle: 'New Online Special Festival'
  },
  {
    id: 4,
    icon: <CreditCard />,
    title: 'Online Payment',
    subTitle: 'Contrary To Popular Belief.'
  },
];

//payment details
export const selectMonth = ["Select Month", "Jan", "Fab", "March", "April"];
export const selectYear = ["Select Year", "2023", "2023", "2023", "2023", "2023"];
export const bankName = ["Bank Name", "SBI", "ICICI", "KOTAK", "BOB"];
export const selectCard = ["Select Card", "2", "3", "4", "5"];
export const selectDuration = ["Select Duration", "2023-2023", "2023-2023", "2023-2023", "2023-2023"];
export const paymentOption = ["mastercard", "visa", "paypal"];

//Add product data
export const addProductNav = [
  {
    id: 1,
    icon: 'product-detail',
    title: 'Add Product Details',
    subTitle: 'Add Product name & details'
  },
  {
    id: 2,
    icon: 'product-gallery',
    title: 'Product gallery',
    subTitle: 'thumbnail & Add Product Gallery'
  },
  {
    id: 3,
    icon: 'product-category',
    title: 'Product Categories',
    subTitle: 'Add Product category, Status and Tags'
  },
  {
    id: 4,
    icon: 'pricing',
    title: 'Selling prices',
    subTitle: 'Add Product basic price & Discount'
  },
  {
    id: 5,
    icon: 'advance',
    title: 'Advance',
    subTitle: 'Add Meta details & Inventory details'
  },
];

export const productGalleryData = [
  {
    id: 1,
    title: 'Product Image',
    icon: 'file-upload',
    spanText: 'SVG,PNG,JPG or GIF'
  },
  {
    id: 2,
    title: 'Product Gallery',
    icon: 'file-upload1',
    spanText: 'Add Product Gallery Images'
  },
];

export const addCategoryItem = ["Toys & games", "Sportswear", "Jewellery", "Furniture and Decor", "Health, Personal Care, and Beauty", "Auto and Parts", "Baby Care Products"];
export const productTagItem = ["watches", "sports", "clothes", "bottles"];
export const publishStatusItem = ["Publish", "Drafts", "Unpublish"];
export const chooseCurrencyItem = ["Dollar $", "Euro €", "Rupees ₹", "British pounds £", "Russian Ruble ₽", "Japanese Yen ¥", "Singapore Dollar S$"];
export const stockAvailabilityItem = ["In stock", "Out of stock", "Pre-order"]
export const lowStockItem = ["Low Stock (5 or less)", "Low Stock (10 or less)", "Low Stock (20 or less)", "Low Stock (25 or less)", "Low Stock (30 or less)"]
export const stateItem = ["State", "Gujarat", "Punjab", "Himachal pradesh", "Goa", "Sikkim", "Telangana"];
export const basicShippingItem = ["Basic Shipping", "Expedited Shipping", "International Shipping", "Free Shipping", "Same-Day or Next-Day Shipping", "Flat Rate Shipping", "Local Pickup"];

export const sellingPriceRadio = [
  {
    id: 1,
    text: 'Fixed Price'
  },
  {
    id: 2,
    text: 'BOGO(Buy one, Get one)',
    check: 'checked'
  },
  {
    id: 3,
    text: 'Seasonal or holiday discount'
  },
  {
    id: 4,
    text: 'Percentage-based discount(%)'
  },
  {
    id: 5,
    text: 'Volume or bulk discount'
  },
];

//product data
export const gridOptionsData = [
  {
    colClass: "col-xl-6 col-sm-6",
    gridLine: ["1", "2"],
  },
  {
    colClass: "col-xl-4 col-sm-4",
    gridLine: ["3", "4", "5"],
  },
  {
    colClass: "col-xl-3 col-sm-3",
    gridLine: ["6", "7", "8", "9"],
  },
  {
    colClass: "col-xl-2 col-sm-2",
    gridLine: ["10", "11", "12", "13", "14", "15"],
  },
];

export const productSize = ['M', 'L', 'XL']

export const productSettings = {
  slidesToShow: 1,
  swipeToSlide: false,
  arrows: true,
  dots: false,
};

export const productSlide1 = [
  {
    image: "01.jpg",
    title: "Woman T-shirt",
    text: "$100.00",
  },
  {
    image: "02.jpg",
    title: "Dream Beauty Fashion",
    text: "$150.00",
  },
  {
    image: "03.jpg",
    title: "VOXATI",
    text: "$200.00",
  },
];

export const productSlide2 = [
  {
    image: "01.jpg",
    title: "Fancy Shirt",
    text: "$100.00",
  },
  {
    image: "02.jpg",
    title: "Fancy Shirt",
    text: "$100.00",
  },
  {
    image: "03.jpg",
    title: "Fancy Shirt",
    text: "$100.00",
  },
];
