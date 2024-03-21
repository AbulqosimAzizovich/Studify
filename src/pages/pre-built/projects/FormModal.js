import React, { useEffect } from "react";
import DatePicker from "react-datepicker";
import {
  Icon,
  Button,
  Col,
  RSelect,
} from "../../../components/Component";
import { teamList } from "./ProjectData";
import {
  Modal,
  ModalBody,
  Form
} from "reactstrap";
import { useForm } from "react-hook-form";

const FormModal = ({modal,closeModal,onSubmit, formData, setFormData, modalType}) => {

    useEffect(() => {
        reset(formData)
      }, [formData]);
  
  const { reset, register, handleSubmit, formState: { errors } } = useForm();

  return (
    <Modal isOpen={modal} toggle={() => closeModal()} className="modal-dialog-centered" size="lg">
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
            <h5 className="title">{modalType === "add" && "Add Project"} {modalType === "edit" && "Update Project"}</h5>
            <div className="mt-4">
              <Form className="row gy-4" onSubmit={handleSubmit(onSubmit)}>
                <Col md="6">
                  <div className="form-group">
                    <label className="form-label">Title</label>
                    <input
                      type="text"
                      {...register('title', { required: "This field is required" })}
                      value={formData.title}
                      placeholder="Enter Title"
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="form-control" />
                    {errors.title && <span className="invalid">{errors.title.message}</span>}
                  </div>
                </Col>
                <Col md="6">
                  <div className="form-group">
                    <label className="form-label">Client</label>
                    <input
                      type="text"
                      {...register('subtitle', { required: "This field is required" })}
                      value={formData.subtitle}
                      placeholder="Enter client name"
                      onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                      className="form-control" />
                    {errors.subtitle && <span className="invalid">{errors.subtitle.message}</span>}
                  </div>
                </Col>
                <Col size="12">
                  <div className="form-group">
                    <label className="form-label">Description</label>
                    <textarea
                      {...register('description', { required: "This field is required" })}
                      value={formData.description}
                      placeholder="Your description"
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="form-control-xl form-control no-resize" />
                    {errors.description && <span className="invalid">{errors.description.message}</span>}
                  </div>
                </Col>
                <Col md="6">
                  <div className="form-group">
                    <label className="form-label">Number of Tasks</label>
                    <input
                      type="number"
                      {...register('tasks', { required: "This field is required" })}
                      value={formData.tasks}
                      onChange={(e) => setFormData({ ...formData, tasks: e.target.value })}
                      className="form-control" />
                    {errors.tasks && <span className="invalid">{errors.tasks.message}</span>}
                  </div>
                </Col>
                <Col md="6">
                  <div className="form-group">
                    <label className="form-label">Total Tasks</label>
                    <input
                      type="number"
                      {...register('totalTask', { required: "This field is required" })}
                      value={formData.totalTask}
                      onChange={(e) => setFormData({ ...formData, totalTask: e.target.value })}
                      className="form-control" />
                    {errors.totalTask && <span className="invalid">{errors.totalTask.message}</span>}
                  </div>
                </Col>
                <Col md="6">
                  <div className="form-group">
                    <label className="form-label">Deadline Date</label>
                    <DatePicker
                      selected={formData.date}
                      className="form-control"
                      onChange={(date) => setFormData({ ...formData, date: date })}
                      minDate={new Date()}
                    />
                  </div>
                </Col>
                <Col md="6">
                  <div className="form-group">
                    <label className="form-label">Team Members</label>
                    <RSelect options={teamList} value={formData.team} isMulti onChange={(e) => setFormData({ ...formData, team: e })} />
                  </div>
                </Col>
                <Col md="6">
                  <div className="form-group">
                    <label className="form-label">Lead</label>
                    <RSelect options={formData.team} value={[{ value: formData.lead, label: formData.lead }]} onChange={(e) => setFormData({ ...formData, lead: e.value })} />
                  </div>
                </Col>
                <Col size="12">
                  <ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
                    <li>
                      <Button color="primary" size="md" type="submit">
                        {modalType === "add" && "Add Project"} {modalType === "edit" && "Update Project"}
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
export default FormModal;
