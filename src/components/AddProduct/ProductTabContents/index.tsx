import React from "react";
import { Col, TabContent, TabPane } from "reactstrap";
import { ProductTabContentProp } from "../../../Types/EcommerceType";
import AddProductDetails from "./AddProductDetails";
import ProductGallery from "./ProductGallery";
import ProductCategories from "./ProductCategories";
import SellingPrice from "./SellingPrice";
import AdvanceSection from "./AdvanceSection";

export default function ProductTabContents({ steps, activeCallBack }: ProductTabContentProp) {
  return (
    <Col xxl={9} xl={8} className="box-col-8 position-relative">
      <TabContent activeTab={steps}>
        <TabPane tabId={1}>
          <AddProductDetails activeCallBack={activeCallBack} />
        </TabPane>
        <TabPane tabId={2}>
          <ProductGallery activeCallBack={activeCallBack} />
        </TabPane>
        <TabPane tabId={3}>
          <ProductCategories activeCallBack={activeCallBack} />
        </TabPane>
        <TabPane tabId={4}>
          <SellingPrice activeCallBack={activeCallBack} />
        </TabPane>
        <TabPane tabId={5}>
          <AdvanceSection activeCallBack={activeCallBack} />
        </TabPane>
      </TabContent>
    </Col>
  );
}
