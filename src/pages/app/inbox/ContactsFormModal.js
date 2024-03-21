import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Icon, Button } from "../../../components/Component";
import {
  Modal,
  ModalBody,
  Col,
} from "reactstrap";

const ContactsFormModal = ({modal,closeModal,onSubmit, formData, setFormData}) => {

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
            <h5 className="title">Add Contact</h5>
            <div className="mt-4">
              <form className="row gy-4" onSubmit={handleSubmit(onSubmit)}>
                <Col className="col-12">
                  <div className="form-group">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      {...register('name', { required: "This field is required" })}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value }) }
                      className="form-control" />
                    {errors.name && <span className="invalid">{errors.name.message}</span>}
                  </div>
                </Col>
                <Col className="col-12">
                  <div className="form-group">
                    <label className="form-label">Designation</label>
                    <input
                      type="text"
                      {...register('designation', { required: "This field is required" })}
                      value={formData.designation}
                      onChange={(e) => setFormData({ ...formData, designation: e.target.value }) }
                      className="form-control" />
                    {errors.designation && <span className="invalid">{errors.designation.message}</span>}
                  </div>
                </Col>
                <Col className="col-12">
                  <div className="form-group">
                    <label className="form-label">Mail Address</label>
                    <input
                      type="email"
                      {...register('mail', {
                        required: true,
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      value={formData.mail}
                      onChange={(e) => setFormData({ ...formData, mail: e.target.value }) }
                      className="form-control" />
                    {errors.mail && errors.mail.type === "required" && (
                      <span className="invalid">This is required</span>
                    )}
                    {errors.mail && errors.mail.type === "pattern" && (
                      <span className="invalid">{errors.mail.message}</span>
                    )}
                  </div>
                </Col>
                <Col className="col-12">
                  <ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
                    <li>
                      <Button color="primary" size="md" type="submit">
                        Add Contact
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
              </form>
            </div>
          </div>
        </ModalBody>
      </Modal>
  );
};

export default ContactsFormModal;
