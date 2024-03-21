import React, { ChangeEvent, useState } from "react";
import { Col, Form, Input, Label, Row } from "reactstrap";
import { toast } from "react-toastify";
import { ActiveBorderProp } from "../../../../../Types/EcommerceType";
import Tooltip from "../../Common/Tooltip";
import { Btn, P } from "../../../../../AbstractElements";
import {
  DimensionsLabel,
  OrderPickupLabel,
  Previous,
  ShippingClass,
  Submit,
  WeightLabel,
} from "../../../../../utils/Constants";
import { basicShippingItem, stateItem } from "../../../../../Data/AppsData/EcommerceData/ProductData";
import SvgIcon from "../../../../../utils/Constants/CommonComponents/CommonIcons/CommonSvgIcons";

export default function Shipping({ activeBorder }: ActiveBorderProp) {
  const [formData, setFormData] = useState({
    zipCode: "",
    city: "",
    state: "",
    weight: "",
    lenght: "",
    width: "",
    height: "",
    shippingClass: "",
  });
  const { zipCode, city, state, weight, lenght, width, height, shippingClass } = formData;
  const updateFormData = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = name === "allowBackorders" ? event.target.checked : event.target.value;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmitButton = () => {
    if (
      zipCode !== "" &&
      city !== "" &&
      state !== "" &&
      weight !== "" &&
      lenght !== "" &&
      width !== "" &&
      height !== "" &&
      shippingClass !== ""
    ) {
      return toast.success("Successfully Completed");
    } else {
      return toast.error("Please fill out details before moving on to the next step");
    }
  };
  return (
    <div className="meta-body">
      <Form>
        <Row className="g-3 custom-input">
          <Col xs={12}>
            <Row className="gx-xl-3 gx-md-2 gy-md-0 g-2">
              <Col xs={12}>
                <Label>{OrderPickupLabel}</Label>
              </Col>
              <Col md={4} sm={6}>
                <Input
                  type="number"
                  name="zipCode"
                  value={zipCode}
                  onChange={updateFormData}
                  placeholder="Zip code (10001)"
                />
              </Col>
              <Col md={4} sm={6}>
                <Input type="text" placeholder="City" name="city" value={city} onChange={updateFormData} />
              </Col>
              <Col md={4}>
                <Input type="select" name="state" value={state} onChange={updateFormData}>
                  {stateItem.map((item, index) => (
                    <option key={index}>{item}</option>
                  ))}
                </Input>
              </Col>
            </Row>
          </Col>
          <Col xs={12}>
            <Row>
              <Col xs={12}>
                <Tooltip labelText={WeightLabel} tooltip={"set proper weight for product items."} targetId="weight" />
              </Col>
              <Col xs={12}>
                <Input type="number" name="weight" value={weight} onChange={updateFormData} />
                <P className="f-light">
                  {
                    "Decide if the product is a digital or physical item. Shipping may be necessary for real-world items."
                  }
                </P>
              </Col>
            </Row>
          </Col>
          <Col xs={12}>
            <Row className="gx-xl-3 gx-md-2 gy-md-0 g-2">
              <Col xs={12}>
                <Tooltip
                  labelText={DimensionsLabel}
                  tooltip={"set proper length/width and height for product items."}
                  targetId="dimentions"
                />
              </Col>
              <Col md={4} sm={6}>
                <Input type="number" name="lenght" value={lenght} onChange={updateFormData} placeholder="Length[l]" />
              </Col>
              <Col md={4} sm={6}>
                <Input type="number" name="width" value={width} onChange={updateFormData} placeholder="Width[w]" />
              </Col>
              <Col md={4} sm={6}>
                <Input type="number" name="height" value={height} onChange={updateFormData} placeholder="Height[h]" />
              </Col>
            </Row>
          </Col>
          <Col xs={12}>
            <Row>
              <Col xs={12}>
                <Label>{ShippingClass}</Label>
              </Col>
              <Col md={12}>
                <Input type="select" name="shippingClass" value={shippingClass} onChange={updateFormData}>
                  {basicShippingItem.map((item, index) => (
                    <option key={index}>{item}</option>
                  ))}
                </Input>
              </Col>
            </Row>
          </Col>
        </Row>
        <div className="product-buttons">
          <Btn color="transparent" className="me-1" onClick={() => activeBorder(2)}>
            <div className="d-flex align-items-center gap-sm-2 gap-1">
              <SvgIcon iconId="back-arrow" /> {Previous}
            </div>
          </Btn>
          <Btn color="transparent" onClick={handleSubmitButton}>
            <div className="d-flex align-items-center gap-sm-2 gap-1">
              <SvgIcon iconId="front-arrow" /> {Submit}
            </div>
          </Btn>
        </div>
      </Form>
    </div>
  );
}
