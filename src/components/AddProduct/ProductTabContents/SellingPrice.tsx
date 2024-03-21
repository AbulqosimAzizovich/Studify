import React, { ChangeEvent, useState } from "react";
import { Col, Form, Input, Label, Row } from "reactstrap";
import { toast } from "react-toastify";
import { ActiveCallbackProp } from "../../../Types/EcommerceType";
import { Btn, LI, UL } from "../../../AbstractElements";
import Tooltip from "./Common/Tooltip";
import {
  ChooseYourCurrency,
  InitialCost,
  Next,
  Previous,
  ProductStocks,
  SellingPriceText,
  TooltipLabelText,
} from "../../../utils/Constants";
import { chooseCurrencyItem, sellingPriceRadio } from "../../../Data/AppsData/EcommerceData/ProductData";
import SvgIcon from "../../../utils/Constants/CommonComponents/CommonIcons/CommonSvgIcons";

export default function SellingPrice({ activeCallBack }: ActiveCallbackProp) {
  const [formData, setFormData] = useState({ initialCost: "", sellingPrice: "", currency: "", stocks: "" });
  const { initialCost, sellingPrice, currency, stocks } = formData;
  const updateFormData = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleNextButton = () => {
    if (initialCost !== "" && sellingPrice !== "" && currency !== "" && stocks !== "") {
      activeCallBack(5);
    } else {
      return toast.error("Please fill out details before moving on to the next step");
    }
  };
  return (
    <div className="sidebar-body">
      <Form className="price-wrapper">
        <Row className="g-3 custom-input">
          <Col sm={6}>
            <Label>
              {InitialCost} <span className="txt-danger">{"*"}</span>
            </Label>
            <Input type="number" name="initialCost" value={initialCost} onChange={updateFormData} />
          </Col>
          <Col sm={6}>
            <Label>
              {SellingPriceText} <span className="txt-danger">{"*"}</span>
            </Label>
            <Input type="number" name="sellingPrice" value={sellingPrice} onChange={updateFormData} />
          </Col>
          <Col sm={6}>
            <Label>{ChooseYourCurrency}</Label>
            <Input type="select" name="currency" value={currency} onChange={updateFormData}>
              {chooseCurrencyItem.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </Input>
          </Col>
          <Col sm={6}>
            <Label>
              {ProductStocks}
              <span className="txt-danger">{"*"}</span>
            </Label>
            <Input type="number" name="stocks" value={stocks} onChange={updateFormData} />
          </Col>
          <Col xs={12}>
            <Tooltip
              labelText={TooltipLabelText}
              tooltip={"Choose the kind of discount that will be used on that particular item."}
              targetId="selling"
            />
            <UL className="radio-wrapper simple-list flex-row">
              {sellingPriceRadio.map((data) => (
                <LI key={data.id}>
                  <Input
                    id={`radio-icon${data.id}`}
                    type="radio"
                    name="radio5"
                    value="option5"
                    defaultChecked={data.check ? true : false}
                  />
                  <Label for={`radio-icon${data.id}`} check>
                    <span>{data.text}</span>
                  </Label>
                </LI>
              ))}
            </UL>
          </Col>
        </Row>
        <div className="product-buttons">
          <Btn color="transparent" className="me-1" onClick={() => activeCallBack(3)}>
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
