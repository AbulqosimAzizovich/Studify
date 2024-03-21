import { FormGroup, Input } from "reactstrap";
import { Link } from "react-router-dom";
import { TableColumn } from "react-data-table-component";
import SvgIcon from "../../../../utils/Constants/CommonComponents/CommonIcons/CommonSvgIcons";
import { Badges, Image, P } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Utils";
import { ProductListType } from "../../../../Types/EcommerceType";

export const productListTableData: ProductListType[] = [
  {
    imageSrc: "dashboard-8/product-categories/laptop.png",
    productName: "Apple Desktop 2023",
    sku: "02145YK796",
    category: "Laptops",
    price: "56000.00",
    quantity: "13",
    status: "Sold Out",
    rating: 4,
  },
  {
    imageSrc: "dashboard-8/product-categories/phone.png",
    productName: "Apple iPhone 13 Pro",
    sku: "56379FG3AW",
    category: "Smart Phones",
    price: "19000.00",
    quantity: "48",
    status: "In Stock",
    rating: 3,
  },
  {
    imageSrc: "dashboard-8/product-categories/headphone.png",
    productName: "Headphones",
    sku: "33KR5689B1",
    category: "Smart Headphones",
    price: "10000.00",
    quantity: "5",
    status: "In Stock",
    rating: 5,
  },
  {
    imageSrc: "dashboard-8/product-categories/wireless-headphone.png",
    productName: "Wireless headphone",
    sku: "AD6789HEY0",
    category: "Smart Headphones",
    price: "15000.00",
    quantity: "4",
    status: "Sold Out",
    rating: 4,
  },
  {
    imageSrc: "dashboard-2/product/1.png",
    productName: "Wood Chair",
    sku: "456DF78DFQ",
    category: "Furniture",
    price: "99000.00",
    quantity: "2",
    status: "Sold Out",
    rating: 5,
  },
  {
    imageSrc: "email-template/3.png",
    productName: "Wood Chair",
    sku: "5633GD3K54",
    category: "Furniture",
    price: "1000.00",
    quantity: "8",
    status: "Sold Out",
    rating: 5,
  },
  {
    imageSrc: "dashboard-8/product-categories/ipad.png",
    productName: "MacBook Air 13.3-inch",
    sku: "589KO8PPQ8",
    category: "Laptops",
    price: "45000.00",
    quantity: "10",
    status: "Sold Out",
    rating: 4,
  },
  {
    imageSrc: "dashboard-8/product-categories/mouse.png",
    productName: "M185 Compact Wireless Mouse",
    sku: "02145YK796",
    category: "E-Commerce",
    price: "19000.00",
    quantity: "48",
    status: "In Stock",
    rating: 2,
  },
  {
    imageSrc: "other-images/cart-img.jpg",
    productName: "Wood chairs",
    sku: "568GH3LLQ2",
    category: "Furniture",
    price: "78000.00",
    quantity: "50",
    status: "In Stock",
    rating: 5,
  },
  {
    imageSrc: "dashboard-8/product-categories/watch.png",
    productName: "Smart watch",
    sku: "58FR7K34F6",
    category: "Electric",
    price: "25000.00",
    quantity: "48",
    status: "Sold Out",
    rating: 5,
  },
  {
    imageSrc: "dashboard-8/product-categories/dvd.png",
    productName: "DVD",
    sku: "HG5667DFQ1",
    category: "Electric",
    price: "5600.00",
    quantity: "10",
    status: "In Stock",
    rating: 5,
  },
  {
    imageSrc: "dashboard-8/product-categories/speaker.png",
    productName: "Speakers",
    sku: "02145YK796",
    category: "Electric",
    price: "12200.00",
    quantity: "50",
    status: "Sold Out",
    rating: 4,
  },
  {
    imageSrc: "dashboard-8/product-categories/phone.png",
    productName: "Apple iphone 13 Pro",
    sku: "56379FG3AW",
    category: "Smart Phones",
    price: "19000.00",
    quantity: "48",
    status: "In Stock",
    rating: 3,
  },
  {
    imageSrc: "dashboard-8/product-categories/headphone.png",
    productName: "Headphones",
    sku: "33KR5689B1",
    category: "Smart Headphones",
    price: "10000.00",
    quantity: "5",
    status: "In Stock",
    rating: 5,
  },
  {
    imageSrc: "other-images/cart-img.jpg",
    productName: "Wood chairs",
    sku: "568GH3LLQ2",
    category: "Furniture",
    price: "78000.00",
    quantity: "50",
    status: "In Stock",
    rating: 5,
  },
  {
    imageSrc: "dashboard-8/product-categories/watch.png",
    productName: "Smart watch",
    sku: "58FR7K34F6",
    category: "Electric",
    price: "25000.00",
    quantity: "48",
    status: "Sold Out",
    rating: 4,
  },
  {
    imageSrc: "dashboard-8/product-categories/phone.png",
    productName: "Apple iPhone 13 Pro",
    sku: "56379FG3AW",
    category: "Smart Phones",
    price: "19000.00",
    quantity: "48",
    status: "In Stock",
    rating: 5,
  },
  {
    imageSrc: "dashboard-8/product-categories/headphone.png",
    productName: "Headphones",
    sku: "33KR5689B1",
    category: "Smart Headphones",
    price: "10000.00",
    quantity: "5",
    status: "In Stock",
    rating: 3,
  },
  {
    imageSrc: "dashboard-8/product-categories/wireless-headphone.png",
    productName: "Wireless headphone",
    sku: "AD6789HEY0",
    category: "Smart Headphones",
    price: "15000.00",
    quantity: "4",
    status: "Sold Out",
    rating: 5,
  },
  {
    imageSrc: "dashboard-2/product/1.png",
    productName: "Wood Chair",
    sku: "456DF78DFQ",
    category: "Furniture",
    price: "99000.00",
    quantity: "2",
    status: "Sold Out",
    rating: 4,
  },
  {
    imageSrc: "email-template/3.png",
    productName: "Wood Chair",
    sku: "5633GD3K54",
    category: "Furniture",
    price: "1000.00",
    quantity: "8",
    status: "Sold Out",
    rating: 3,
  },
  {
    imageSrc: "dashboard-8/product-categories/laptop.png",
    productName: "Apple Desktop 2023",
    sku: "02145YK796",
    category: "Laptops",
    price: "56000.00",
    quantity: "13",
    status: "Sold Out",
    rating: 4,
  },
  {
    imageSrc: "dashboard-8/product-categories/phone.png",
    productName: "Apple iPhone 13 Pro",
    sku: "56379FG3AW",
    category: "Smart Phones",
    price: "19000.00",
    quantity: "48",
    status: "In Stock",
    rating: 5,
  },
  {
    imageSrc: "dashboard-8/product-categories/phone.png",
    productName: "Apple iPhone 13 Pro",
    sku: "56379FG3AW",
    category: "Smart Phones",
    price: "19000.00",
    quantity: "48",
    status: "In Stock",
    rating: 5,
  },
  {
    imageSrc: "dashboard-8/product-categories/headphone.png",
    productName: "Headphones",
    sku: "33KR5689B1",
    category: "Smart Headphones",
    price: "10000.00",
    quantity: "5",
    status: "In Stock",
    rating: 4,
  },
  {
    imageSrc: "dashboard-8/product-categories/wireless-headphone.png",
    productName: "Wireless headphone",
    sku: "AD6789HEY0",
    category: "Smart Headphones",
    price: "15000.00",
    quantity: "4",
    status: "Sold Out",
    rating: 2,
  },
];

export const productListColumns: TableColumn<ProductListType>[] = [
  {
    name: "",
    cell: () => (
      <FormGroup check>
        <Input className="checkbox-primary" type="checkbox" />
      </FormGroup>
    ),
    sortable: false,
    width: "3%",
  },
  {
    name: "Product Name",
    selector: (row) => row.productName,
    sortable: true,
    cell: (row) => (
      <div className="product-names">
        <div className="light-product-box">
          <Image className="img-fluid" src={dynamicImage(row.imageSrc)} alt="" />
        </div>
        <P>{row.productName}</P>
      </div>
    ),
    width: "20%",
  },
  {
    name: "SKU",
    selector: (row) => row.sku,
    sortable: true,
    cell: (row) => <P className="f-light">{row.sku}</P>,
  },
  {
    name: "Category",
    selector: (row) => row.category,
    sortable: true,
    cell: (row) => <P className="f-light">{row.category}</P>,
  },
  {
    name: "Price",
    selector: (row) => row.price,
    sortable: true,
    cell: (row) => <P className="f-light">{row.price}</P>,
  },
  {
    name: "Qty",
    selector: (row) => row.qty,
    sortable: true,
    cell: (row) => <P className="f-light">{row.quantity}</P>,
  },
  {
    name: "Status",
    selector: (row) => row.status,
    sortable: true,
    cell: (row) => <Badges color={`${row.status === "Sold Out" ? "secondary" : "primary"}`}>{row.status}</Badges>,
  },
  {
    name: "Rating",
    selector: (row) => row.rating,
    sortable: true,
    cell: (row) => (
      <div className="rating">
        {[...Array(row.rating)].map((_, index) => (
          <i key={index} className="fa fa-star txt-warning"></i>
        ))}
        {[...Array(5 - row.rating)].map((_, index) => (
          <i key={index} className="fa fa-star f-light"></i>
        ))}
      </div>
    ),
  },
  {
    name: "Action",
    cell: (row) => (
      <div className="product-action">
        <Link to={`${process.env.PUBLIC_URL}/applications/ecommerce/add-products`}>
          <SvgIcon iconId="edit-content" />
        </Link>
        <SvgIcon iconId="trash1" />
      </div>
    ),
    sortable: false,
  },
];

export const productListBodyData = [
  {
    name: "Choose Product",
    options: ["Apple iphone 13 Pro", "Wood Chair", "M185 Compact Wireless Mouse"],
  },
  {
    name: "Choose Category",
    options: ["Furniture", "Smart Gadgets", "Electrics"],
  },
  {
    name: "Choose Sub Category",
    options: ["Smart Phones", "Smart Watches", "Wireless headphone"],
  },
  {
    name: "Status",
    options: ["Sold Out", "In Stock", "Pre Order", "Limited Stock"],
  },
  {
    name: "Price",
    options: ["56000.00", "19000.00", "10000.00", "15000.00", "99000.00"],
  },
];
