import React from "react";
import IntlMessages from "../../../../medify/helpers/IntlMessages";
// import { useIntl } from "react-intl";
import PropTypes from "prop-types";
import { Col, Form, Input, Select } from "antd";
import AppRowContainer from "../../../../medify/components/AppRowContainer";
import { useAuthUser } from "../../../../medify/hooks/AuthHooks";
import {
  StyledAddTaskFormDate,
  StyledSelectRow,
  StyledTodoAddTaskForm,
  StyledTodoInput,
  StyledTodoModalFooter,
  StyledTodoModelBtn,
  StyledTodoModelContent,
  StyledTodoSelectAvatar,
  StyledTodoSelectName,
} from "./index.styled";
import { postDataApi } from "../../../../medify/hooks/APIHooks";
import { useInfoViewActionsContext } from "../../../../medify/context/AppContextProvider/InfoViewContextProvider";
import { CalendarContext, CalendarActionsContext } from "../../context/CalendarContextProvider";
import { getFormattedDate } from "../../../../medify/helpers/DateHelper";
import { generateRandomUniqueNumber } from "../../../../medify/helpers/Common";

const AddTaskForm = ({ onCloseAddTask }) => {
  const { labelList, priorityList, staffList } = CalendarContext();
  const { reCallAPI } = CalendarActionsContext();

  const [form] = Form.useForm();
  const infoViewActionsContext = useInfoViewActionsContext();
  const { user } = useAuthUser();

  const onFinish = (values) => {
    const staff = staffList.find((staff) => staff.id === +values.staffList);

    const priority = priorityList.find((label) => +values.priorityList === label.id);
    const label = labelList.filter((label) => values.labelList.includes(label.id));

    const newTask = {
      ...values,
      id: generateRandomUniqueNumber(),
      isStarred: false,
      hasAttachments: false,
      sentAt: "10.30am",
      isRead: true,
      folderValue: 120,
      createdBy: {
        name: user.displayName ? user.displayName : "user",
        image: user.photoURL ? user.photoURL : "/assets/images/dummy2.jpg",
      },
      startDate: getFormattedDate(values.dateRange[0]),
      endDate: getFormattedDate(values.dateRange[1]),
      assignedTo: staff,
      status: 1002,
      comments: [],
      label: label,
      priority: priority,
    };
    postDataApi("/api/calendar/compose", infoViewActionsContext, {
      task: newTask,
    })
      .then(() => {
        form.resetFields();
        reCallAPI();
        infoViewActionsContext.showMessage("New Task has been created successfully!");
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });

    onCloseAddTask();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    onCloseAddTask(true);
  };

  // const { messages } = //;

  const { Option } = Select;

  return (
    <StyledTodoAddTaskForm name="basic" form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
      <StyledTodoModelContent>
        <Form.Item
          className="form-field"
          name="title"
          rules={[{ required: true, message: "Please input your Task Title!" }]}
        >
          {/* placeholder={messages["todo.taskTitle"]} */}
          <StyledTodoInput />
        </Form.Item>
        {/* placeholder={messages["common.staff"]} */}
        <AppRowContainer>
          <Col xs={24} sm={12} md={8}>
            <Form.Item name="staffList" className="form-field">
              <Select>
                {staffList.map((staff) => {
                  return (
                    <Option value={staff.id} key={staff.id}>
                      <StyledSelectRow>
                        {staff.image ? (
                          <StyledTodoSelectAvatar src={staff.image} />
                        ) : (
                          <StyledTodoSelectAvatar>{staff.name.toUpperCase()}</StyledTodoSelectAvatar>
                        )}
                        <StyledTodoSelectName className="text-truncate">{staff.name}</StyledTodoSelectName>
                      </StyledSelectRow>
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>
          </Col>

          <Col xs={24} sm={12} md={8}>
            <Form.Item className="form-field" name="dateRange">
              <StyledAddTaskFormDate />
            </Form.Item>
          </Col>

          <Col xs={24} sm={12} md={8}>
            <Form.Item className="form-field" name="priorityList">
              {/* placeholder={messages["common.priority"]} */}
              <Select>
                {priorityList.map((priority) => {
                  return (
                    <Option value={priority.id} key={priority.id}>
                      {priority.name}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>
          </Col>

          <Col xs={24} sm={12} md={8}>
            <Form.Item className="form-field" name="labelList">
              {/* placeholder={messages["common.label"]} */}
              <Select mode="multiple" maxTagCount={2}>
                {labelList.map((label) => {
                  return (
                    <Option value={label.id} key={label.id}>
                      {label.name}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>
          </Col>
        </AppRowContainer>
        <Form.Item className="form-field" name="content">
          {/* placeholder={messages["common.description"]} */}
          <Input.TextArea autoSize={{ minRows: 3, maxRows: 5 }} />
        </Form.Item>
      </StyledTodoModelContent>

      <StyledTodoModalFooter>
        <StyledTodoModelBtn type="primary" htmlType="submit">
          <IntlMessages id="common.save" />
        </StyledTodoModelBtn>
      </StyledTodoModalFooter>
    </StyledTodoAddTaskForm>
  );
};

export default AddTaskForm;

AddTaskForm.propTypes = {
  setFieldValue: PropTypes.func,
  reCallAPI: PropTypes.func,
  isSubmitting: PropTypes.bool,
  onCloseAddTask: PropTypes.func,
  selectedDate: PropTypes.any,
};
