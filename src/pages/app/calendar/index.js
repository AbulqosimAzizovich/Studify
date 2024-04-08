import React, { useState, useEffect } from "react";
import ContentAlt from "../../../layout/content/ContentAlt";
import Head from "../../../layout/head/Head";
import CalenderApp from "../../../components/partials/calender/Calender";
import DatePicker from "react-datepicker";
import { Modal, ModalBody, ModalHeader, Button } from "reactstrap";
import {
  Block,
  BlockBetween,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Col,
  Icon,
  PreviewAltCard,
  Row,
  RSelect,
} from "../../../components/Component";
import { eventOptions, events } from "../../../components/partials/calender/CalenderData";
import { useForm } from "react-hook-form";
import { setDateForPicker } from "../../../utils/Utils";

const Calender = () => {
  const [modal, setModal] = useState(false);
  const [mockEvents, updateEvent] = useState(events);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    startDate: new Date(),
    startTime: new Date(),
    endTime: new Date(),
    endDate: new Date(),
    theme: {
      value: "fc-event-primary",
      label: "Company",
    },
  });
  const [theme, settheme] = useState("");
  const toggle = () => {
    setModal(!modal);
  };
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const resetForm = () => {
    setFormData({
      title: "",
      description: "",
      startDate: new Date(),
      startTime: new Date(),
      endTime: new Date(),
      endDate: new Date(),
      theme: {
        value: "fc-event-primary",
        label: "Company",
      },
    });
  };

  const onFormCancel = () => {
    setModal(false);
    resetForm();
  };
  const handleFormSubmit = (form) => {
    let newEvent = {
      id: "default-event-id-" + Math.floor(Math.random() * 9999999),
      title: formData.title,
      start: setDateForPicker(formData.startDate),
      end: setDateForPicker(formData.endDate),
      description: formData.description,
      className: theme.value,
      type: theme,
    };
    updateEvent([...mockEvents, newEvent]);
    settheme({
      value: "fc-event-primary",
      label: "Company",
    });
    toggle();
    resetForm();
  };

  const editEvent = (formData) => {
    let newEvents = mockEvents;
    const index = newEvents.findIndex((item) => item.id === formData.id);
    events[index] = formData;
    updateEvent([...events]);
  };

  const deleteEvent = (id) => {
    let filteredEvents = mockEvents.filter((item) => item.id !== id);
    updateEvent(filteredEvents);
  };

  useEffect(() => {
    reset(formData);
  }, [formData]);

  return (
    <React.Fragment>
      <Head title="Calender" />
      <ContentAlt>
        <Block>
          <PreviewAltCard className="bg-white" bodyClass="py-3 border-bottom border-light rounded-0">
            <BlockHead size="sm">
              <BlockBetween>
                <BlockHeadContent>
                  <BlockTitle page>Calendar</BlockTitle>
                </BlockHeadContent>
                <BlockHeadContent>
                  <Button color="primary" onClick={toggle}>
                    <Icon name="plus" />
                    <span>Add Event</span>
                  </Button>
                </BlockHeadContent>
              </BlockBetween>
            </BlockHead>
          </PreviewAltCard>

          <PreviewAltCard className="mt-0">
            <CalenderApp events={mockEvents} onDelete={deleteEvent} onEdit={editEvent} />
          </PreviewAltCard>
        </Block>
      </ContentAlt>

      <Modal isOpen={modal} toggle={() => onFormCancel()} className="modal-md">
        <ModalHeader toggle={() => onFormCancel()}>Add Event</ModalHeader>
        <ModalBody>
          <form className="form-validate is-alter" onSubmit={handleSubmit(handleFormSubmit)}>
            <Row className="gx-4 gy-3">
              <Col size="12">
                <div className="form-group">
                  <label className="form-label" htmlFor="event-title">
                    Event Title
                  </label>
                  <div className="form-control-wrap">
                    <input
                      type="text"
                      id="event-title"
                      {...register("title", { required: true })}
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="form-control"
                    />
                    {errors.title && <p className="invalid">This field is required</p>}
                  </div>
                </div>
              </Col>
              <Col sm="6">
                <div className="form-group">
                  <label className="form-label">Start Date &amp; Time</label>
                  <Row className="gx-2">
                    <div className="w-55">
                      <div className="form-control-wrap">
                        <DatePicker
                          selected={formData.startDate}
                          onChange={(date) => setFormData({ ...formData, startDate: date })}
                          className="form-control date-picker"
                        />
                      </div>
                    </div>
                    <div className="w-45">
                      <div className="form-control-wrap has-timepicker">
                        <DatePicker
                          selected={formData.startTime}
                          onChange={(date) => setFormData({ ...formData, startTime: date })}
                          showTimeSelect
                          showTimeSelectOnly
                          timeIntervals={15}
                          timeCaption="Time"
                          dateFormat="h:mm aa"
                          className="form-control date-picker"
                        />
                      </div>
                    </div>
                  </Row>
                </div>
              </Col>
              <Col sm="6">
                <div className="form-group">
                  <label className="form-label">End Date &amp; Time</label>
                  <Row className="gx-2">
                    <div className="w-55">
                      <div className="form-control-wrap">
                        <DatePicker
                          selected={formData.endDate}
                          onChange={(date) => setFormData({ ...formData, endDate: date })}
                          className="form-control date-picker"
                          minDate={formData.startDate}
                        />
                      </div>
                    </div>
                    <div className="w-45">
                      <div className="form-control-wrap has-timepicker">
                        <DatePicker
                          selected={formData.endTime}
                          onChange={(date) => setFormData({ ...formData, endTime: date })}
                          showTimeSelect
                          showTimeSelectOnly
                          timeIntervals={15}
                          timeCaption="Time"
                          dateFormat="h:mm aa"
                          className="form-control date-picker"
                        />
                      </div>
                    </div>
                  </Row>
                </div>
              </Col>
              <Col size="12">
                <div className="form-group">
                  <label className="form-label" htmlFor="event-description">
                    Event Description
                  </label>
                  <div className="form-control-wrap">
                    <textarea
                      className="form-control"
                      id="event-description"
                      {...register("description", { required: true })}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    ></textarea>

                    {errors.description && <p className="invalid">This field is required</p>}
                  </div>
                </div>
              </Col>
              <Col size="12">
                <div className="form-group">
                  <label className="form-label">Event Category</label>
                  <div className="form-control-wrap">
                    <RSelect
                      options={eventOptions}
                      value={formData.theme}
                      onChange={(selected) => setFormData({ ...formData, theme: selected })}
                    />
                  </div>
                </div>
              </Col>
              <Col size="12">
                <ul className="d-flex justify-content-between gx-4 mt-1">
                  <li>
                    <Button type="submit" color="primary">
                      Add Event
                    </Button>
                  </li>
                  <li>
                    <Button color="danger" className="btn-dim" onClick={() => onFormCancel()}>
                      Discard
                    </Button>
                  </li>
                </ul>
              </Col>
            </Row>
          </form>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
};
export default Calender;
