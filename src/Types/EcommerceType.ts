export interface EccomInitialStateProps {
  productItem: ProductDataTypes[];
  cartData: ProductDataTypes[];
  filterValue: FilterValueTypes;
}

export interface CheckoutFormType {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
}

export interface LogoProp {
  imageClass?: string;
}

export interface ProductListType {
  [key: string]: string | number;
  imageSrc: string;
  productName: string;
  sku: string;
  category: string;
  price: string;
  quantity: string;
  status: string;
  rating: number;
}

export interface ProductSearchProp {
  productdata: ProductListType[];
  setFilteredData: React.Dispatch<React.SetStateAction<ProductListType[]>>;
}

export type ApiResponse = ProductDataTypes[];

export interface DatatableSearchBarProps {
  tableData: OrderHistoryDataTableProps[];
  setFilteredData: React.Dispatch<React.SetStateAction<OrderHistoryDataTableProps[]>>;
}

export interface OrderHistoryDataTableProps {
  [key: string]: string | number | undefined;
  product: string;
  productName: string;
  orderClass?: string;
  order: string;
  size: string;
  color: string;
  articleNumber: string;
  units: string;
  price: string;
}

export interface ProductFormNavProps {
  steps: number;
  setSteps: React.Dispatch<React.SetStateAction<number>>;
}

export interface ProductTabContentProp {
  activeCallBack: (tab: number) => void;
  steps: number
}

export interface ActiveCallbackProp {
  activeCallBack: (tab: number) => void;
}

export interface AdvanceCallBackProp {
  activeCallBack: (tab: number) => void;
  activeBorder: (val: number) => void;
}

export interface ActiveBorderProp {
  activeBorder: (val: number) => void;
}

export interface ToolbarBoxProp {
  label?: boolean;
  paragraph: string
}

export interface ProductTagProp {
  title: string;
  subTitle?: boolean;
}

export interface TooltipProp {
  labelText: string;
  tooltip: string;
  targetId: string;
}

interface VariantItems {
  color: string;
  images: string;
}

export interface ProductDataTypes {
  id: number;
  image: string;
  name: string;
  note: string;
  discription: string;
  discountPrice: string;
  status: string;
  price: number;
  stock: string;
  review: string;
  category: string;
  colors: string[];
  size: string[];
  tags: string[];
  variants: VariantItems[];
  quantity?: number | undefined;
  ribbonClassName?: string;
  sum?: number;
  total?: any;
}

interface FilterValueItems {
  min: number;
  max: number;
}
export interface FilterValueTypes {
  brand: string[];
  color: string;
  value: FilterValueItems;
  sortBy: string;
  searchBy: string;
  category: string[];
}
export interface EccomInitialStateProps {
  productItem: ProductDataTypes[];
  cartData: ProductDataTypes[];
  filterValue: FilterValueTypes;
}

export interface ProductModalProps {
  value: boolean;
  setOpenModal: (value: boolean) => void;
  dataId: undefined | number;
  modelData: ProductDataTypes | undefined;
}

export interface ProductHoverProps {
  onClickHandle: (item: ProductDataTypes) => void;
  item: ProductDataTypes;
}

export interface ProductDetailsProps {
  item: ProductDataTypes;
}

export interface ModalProductDetailsProp {
  modelData: ProductDataTypes | undefined;
}

export interface ProductQuantityProp {
  dataId: undefined | number;
  modelData: ProductDataTypes | undefined;
}

interface CommonProductSlideData {
  rowClass?: string;
  image: string;
  title: string;
  text: string;
}
export interface CommonProductSlideProp {
  data: CommonProductSlideData;
}