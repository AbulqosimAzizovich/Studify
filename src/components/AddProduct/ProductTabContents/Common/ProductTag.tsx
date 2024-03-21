import React, { useState } from "react";
import { Col, Label, Row } from "reactstrap";
import TagsInput from "react-tagsinput";
import { productTagItem } from "../../../../Data/AppsData/EcommerceData/ProductData";
import { P } from "../../../../AbstractElements";
import { ProductTagProp } from "../../../../Types/EcommerceType";

export default function ProductTag({ title, subTitle }: ProductTagProp) {
  const [tags, setTags] = useState(productTagItem);
  const handleTagsChange = (newTags: string[]) => {
    setTags(newTags);
  };
  return (
    <Col sm={6}>
      <Row className="g-2 product-tag">
        <Col xs={12}>
          <Label className="d-block m-0">{title}</Label>
        </Col>
        <Col xs={12}>
          <TagsInput value={tags} onChange={handleTagsChange} />
          {subTitle && <P className="f-light">{"Products can be tagged"}</P>}
        </Col>
      </Row>
    </Col>
  );
}
