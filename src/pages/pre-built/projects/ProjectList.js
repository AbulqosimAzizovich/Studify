import React, { useState } from "react";
import Head from "../../../layout/head/Head";
import Content from "../../../layout/content/Content";
import {
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  Progress,
  DropdownItem,
  Badge
} from "reactstrap";
import {
  Block,
  BlockHead,
  BlockBetween,
  BlockHeadContent,
  BlockTitle,
  BlockDes,
  Icon,
  Button,
  UserAvatar,
  PaginationComponent,
  DataTable,
  DataTableBody,
  DataTableHead,
  DataTableRow,
  DataTableItem,
} from "../../../components/Component";
import { projectData } from "./ProjectData";
import { findUpper, setDeadline, setDeadlineDays, calcPercentage } from "../../../utils/Utils";
import FormModal from "./FormModal";

export const ProjectListPage = () => {
  const [sm, updateSm] = useState(false);
  const [modal, setModal] = useState({
    edit: false,
    add: false,
  });
  const [editId, setEditedId] = useState();
  const [data, setData] = useState(projectData);
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    description: "",
    lead: "",
    tasks: 0,
    team: [],
    totalTask: 0,
    date: new Date(),
  });
  const [editFormData, setEditFormData] = useState({
    title: "",
    subtitle: "",
    description: "",
    lead: "",
    tasks: 0,
    team: [],
    totalTask: 0,
    date: new Date(),
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage] = useState(7);

  // function to reset the form
  const resetForm = () => {
    setFormData({
      title: "",
      subtitle: "",
      description: "",
      lead: "",
      tasks: 0,
      totalTask: 0,
      team: [],
      date: new Date(),
    });
  };

  const closeModal = () => {
    setModal({ add: false })
    resetForm();
  };

  const closeEditModal = () => {
    setModal({ edit: false })
    resetForm();
  };

  // submit function to add a new item
  const onFormSubmit = (sData) => {
    const { title, subtitle, description, tasks, totalTask } = sData;
    let submittedData = {
      id: data.length + 1,
      avatarClass: "pink",
      title: title,
      subtitle: subtitle,
      desc: description,
      lead: formData.lead,
      team: formData.team,
      tasks: tasks,
      totalTask: totalTask,
      deadline: new Date(`${formData.date}`), // Format ** mm/dd/yyyy
    };
    setData((data) => [submittedData, ...data]);
    resetForm();
    setModal({ add: false });
  };

  // submit function to update a new item
  const onEditSubmit = (sData) => {
    const { title, subtitle, description, tasks, totalTask } = sData;
    let submittedData;
    let newitems = data;
    newitems.forEach((item) => {
      if (item.id === editId) {
        submittedData = {
          id: item.id,
          avatarClass: item.avatarClass,
          title: title,
          subtitle: subtitle,
          desc: description,
          lead: editFormData.lead,
          tasks: tasks,
          totalTask: totalTask,
          deadline: new Date(`${editFormData.date}`), // Format ** mm/dd/yyyy
          team: editFormData.team,
        };
      }
    });
    let index = newitems.findIndex((item) => item.id === editId);
    newitems[index] = submittedData;
    setModal({ edit: false });
    resetForm();
  };

  // function that loads the want to editted data
  const onEditClick = (id) => {
    data.forEach((item) => {
      if (item.id === id) {
        setEditFormData({
          title: item.title,
          subtitle: item.subtitle,
          description: item.desc,
          lead: item.lead,
          team: item.team,
          tasks: item.tasks,
          totalTask: item.totalTask,
          date: item.deadline,
        });
        setModal({ edit: true }, { add: false });
        setEditedId(id);
      }
    });
  };

  // function to change the complete a project property
  const completeProject = (id) => {
    let newData = data;
    let index = newData.findIndex((item) => item.id === id);
    newData[index].deadline = setDeadline(0);
    setData([...newData]);
  };

  // function to change the check property of an item
  const selectorCheck = (e) => {
    let newData;
    newData = data.map((item) => {
      item.checked = e.currentTarget.checked;
      return item;
    });
    setData([...newData]);
  };

  // function to change the complete property of an item
  const selectorCompleteProject = () => {
    let newData;
    newData = data.map((item) => {
      if (item.checked === true) item.deadline = setDeadline(0);
      return item;
    });
    setData([...newData]);
  };

  // function to delete the seletected item
  const selectorDeleteProject = () => {
    let newData;
    newData = data.filter((item) => item.checked !== true);
    setData([...newData]);
  };

  // function to change the check property of selected item
  const onSelectChange = (e, id) => {
    let newData = data;
    let index = newData.findIndex((item) => item.id === id);
    newData[index].checked = e.currentTarget.checked;
    setData([...newData]);
  };

  // Get current list, pagination
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <React.Fragment>
      <Head title="Project List"></Head>
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle page> Projects</BlockTitle>
              <BlockDes className="text-soft">You have total {data.length} projects</BlockDes>
            </BlockHeadContent>
            <BlockHeadContent>
              <div className="toggle-wrap nk-block-tools-toggle">
                <Button
                  className={`btn-icon btn-trigger toggle-expand me-n1 ${sm ? "active" : ""}`}
                  onClick={() => updateSm(!sm)}
                >
                  <Icon name="menu-alt-r"></Icon>
                </Button>
                <div className="toggle-expand-content" style={{ display: sm ? "block" : "none" }}>
                  <ul className="nk-block-tools g-3">
                    <li>
                      <UncontrolledDropdown>
                        <DropdownToggle tag="a" className="dropdown-toggle btn btn-white btn-dim btn-outline-light">
                          <Icon name="filter-alt" className="d-none d-sm-inline"></Icon>
                          <span>Filtered By</span>
                          <Icon name="chevron-right" className="dd-indc"></Icon>
                        </DropdownToggle>
                        <DropdownMenu end>
                          <ul className="link-list-opt no-bdr">
                            <li>
                              <DropdownItem
                                tag="a"
                                href="#dropdownitem"
                                onClick={(ev) => {
                                  ev.preventDefault();
                                }}
                              >
                                <span>Open</span>
                              </DropdownItem>
                            </li>
                            <li>
                              <DropdownItem
                                tag="a"
                                href="#dropdownitem"
                                onClick={(ev) => {
                                  ev.preventDefault();
                                }}
                              >
                                <span>Closed</span>
                              </DropdownItem>
                            </li>
                            <li>
                              <DropdownItem
                                tag="a"
                                href="#dropdownitem"
                                onClick={(ev) => {
                                  ev.preventDefault();
                                }}
                              >
                                <span>Onhold</span>
                              </DropdownItem>
                            </li>
                          </ul>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </li>
                    <li className="nk-block-tools-opt" onClick={() => setModal({ add: true })}>
                      <Button color="primary">
                        <Icon name="plus"></Icon>
                        <span>Add Project</span>
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>
        <Block>
          <DataTable className="card-stretch">
            <DataTableBody>
              <DataTableHead className="nk-tb-item nk-tb-head">
                <DataTableRow className="nk-tb-col-check">
                  <div className="custom-control custom-control-sm custom-checkbox notext">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="pid-all"
                      onChange={(e) => selectorCheck(e)}
                    />
                    <label className="custom-control-label" htmlFor="pid-all"></label>
                  </div>
                </DataTableRow>
                <DataTableRow>
                  <span className="sub-text">Project Name</span>
                </DataTableRow>
                <DataTableRow size="xxl">
                  <span className="sub-text">Client</span>
                </DataTableRow>
                <DataTableRow size="lg">
                  <span className="sub-text">Project Lead</span>
                </DataTableRow>
                <DataTableRow size="lg">
                  <span className="sub-text">Team</span>
                </DataTableRow>
                <DataTableRow size="xxl">
                  <span className="sub-text">Status</span>
                </DataTableRow>
                <DataTableRow size="md">
                  <span className="sub-text">Progress</span>
                </DataTableRow>
                <DataTableRow size="mb">
                  <span className="sub-text">Deadline</span>
                </DataTableRow>
                <DataTableRow className="nk-tb-col-tools text-end">
                  <UncontrolledDropdown>
                    <DropdownToggle tag="a" className="btn btn-xs btn-trigger btn-icon dropdown-toggle me-n1">
                      <Icon name="more-h"></Icon>
                    </DropdownToggle>
                    <DropdownMenu end>
                      <ul className="link-list-opt no-bdr">
                        <li onClick={() => selectorCompleteProject()}>
                          <DropdownItem
                            tag="a"
                            href="#markasdone"
                            onClick={(ev) => {
                              ev.preventDefault();
                            }}
                          >
                            <Icon name="check-round-cut"></Icon>
                            <span>Mark As Done</span>
                          </DropdownItem>
                        </li>
                        <li onClick={() => selectorDeleteProject()}>
                          <DropdownItem
                            tag="a"
                            href="#remove"
                            onClick={(ev) => {
                              ev.preventDefault();
                            }}
                          >
                            <Icon name="trash"></Icon>
                            <span>Remove Projects</span>
                          </DropdownItem>
                        </li>
                      </ul>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </DataTableRow>
              </DataTableHead>
              {currentItems.length > 0
                ? currentItems.map((item) => {
                    var days = setDeadlineDays(item.deadline);
                    return (
                      <DataTableItem key={item.id}>
                        <DataTableRow className="nk-tb-col-check">
                          <div className="custom-control custom-control-sm custom-checkbox notext">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              defaultChecked={item.checked}
                              id={item.id + "pid-all"}
                              key={Math.random()}
                              onChange={(e) => onSelectChange(e, item.id)}
                            />
                            <label className="custom-control-label" htmlFor={item.id + "pid-all"}></label>
                          </div>
                        </DataTableRow>
                        <DataTableRow>
                          <a
                            href="#title"
                            onClick={(ev) => {
                              ev.preventDefault();
                            }}
                            className="project-title"
                          >
                            <UserAvatar className="sq" theme={item.avatarClass} text={findUpper(item.title)} />
                            <div className="project-info">
                              <h6 className="title">{item.title}</h6>
                            </div>
                          </a>
                        </DataTableRow>
                        <DataTableRow size="xxl">
                          <span>{item.subtitle}</span>
                        </DataTableRow>
                        <DataTableRow size="lg">
                          <span>{item.lead}</span>
                        </DataTableRow>
                        <DataTableRow size="lg">
                          <ul className="project-users g-1">
                            {item.team.slice(0, 2).map((member, idx) => {
                              return (
                                <li key={idx}>
                                  <UserAvatar
                                    className="sm"
                                    text={findUpper(member.label)}
                                    theme={member.theme}
                                    image={member.image}
                                  />
                                </li>
                              );
                            })}
                            {item.team.length > 2 && (
                              <li>
                                <UserAvatar theme="light" className="sm" text={`+${item.team.length - 2}`} />
                              </li>
                            )}
                          </ul>
                        </DataTableRow>
                        <DataTableRow size="xxl">
                          <span>{days === 0 ? "Closed" : "Open"}</span>
                        </DataTableRow>
                        <DataTableRow size="md">
                          <div className="project-list-progress">
                            <Progress
                              className="progress-pill progress-md bg-light"
                              value={days === 0 ? 100 : calcPercentage(item.totalTask, item.tasks)}
                            ></Progress>
                            <div className="project-progress-percent">
                              {days === 0 ? 100 : calcPercentage(item.totalTask, item.tasks)}%
                            </div>
                          </div>
                        </DataTableRow>
                        <DataTableRow size="mb">
                          <Badge
                            className="badge-dim"
                            color={
                              days > 10
                                ? "light"
                                : days <= 10 && days >= 2
                                ? "warning"
                                : days === 1
                                ? "danger"
                                : days <= 0 && "success"
                            }
                          >
                            <Icon name="clock"></Icon>
                            <span>{days <= 0 ? "Done" : days === 1 ? "Due Tomorrow" : days + " Days Left"}</span>
                          </Badge>
                        </DataTableRow>
                        <DataTableRow className="nk-tb-col-tools text-end">
                          <ul className="nk-tb-actions gx-1">
                            <li>
                              <UncontrolledDropdown>
                                <DropdownToggle tag="a" className="text-soft dropdown-toggle btn btn-icon btn-trigger">
                                  <Icon name="more-h"></Icon>
                                </DropdownToggle>
                                <DropdownMenu end>
                                  <ul className="link-list-opt no-bdr">
                                    <li onClick={() => onEditClick(item.id)}>
                                      <DropdownItem
                                        tag="a"
                                        href="#edit"
                                        onClick={(ev) => {
                                          ev.preventDefault();
                                        }}
                                      >
                                        <Icon name="edit"></Icon>
                                        <span>Edit</span>
                                      </DropdownItem>
                                    </li>
                                    {days !== 0 && (
                                      <li onClick={() => completeProject(item.id)}>
                                        <DropdownItem
                                          tag="a"
                                          href="#markasdone"
                                          onClick={(ev) => {
                                            ev.preventDefault();
                                          }}
                                        >
                                          <Icon name="check-round-cut"></Icon>
                                          <span>Mark As Done</span>
                                        </DropdownItem>
                                      </li>
                                    )}
                                  </ul>
                                </DropdownMenu>
                              </UncontrolledDropdown>
                            </li>
                          </ul>
                        </DataTableRow>
                      </DataTableItem>
                    );
                  })
                : null}
            </DataTableBody>
            <div className="card-inner">
              {data.length > 0 ? (
                <PaginationComponent
                  itemPerPage={itemPerPage}
                  totalItems={data.length}
                  paginate={paginate}
                  currentPage={currentPage}
                />
              ) : (
                <div className="text-center">
                  <span className="text-silent">No projects found</span>
                </div>
              )}
            </div>
          </DataTable>
        </Block>

        <FormModal modal={modal.add} modalType="add" formData={formData} setFormData={setFormData} closeModal={closeModal} onSubmit={onFormSubmit} />
        <FormModal modal={modal.edit} modalType="edit" formData={editFormData} setFormData={setEditFormData} closeModal={closeEditModal} onSubmit={onEditSubmit} />
      </Content>
    </React.Fragment>
  );
};

export default ProjectListPage;
