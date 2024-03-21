import React, { ChangeEvent, useState } from "react";
import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { toast } from "react-toastify";
import { AdvanceCallBackProp } from "../../../../Types/EcommerceType";
import { Btn, P } from "../../../../AbstractElements";
import {
  AllowBackorders,
  DigitalProduct,
  LowStock,
  Next,
  PreOrder,
  Previous,
  RestockDate,
  Sku,
  StockAvailability,
  StockQuantity,
} from "../../../../utils/Constants";
import { lowStockItem, stockAvailabilityItem } from "../../../../Data/AppsData/EcommerceData/ProductData";
import SvgIcon from "../../../../utils/Constants/CommonComponents/CommonIcons/CommonSvgIcons";

export default function Inventory({ activeCallBack, activeBorder }: AdvanceCallBackProp) {
  const [formData, setFormData] = useState({
    stockAvailability: "",
    lowStock: "",
    sku: "",
    stockQuantity: "",
    restockDate: "",
    preOrder: "",
    allowBackorders: false,
  });
  const { stockAvailability, lowStock, sku, stockQuantity, restockDate, preOrder, allowBackorders } = formData;
  const updateFormData = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = name === "allowBackorders" ? event.target.checked : event.target.value;
    setFormData({ ...formData, [name]: value });
  };
  const handleNextButton = () => {
    if (
      stockAvailability !== "" &&
      lowStock !== "" &&
      sku !== "" &&
      stockQuantity !== "" &&
      restockDate !== "" &&
      preOrder !== "" &&
      allowBackorders !== false
    ) {
      activeBorder(2);
    } else {
      return toast.error("Please fill out details before moving on to the next step");
    }
  };
  return (
    <div className="meta-body">
      <Form>
        <Row className="g-3 custom-input">
          <Col sm={6}>
            <Label>{StockAvailability}</Label>
            <Input type="select" name="stockAvailability" value={stockAvailability} onChange={updateFormData}>
              {stockAvailabilityItem.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </Input>
          </Col>
          <Col sm={6}>
            <Label>{LowStock}</Label>
            <Input type="select" name="lowStock" value={lowStock} onChange={updateFormData}>
              {lowStockItem.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </Input>
          </Col>
          <Col lg={3} sm={6}>
            <Label>
              {Sku}
              <span className="txt-danger">{"*"}</span>
            </Label>
            <Input type="text" name="sku" value={sku} onChange={updateFormData} />
          </Col>
          <Col lg={3} sm={6}>
            <Label>
              {StockQuantity}
              <span className="txt-danger">{"*"}</span>
            </Label>
            <Input type="number" name="stockQuantity" value={stockQuantity} onChange={updateFormData} />
          </Col>
          <Col lg={3} sm={6}>
            <Label>
              {RestockDate}
              <span className="txt-danger">{"*"}</span>
            </Label>
            <Input type="number" name="restockDate" value={restockDate} onChange={updateFormData} />
          </Col>
          <Col lg={3} sm={6}>
            <Label>
              {PreOrder}
              <span className="txt-danger">{"*"}</span>
            </Label>
            <Input type="number" name="preOrder" value={preOrder} onChange={updateFormData} />
          </Col>
          <Col xs={12}>
            <Label>{AllowBackorders}</Label>
            <FormGroup check>
              <Input id="gridCheck" type="checkbox" name="allowBackorders" onChange={updateFormData} />
              <Label className="m-0" for="gridCheck" check>
                {DigitalProduct}
              </Label>
              <P className="f-light">
                {"Decide if the product is a digital or physical item. Shipping may be necessary for real-world items."}
              </P>
            </FormGroup>
          </Col>
        </Row>
        <div className="product-buttons">
          <Btn color="transparent" className="me-1" onClick={() => activeCallBack(4)}>
            <div className="d-flex align-items-center gap-sm-2 gap-1">
              <SvgIcon iconId="back-arrow" /> {Previous}
            </div>
          </Btn>
          <Btn color="transparent" onClick={handleNextButton}>
            <div className="d-flex align-items-center gap-sm-2 gap-1">
              <SvgIcon iconId="front-arrow" /> {Next}
            </div>
          </Btn>
        </div>
      </Form>
    </div>
  );
}
