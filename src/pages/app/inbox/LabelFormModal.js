import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Icon, Button, RSelect } from "../../../components/Component";
import { colourOptions } from "./InboxData";
import { ColorOptions } from "../../../components/partials/color-select-menu/ColorMenu";
import {
  Modal,
  ModalBody,
  Col,
Form
} from "reactstrap";

const LabelFormModal = ({modal,modalAction,closeModal,onSubmit, formData, setFormData}) => {

  const { reset, register, handleSubmit, formState: { errors } } = useForm();

  useEffect(() => {
    reset(formData)
  }, [formData])
  
  return (
    
      <Modal isOpen={modal} toggle={() => closeModal()}>
        <ModalBody>
          <a
            href="#cancel"
            onClick={(ev) => {
              ev.preventDefault();
              closeModal();
            }}
            className="close"
          >
            <Icon name="cross-sm"></Icon>
          </a>
          <div className="p-2">
            <h5 className="title">{modalAction === "add" && "Add Label"}{modalAction === "edit" && "Edit Label"}</h5>
            <div className="mt-4">
              <Form className="row gy-4" onSubmit={handleSubmit(onSubmit)}>
                <Col className="col-12">
                  <div className="form-group">
                    <label className="form-label">Label Text</label>
                    <input
                      type="text"
                      {...register('label', { required: "This field is required" })}
                      value={formData.label}
                      onChange={(e) => {setFormData({...formData, label:e.target.value})}}
                      className="form-control" />
                    {errors.label && <span className="invalid">{errors.label.message}</span>}
                  </div>
                </Col>
                <Col className="col-12">
                  <div className="form-group">
                    <label className="form-label">Select Color</label>
                    <div className="form-control-select">
                        <RSelect
                          options={colourOptions}
                          formatOptionLabel={ColorOptions}
                          defaultValue={formData.theme}
                          onChange={(e) => setFormData({ ...formData, theme: e }) }
                        />
                    </div>
                  </div>
                </Col>
                <Col className="col-12">
                  <ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
                    <li>
                      <Button color="primary" size="md" type="submit">
                      {modalAction === "add" && "Add Label"}{modalAction === "edit" && "Update Label"}
                      </Button>
                    </li>
                    <li>
                      <Button
                        onClick={(ev) => {
                          ev.preventDefault();
                          closeModal();
                        }}
                        className="link link-light"
                      >
                        Cancel
                      </Button>
                    </li>
                  </ul>
                </Col>
              </Form>
            </div>
          </div>
        </ModalBody>
      </Modal>
  );
};

export default LabelFormModal;
