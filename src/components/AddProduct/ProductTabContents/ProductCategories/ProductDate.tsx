import React, { useState } from "react";
import { Col, InputGroup, Label, Row } from "reactstrap";
import ReactDatePicker from "react-datepicker";
import { PublishDateTime } from "../../../../utils/Constants";

export default function ProductDate() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };
  return (
    <Col sm={6}>
      <Row>
        <Col xs={12}>
          <Label>{PublishDateTime}</Label>
          <InputGroup className="flatpicker-calender product-date">
            <ReactDatePicker className="form-control" selected={selectedDate} onChange={handleDateChange} />
          </InputGroup>
        </Col>
      </Row>
    </Col>
  );
}
