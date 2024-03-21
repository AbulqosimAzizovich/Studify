import React from "react";
import { Select } from "antd";
// import { useIntl } from "react-intl";
import PropTypes from "prop-types";
import { StyledTodoSelectBox } from "../index.styled";
import { putDataApi } from "../../../../../medify/hooks/APIHooks";
import { useInfoViewActionsContext } from "../../../../../medify/context/AppContextProvider/InfoViewContextProvider";
import { CalendarContext } from "../../../context/CalendarContextProvider";

const TaskPriority = ({ selectedTask, onUpdateSelectedTask }) => {
  const infoViewActionsContext = useInfoViewActionsContext();
  const { priorityList } = CalendarContext();

  const onChangePriority = (value) => {
    selectedTask.priority = priorityList.find((priority) => priority.type === value);
    putDataApi("/api/calendar/task/", infoViewActionsContext, {
      task: selectedTask,
    })
      .then((data) => {
        onUpdateSelectedTask(data.task);
        infoViewActionsContext.showMessage("Task Updated Successfully");
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  // const { messages } = //;
  return (
    <StyledTodoSelectBox
      defaultValue={selectedTask?.priority?.type}
      // placeholder={messages["common.priority"]}
      onChange={(value) => onChangePriority(value)}
    >
      {priorityList.map((priority) => {
        return (
          <Select.Option key={priority.id} value={priority.type}>
            {priority.name}
          </Select.Option>
        );
      })}
    </StyledTodoSelectBox>
  );
};

export default TaskPriority;

TaskPriority.propTypes = {
  selectedTask: PropTypes.object.isRequired,
  onUpdateSelectedTask: PropTypes.func,
};
