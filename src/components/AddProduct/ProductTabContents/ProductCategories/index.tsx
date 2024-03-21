import React, { ChangeEvent, useState } from "react";
import { Col, Form, Input, Label, Row } from "reactstrap";
import { toast } from "react-toastify";
import { ActiveCallbackProp } from "../../../../Types/EcommerceType";
import { AddCategory, Next, Previous, PublishStatus } from "../../../../utils/Constants";
import { Btn, P } from "../../../../AbstractElements";
import { addCategoryItem, publishStatusItem } from "../../../../Data/AppsData/EcommerceData/ProductData";
import ProductTag from "../Common/ProductTag";
import NewCategoryModal from "./NewCategoryModal";
import ProductDate from "./ProductDate";
import SvgIcon from "../../../../utils/Constants/CommonComponents/CommonIcons/CommonSvgIcons";

export default function ProductCategories({ activeCallBack }: ActiveCallbackProp) {
  const [formData, setFormData] = useState({ category: "", status: "" });
  const { category, status } = formData;
  const updateFormData = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleNextButton = () => {
    if (category !== "" && status !== "") {
      activeCallBack(4);
    } else {
      return toast.error("Please fill out details before moving on to the next step");
    }
  };
  return (
    <div className="sidebar-body">
      <Form>
        <Row className="g-lg-4 g-3">
          <Col xs={12}>
            <Row className="g-3">
              <Col sm={6}>
                <Row className="g-2">
                  <Col xs={12}>
                    <Label className="m-0">{AddCategory}</Label>
                  </Col>
                  <Col xs={12}>
                    <Input type="select" name="category" value={category} onChange={updateFormData}>
                      {addCategoryItem.map((item, index) => (
                        <option key={index}>{item}</option>
                      ))}
                    </Input>
                    <P className="f-light">{"A product can be added to a category"}</P>
                  </Col>
                </Row>
              </Col>
              <ProductTag title={"Add Tag"} subTitle={true} />
              <NewCategoryModal />
            </Row>
          </Col>
          <Col xs={12}>
            <Row className="g-3">
              <Col sm={6}>
                <Row>
                  <Col xs={12}>
                    <Label>{PublishStatus}</Label>
                    <Input type="select" name="status" value={status} onChange={updateFormData}>
                      {publishStatusItem.map((item, index) => (
                        <option key={index}>{item}</option>
                      ))}
                    </Input>
                    <P className="f-light">{"Choose the status"}</P>
                  </Col>
                </Row>
              </Col>
              <ProductDate />
            </Row>
          </Col>
        </Row>
        <div className="product-buttons">
          <Btn color="transparent" className="me-1" onClick={() => activeCallBack(2)}>
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
