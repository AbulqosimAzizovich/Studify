import React from "react";
import DatePicker from "react-datepicker";
import { Icon, RSelect, Col } from "../../../../components/Component";
import { useForm } from "react-hook-form";
import { ModalBody,  Button } from "reactstrap";
import { getDateStructured } from "../../../../utils/Utils";
import data, { dateFormat, languageOptions, timezoneFormat } from "../Data";

const ProfileUpdate = ({ formData, setFormData, setModal }) => {
  const submitForm = (formVal) => {
    let newForm = {
      name: formVal.name,
      displayName: formVal.displayName,
      email: formVal.email,
      phone: formVal.phone,
      dob: formData.dob,
      language: formData.language,
      dateFormat: formData.dateFormat,
      timezone: formData.timezone,
    };
    setFormData({ ...newForm });
    setModal(false);
  };

  const {  register, handleSubmit, formState: { errors } } = useForm();

  return (
    <React.Fragment>
      <ModalBody>
        <a
          href="#dropdownitem"
          onClick={(ev) => {
            ev.preventDefault();
            setModal(false);
          }}
          className="close"
        >
          <Icon name="cross-sm"></Icon>
        </a>
        <div className="p-2">
          <h5 className="title">Update Profile</h5>
          <div className="mt-4">
            <form className="row gy-4" onSubmit={handleSubmit(submitForm)}>
              <Col md="6">
                <div className="form-group">
                  <label className="form-label" htmlFor="fm-name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="fm-name"
                    className="form-control"
                    {...register('name', { required: true })}
                    defaultValue={formData.name}
                    placeholder="Enter name" />
                  {errors.name && <p className="invalid">This field is required</p>}
                </div>
              </Col>
              <Col md="6">
                <div className="form-group">
                  <label className="form-label" htmlFor="fm-display-name">
                    Display Name
                  </label>
                  <input
                    type="text"
                    id="fm-display-name"
                    className="form-control"
                    {...register('displayName', { required: true })}
                    defaultValue={formData.displayName}
                    placeholder="Enter display name" />
                  {errors.displayName && <p className="invalid">This field is required</p>}
                </div>
              </Col>
              <Col md="6">
                <div className="form-group">
                  <label className="form-label" htmlFor="fm-email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="fm-email"
                    className="form-control"
                    {...register('email', {
                      required: true,
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    defaultValue={formData.email}
                    placeholder="Enter recovery email" />
                  {errors.email && errors.email.type === "required" && (
                    <span className="invalid">This is required</span>
                  )}
                  {errors.email && errors.email.type === "pattern" && (
                    <span className="invalid">{errors.email.message}</span>
                  )}
                </div>
              </Col>
              <Col md="6">
                <div className="form-group">
                  <label className="form-label" htmlFor="phone-no">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    id="phone-no"
                    className="form-control"
                    {...register('phone')}
                    defaultValue={formData.phone}
                    placeholder="Phone Number" />
                  {errors.phone && <p className="invalid">This field is required</p>}
                </div>
              </Col>
              <Col md="6">
                <div className="form-group">
                  <label className="form-label" htmlFor="birth-day">
                    Date of Birth
                  </label>
                  <DatePicker
                    selected={new Date(formData.dob)}
                    className="form-control"
                    onChange={(date) => setFormData({ ...formData, dob: getDateStructured(date) })}
                    maxDate={new Date()}
                  />
                </div>
              </Col>
              <Col md="6">
                <div className="form-group">
                  <label className="form-label" htmlFor="birth-day">
                    Language
                  </label>
                  <RSelect
                    options={data.languageOptions}
                    defaultValue={data.languageOptions[0]}
                    onChange={(e) => setFormData({ ...formData, language: e.value })}
                  />
                </div>
              </Col>
              <Col md="6">
                <div className="form-group">
                  <label className="form-label" htmlFor="birth-day">
                    Date Format
                  </label>
                  <RSelect
                    options={data.dateFormat}
                    defaultValue={data.dateFormat[0]}
                    onChange={(e) => setFormData({ ...formData, dateFormat: e.value })}
                  />
                </div>
              </Col>
              <Col md="6">
                <div className="form-group">
                  <label className="form-label" htmlFor="birth-day">
                    Timezone
                  </label>
                  <RSelect
                    options={data.timezoneFormat}
                    defaultValue={data.timezoneFormat[0]}
                    onChange={(e) => setFormData({ ...formData, timezone: e.value })}
                  />
                </div>
              </Col>
              <Col size="12">
                <ul className="align-center flex-wrap flex-sm-nowrap gx-4 gy-2">
                  <li>
                    <Button color="primary" size="md" type="submit">
                      Update Profile
                    </Button>
                  </li>
                  <li>
                    <a
                      href="#dropdownitem"
                      onClick={(ev) => {
                        ev.preventDefault();
                        setModal(false);
                      }}
                      className="link link-light"
                    >
                      Cancel
                    </a>
                  </li>
                </ul>
              </Col>
            </form>
          </div>
        </div>
      </ModalBody>
    </React.Fragment>
  );
};

export default ProfileUpdate;
