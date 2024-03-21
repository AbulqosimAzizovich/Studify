import React, { useState } from "react";
import { Col, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { Add, Cancel, CategoryName, CreateNewCategory } from "../../../../utils/Constants";
import ToolbarBox from "../Common/ToolbarBox";
import { Btn } from "../../../../AbstractElements";

export default function NewCategoryModal() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <Col xs={12}>
      <div className="category-buton">
        <Btn color="transparent" onClick={toggle}>
          <i className="me-2 fa fa-plus" /> {CreateNewCategory}{" "}
        </Btn>
      </div>
      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle}>{CreateNewCategory}</ModalHeader>
        <ModalBody className="custom-input">
          <div className="create-category">
            <div>
              <Label>
                {CategoryName} <span className="txt-danger">{"*"}</span>
              </Label>
              <Input className="mb-2" type="text" required />
              <ToolbarBox paragraph={"Improve product visibility by adding a compelling description."} />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Btn color="light" onClick={toggle}>
            {Cancel}
          </Btn>
          <Btn color="primary" onClick={toggle}>
            {Add}
          </Btn>
        </ModalFooter>
      </Modal>
    </Col>
  );
}
