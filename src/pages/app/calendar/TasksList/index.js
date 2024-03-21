import React, { useState } from "react";
import AppsContent from "../../../../medify/components/AppsContainer/AppsContent";
import { TaskCalender } from "../../../../medify/modules/apps/Calendar";

import { CalendarActionsContext, CalendarContext } from "../../context/CalendarContextProvider";

const TasksList = () => {
  const { taskLists } = CalendarContext();
  const { setCalenderData, reCallAPI } = CalendarActionsContext();

  const [filterText, onSetFilterText] = useState("");

  const onGetFilteredItems = () => {
    if (filterText === "") {
      return taskLists?.data;
    } else {
      return taskLists?.data.filter((task) => task.title.toUpperCase().includes(filterText.toUpperCase()));
    }
  };

  const onUpdateTask = (task) => {
    setCalenderData({
      data: taskLists?.data.map((item) => (item.id === task.id ? task : item)),
      count: taskLists?.count,
    });
  };

  const list = onGetFilteredItems();

  return (
    <AppsContent fullView>
      <TaskCalender
        reCallAPI={reCallAPI}
        taskList={list}
        onUpdateTask={onUpdateTask}
        onSetFilterText={onSetFilterText}
      />
    </AppsContent>
  );
};

export default TasksList;
