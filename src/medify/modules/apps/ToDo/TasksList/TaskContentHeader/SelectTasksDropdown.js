import React, { useState } from "react";
import { useIntl } from "react-intl";
import PropTypes from "prop-types";
import { Select } from "antd";
import { StyledTodoTaskDropdown, StyledTodoTaskDropdownView } from "../index.styled";

const SelectTasksDropdown = ({ onSelectTasks }) => {
  const [selectedItems, setSelectedItems] = useState(0);

  const onChangeSelectValue = (value) => {
    setSelectedItems(value);
    onSelectTasks(value);
  };

  // const {messages} = //;

  return (
    <StyledTodoTaskDropdownView>
      <StyledTodoTaskDropdown
        value={selectedItems}
        onChange={onChangeSelectValue}
        // defaultValue={messages['common.all']}
        style={{ width: "100%" }}
      >
        <Select.Option value={0}>all</Select.Option>
        <Select.Option value={1}>none</Select.Option>
        <Select.Option value={2}>starred</Select.Option>
        <Select.Option value={3}>attachments</Select.Option>
      </StyledTodoTaskDropdown>
    </StyledTodoTaskDropdownView>
  );
};

export default SelectTasksDropdown;

SelectTasksDropdown.propTypes = {
  onSelectTasks: PropTypes.func,
};
