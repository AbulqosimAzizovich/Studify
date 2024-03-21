import React, { useEffect } from "react";
import {
  Form,
  Modal,
  ModalBody,
} from "reactstrap";
import {
  Icon,
  Col,
  Button,
} from "../../../components/Component";
import { useForm } from "react-hook-form";

const CardFormModal = ({modal,closeModal,onSubmit, formData, setFormData,modalType}) => {
    useEffect(() => {
        reset(formData)
    }, [formData]);
    const { reset, register, handleSubmit, formState: { errors } } = useForm();
  return <>
      <Modal isOpen={modal} toggle={() => closeModal()} className="modal-dialog-centered" size="lg">
        <ModalBody>
          <a
            href="#cancel"
            onClick={(ev) => {
              ev.preventDefault();
              closeModal()
            }}
            className="close"
          >
            <Icon name="cross-sm"></Icon>
          </a>
          <div className="p-2">
            <h5 className="title">{modalType === "add" && "Add User"} {modalType === "edit" && "Update User"}</h5>
            <div className="mt-4">
              <Form className="row gy-4" onSubmit={handleSubmit(onSubmit)}>
                <Col md="6">
                  <div className="form-group">
                    <label className="form-label">Name</label>
                    <input
                      className="form-control"
                      type="text"
                      {...register('name', { required: "This field is required" })}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter name" />
                    {errors.name && <span className="invalid">{errors.name.message}</span>}
                  </div>
                </Col>
                <Col md="6">
                  <div className="form-group">
                    <label className="form-label"> Designation </label>
                    <input
                      className="form-control"
                      type="text"
                      {...register('designation', { required: "This field is required" })}
                      value={formData.designation}
                      onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                      placeholder="Enter Designation" />
                    {errors.designation && <span className="invalid">{errors.designation.message}</span>}
                  </div>
                </Col>
                <Col md="4">
                  <div className="form-group">
                    <label className="form-label">Projects</label>
                    <input
                      className="form-control"
                      type="number"
                      {...register('projects', { required: "This field is required" })}
                      value={formData.projects} 
                      onChange={(e) => setFormData({ ...formData, projects: e.target.value })}
                      />
                    {errors.projects && <span className="invalid">{errors.projects.message}</span>}
                  </div>
                </Col>
                <Col md="4">
                  <div className="form-group">
                    <label className="form-label">Performed</label>
                    <input
                      className="form-control"
                      type="number"
                      {...register('performed', { required: "This field is required" })}
                      value={formData.performed} 
                      onChange={(e) => setFormData({ ...formData, performed: e.target.value })}
                      />
                    {errors.performed && <span className="invalid">{errors.performed.message}</span>}
                  </div>
                </Col>
                <Col md="4">
                  <div className="form-group">
                    <label className="form-label">Tasks</label>
                    <input
                      className="form-control"
                      type="number"
                      {...register('tasks', { required: "This field is required" })}
                      value={formData.tasks}
                      onChange={(e) => setFormData({ ...formData, tasks: e.target.value })}
                       />
                    {errors.tasks && <span className="invalid">{errors.tasks.message}</span>}
                  </div>
                </Col>
                <Col size="12">
                  <ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
                    <li>
                      <Button type="submit" color="primary" size="md">
                      {modalType === "add" && "Add User"} {modalType === "edit" && "Update User"}
                      </Button>
                    </li>
                    <li>
                      <Button
                        onClick={(ev) => {
                          ev.preventDefault();
                          closeModal()
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
  </>;
};
export default CardFormModal;
