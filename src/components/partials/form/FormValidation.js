import React from "react";
import { Row, Col,  Label, Form } from "reactstrap";
import { useForm } from "react-hook-form";
import { Button } from "../../../components/Component";
import classNames from "classnames";

const FormValidationComponent = ({ alter, id }) => {
  const {  register, handleSubmit, formState: { errors } } = useForm();
  const onFormSubmit = (e) => {};
  const formClass = classNames({
    "form-validate": true,
    "is-alter": alter,
  });

  return (
    <React.Fragment>
      <Form className={formClass} onSubmit={handleSubmit(onFormSubmit)}>
        <Row className="g-gs">
          <Col md="6">
            <div className="form-group">
              <Label className="form-label" htmlFor="fv-full-name">
                Full Name
              </Label>
              <div className="form-control-wrap">
                <input
                  type="text"
                  id="fv-full-name"
                  {...register('fullname', { required: true })}
                  className="form-control" />
                {errors.fullname && <span className="invalid">This field is required</span>}
              </div>
            </div>
          </Col>
          <Col md="6">
            <div className="form-group">
              <Label className="form-label" htmlFor="fv-email">
                Email address
              </Label>
              <div className="form-control-wrap">
                <input
                  type="email"
                  id="fv-email"
                  {...register('email', {
                    required: true,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className="form-control" />
                {errors.email && errors.email.type === "required" && <span className="invalid">This is required</span>}
                {errors.email && errors.email.type === "pattern" && (
                  <span className="invalid">{errors.email.message}</span>
                )}
              </div>
            </div>
          </Col>
          <Col md="6">
            <div className="form-group">
              <Label className="form-label" htmlFor="fv-subject">
                Subject
              </Label>
              <div className="form-control-wrap">
                <input
                  type="text"
                  id="fv-subject"
                  {...register('subject', { required: true })}
                  className="form-control" />
                {errors.subject && <span className="invalid">This field is required</span>}
              </div>
            </div>
          </Col>
          <Col md="6">
            <div className="form-group">
              <Label className="form-label" htmlFor="fv-topics">
                Topics
              </Label>
              <div className="form-control-wrap">
                <div className="form-control-select">
                  <select
                    className="form-control form-select"
                    id="fv-topics"
                    {...register('topics', {
                      required: true,
                    })}
                    placeholder="Select a option">
                    <option label="Select a topic" value=""></option>
                    <option value="fv-gq">General Question</option>
                    <option value="fv-tq">Tachnical Question</option>
                    <option value="fv-ab">Account &amp; Billing</option>
                  </select>
                  {errors.topics && <span className="invalid">This field is required</span>}
                </div>
              </div>
            </div>
          </Col>
          <Col md="12">
            <div className="form-group">
              <Label className="form-label" htmlFor="fv-message">
                Message
              </Label>
              <div className="form-control-wrap">
                <textarea
                  type="textarea"
                  className="form-control form-control-sm"
                  id="fv-message"
                  {...register('message', {
                    required: true,
                  })}
                  placeholder="Write your message" />
                {errors.message && <span className="invalid">This field is required</span>}
              </div>
            </div>
          </Col>
          <Col md="12">
            <div className="form-group">
              <Label className="form-label">Communication</Label>
              <ul className="custom-control-group g-3 align-center">
                <li>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="form-control custom-control-input"
                      id={id + " fv-com-email"}
                      {...register('com', {
                        required: true,
                      })}
                      value="email" />
                    <Label className="custom-control-label" htmlFor={id + " fv-com-email"}>
                      Email
                    </Label>
                    {errors.com && (
                      <span id="fv-com-error" className="invalid">
                        This field is required
                      </span>
                    )}
                  </div>
                </li>
                <li>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="form-control custom-control-input"
                      id={id + " fv-com-sms"}
                      name="com"
                      value="sms"
                    />
                    <Label className="custom-control-label" htmlFor={id + " fv-com-sms"}>
                      SMS
                    </Label>
                  </div>
                </li>
                <li>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id={id + " fv-com-phone"}
                      name="com"
                      value="phone"
                    />
                    <Label className="custom-control-label" htmlFor={id + " fv-com-phone"}>
                      {" "}
                      Phone{" "}
                    </Label>
                  </div>
                </li>
              </ul>
            </div>
          </Col>
          <Col md="12">
            <div className="form-group">
              <Button color="primary" size="lg">
                Save Information
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </React.Fragment>
  );
};
export default FormValidationComponent;
