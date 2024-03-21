import React from "react";
import TaskSideBar from "./TaskSideBar/index";
import TasksList from "./TasksList";
import TaskDetail from "./TaskDetail";
import PropTypes from "prop-types";
// import { useIntl } from "react-intl";
import AppsContainer from "../../../medify/components/AppsContainer";
import { useParams } from "react-router-dom";
import CalendarContextProvider from "../context/CalendarContextProvider";
import AppPageMeta from "../../../medify/components/AppPageMeta";
import ToDo from "./../../../crema-antd-4.x/src/modules/apps/Calendar/index";

const ToDo1 = () => {
  const { id } = useParams();

  //  const { messages } = //;

  // const onGetMainComponent = () => {
  //   if (id) {
  //     return <TaskDetail />;
  //   } else {
  //     return <TasksList />;
  //   }
  // };
  // title={messages["todo.todoApp"]}
  return (
    // <CalendarContextProvider>
    //   <AppsContainer sidebarContent={<TaskSideBar />}>
    //     <AppPageMeta title="Calendar App" />
    //     {onGetMainComponent()}
    //   </AppsContainer>
    // </CalendarContextProvider>
    <ToDo />
  );
};

export default ToDo1;

ToDo1.propTypes = {
  match: PropTypes.object,
};
