import React, {useEffect} from "react";
import {
  Modal,
  ModalBody,
  Form,
} from "reactstrap";
import {
  Icon,
  Col,
  Button,
  RSelect,
} from "../../../components/Component";
import { useForm } from "react-hook-form";


const EditModal = ({modal,closeModal,onSubmit, formData, setFormData,filterStatus}) => {
    useEffect(() => {
        reset(formData)
      }, [formData]);
  const {reset, register, handleSubmit, formState: { errors } } = useForm();
  return (
            
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
              <h5 className="title">Update User</h5>
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
                      <label className="form-label">Email</label>
                      <input
                        className="form-control"
                        type="text"
                        {...register('email', {
                          required: "This field is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "invalid email address",
                          },
                        })}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Enter email" />
                      {errors.email && <span className="invalid">{errors.email.message}</span>}
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="form-group">
                      <label className="form-label">Balance</label>
                      <input
                        className="form-control"
                        type="number"
                        {...register('balance')}
                        disabled
                        value={parseFloat(formData.balance)}
                        onChange={(e) => setFormData({ ...formData, balance: e.target.value })}
                        placeholder="Balance" />
                      {errors.balance && <span className="invalid">{errors.balance.message}</span>}
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="form-group">
                      <label className="form-label">Phone</label>
                      <input
                        className="form-control"
                        type="number"
                        {...register('phone', { required: "This field is required" })}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                      {errors.phone && <span className="invalid">{errors.phone.message}</span>}
                    </div>
                  </Col>
                  <Col md="12">
                    <div className="form-group">
                      <label className="form-label">Status</label>
                      <div className="form-control-wrap">
                        <RSelect
                          options={filterStatus}
                          value={{
                            value: formData.status,
                            label: formData.status,
                          }}
                          onChange={(e) => setFormData({ ...formData, status: e.value })}
                        />
                      </div>
                    </div>
                  </Col>
                  <Col size="12">
                    <ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
                      <li>
                        <Button color="primary" size="md" type="submit">
                          Update User
                        </Button>
                      </li>
                      <li>
                        <a
                          href="#cancel"
                          onClick={(ev) => {
                            ev.preventDefault();
                            closeModal();
                          }}
                          className="link link-light"
                        >
                          Cancel
                        </a>
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
export default EditModal;
