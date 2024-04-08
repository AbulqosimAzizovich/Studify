import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import bootstrapPlugin from "@fullcalendar/bootstrap5";
import DatePicker from "react-datepicker";
import {
  Popover,
  PopoverHeader,
  PopoverBody,
  ModalHeader,
  Modal,
  ModalBody,
  Button,
  ButtonGroup,
  ButtonToggle,
  Badge,
} from "reactstrap";
import { useForm } from "react-hook-form";
import { Col, Row, RSelect } from "../../Component";
import { setDateForPicker } from "../../../utils/Utils";
import { eventOptions, returnDate } from "./CalenderData";
import { Drawer, Select } from "antd";

const EventView = (event) => {
  const [mouseEnter, setMouseEnter] = useState(false);
  const { title, extendedProps, publicId } = event.event.event._def;
  return (
    <React.Fragment>
      <div id={publicId} onMouseEnter={() => setMouseEnter(true)} onMouseLeave={() => setMouseEnter(false)}>
        {title}
      </div>{" "}
      <Popover placement="bottom" isOpen={mouseEnter} target={publicId}>
        <PopoverHeader>{title}</PopoverHeader>
        <PopoverBody>{extendedProps.description}</PopoverBody>
      </Popover>
    </React.Fragment>
  );
};

const CalenderApp = ({ events, onDelete, onEdit }) => {
  const [modalState, updateModal] = useState(false);
  const [mockEvents, updateEvents] = useState(events);
  const [event, updateEvent] = useState({});
  const [theme, settheme] = useState();
  const [edit, updateEditModal] = useState(false);
  const [dates, setDates] = useState({
    startDate: new Date(),
    startTime: new Date(),
    endTime: new Date(),
    endDate: new Date(),
  });

  useEffect(() => {
    updateEvents(events);
  }, [events]);

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (formData) => {
    let newEvent = {};
    newEvent = {
      id: event.id,
      className: theme.value,
      type: theme,
      title: formData.title,
      start: event.start,
      end: event.end,
      description: formData.description,
    };
    onEdit(newEvent);
    settheme("");
    toggleEdit();
  };

  const toggle = () => {
    updateModal(!modalState);
  };

  const toggleEdit = () => {
    updateEditModal(!edit);
  };

  const handleEventClick = (info) => {
    const event = events.find((item) => item.id === info.event._def.publicId);
    updateEvent(event);
    settheme(event.type);
    toggle();
  };

  useEffect(() => {
    reset(event);
  }, [event]);

  // const filterCalendar = (category) => {
  //   const filteredEvents = mockEvents?.filter((v) => v.type?.label === category);
  //   updateEvents(filteredEvents);

  //   category === "all" && updateEvents(events);
  // };

  let seen = {};
  let filteredCalendarEvents = events.filter((obj) => {
    let key = JSON.stringify(obj.type.label);
    return seen.hasOwnProperty(key) ? false : (seen[key] = true);
  });
  const options = [];
  for (let i = 0; i < filteredCalendarEvents.length; i++) {
    options.push({
      label: (
        <Badge style={{ padding: "0px 7px" }} color={filteredCalendarEvents[i]?.type?.value?.slice(9)}>
          {filteredCalendarEvents[i].type.label}
        </Badge>
      ),
      value: filteredCalendarEvents[i].type.label,
    });
  }
  const handleChange = (category) => {
    const filteredEvents = events?.filter((v) => v.type.label === category?.find((a) => a == v?.type?.label));

    updateEvents(filteredEvents);
    console.log(filteredEvents, category);
    category.length < 1 && updateEvents(events);
  };
  return (
    <React.Fragment>
      <div className="d-flex w-100">
        <div
          className="d-flex flex-column align-items-start gap-1"
          style={{ marginRight: "40px", marginTop: "60px" }}
          color="white"
        >
          <h6>Filtering categories</h6>
          <Select
            mode="multiple"
            allowClear
            style={{
              width: "155px",
            }}
            placeholder="Select categories"
            onChange={handleChange}
            options={options}
          />
        </div>
        <div className="w-100">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, listPlugin, bootstrapPlugin]}
            events={mockEvents}
            eventClick={(info) => handleEventClick(info)}
            initialView="dayGridMonth"
            headerToolbar={{
              left: "title prev,next",
              center: null,
              right: "today dayGridMonth,timeGridWeek,timeGridDay,listWeek",
            }}
            themeSystem="bootstrap5"
            height={800}
            contentHeight={780}
            eventContent={(e) => <EventView event={e} />}
            aspectRatio={3}
            editable={true}
            droppable={true}
          />
        </div>
      </div>

      <Drawer width={600} open={modalState} onClose={toggle}>
        <h6 className="mb-3">Event info</h6>

        <h4 className="mb-3">{event && event.title}</h4>

        <div className="d-flex align-items-center justify-between mb-5 mt-4">
          <div>
            <h6 className="overline-title">Start Time</h6>
            <p id="preview-event-start">{event && returnDate(event.start)}</p>
          </div>
          <div>
            <h6 className="overline-title">End Time</h6>
            <p id="preview-event-end">{event && returnDate(event.end)}</p>
          </div>
        </div>
        <h6 className="overline-title">Description</h6>
        <p id="preview-event-description">{event && event.description}</p>

        <ul className="d-flex justify-content-between gx-4 mt-3">
          <li>
            <Button
              color="primary"
              onClick={() => {
                toggle();
                toggleEdit();
              }}
            >
              Edit Event
            </Button>
          </li>
          <li>
            <Button
              color="danger"
              className="btn-dim"
              onClick={() => {
                toggle();
                onDelete(event && event.id);
              }}
            >
              Delete
            </Button>
          </li>
        </ul>
      </Drawer>
      <Drawer width={600} open={edit} onClose={toggleEdit}>
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
                    className="form-control"
                    value={event.title}
                    onChange={(e) => updateEvent({ ...event, title: e.target.value })}
                  />
                  {errors.title && <p className="invalid">This field is required</p>}
                </div>
              </div>
            </Col>

            <div className="form-group">
              <label className="form-label mb-3">Start Date &amp; Time</label>
              <div className="d-flex align-items-center gap-3 w-100">
                <div className="w-100">
                  <DatePicker
                    selected={new Date(event.start)}
                    onChange={(date) => updateEvent({ ...event, start: setDateForPicker(date) })}
                    className="form-control w-100"
                  />
                </div>

                <div className="has-timepicker w-100">
                  <DatePicker
                    selected={dates.startTime}
                    onChange={(date) => setDates({ ...dates, startTime: date })}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                    className="form-control w-100"
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label mb-3">End Date &amp; Time</label>

              <div className="d-flex align-items-center gap-3">
                <div className="w-100">
                  <DatePicker
                    selected={new Date(event.end)}
                    onChange={(date) => updateEvent({ ...event, end: setDateForPicker(date) })}
                    className="form-control w-100"
                  />
                </div>

                <div className="has-timepicker w-100">
                  <DatePicker
                    selected={dates.endTime}
                    onChange={(date) => setDates({ ...dates, endTime: date })}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                    className="form-control w-100"
                  />
                </div>
              </div>
            </div>

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
                    value={event.description}
                    onChange={(e) => updateEvent({ ...event, description: e.target.value })}
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
                    defaultValue={event.type}
                    onChange={(e) => settheme(e)}
                    //ref={register({ required: true })}
                  />
                </div>
              </div>
            </Col>
            <Col size="12">
              <ul className="d-flex justify-content-between gx-4 mt-1">
                <li>
                  <Button type="submit" color="primary">
                    Update Event
                  </Button>
                </li>
                <li>
                  <Button color="danger" className="btn-dim" onClick={toggleEdit}>
                    Discard
                  </Button>
                </li>
              </ul>
            </Col>
          </Row>
        </form>
      </Drawer>
    </React.Fragment>
  );
};

export default CalenderApp;
