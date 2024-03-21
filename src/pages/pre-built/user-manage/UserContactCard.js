import React, { useContext, useState } from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import {
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  DropdownItem,
} from "reactstrap";
import {
  Block,
  BlockBetween,
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Icon,
  Row,
  Col,
  UserAvatar,
  Button,
  PreviewAltCard,
} from "../../../components/Component";
import { Link } from "react-router-dom";
import { userData } from "./UserData";
import { findUpper } from "../../../utils/Utils";
import { UserContext } from "./UserContext";
import CardFormModal from "./CardFormModal";

const UserContactCardPage = () => {
  const { contextData } = useContext(UserContext);
  const [data, setData] = contextData;

  const [editId, setEditedId] = useState();
  const [smOption, setSmOption] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    projects: "",
    performed: "",
    tasks: "",
  });
  const [editFormData, setEditFormData] = useState({
    name: "",
    designation: "",
    projects: "",
    performed: "",
    tasks: "",
  });
  const [modal, setModal] = useState({
    add: false,
    edit: false,
  });

  // function to reset the form
  const resetForm = () => {
    setFormData({
      name: "",
      designation: "",
      projects: "",
      performed: "",
      tasks: "",
    });
  };

  // submit function to add a new item
  const onFormSubmit = (formData) => {
    const { name, designation, projects, performed, tasks } = formData;
    let submittedData = {
      id: data.length + 1,
      avatarBg: "success",
      name: name,
      status: "Active",
      designation: designation,
      projects: projects,
      performed: performed,
      tasks: tasks,
    };
    setData([submittedData, ...data]);
    resetForm();
    setModal({ add: false });
  };

  // submit function to update a new item
  const onEditSubmit = (formData) => {
    const { name, designation, projects, performed, tasks } = formData;
    let submittedData;
    let newitems = data;
    newitems.forEach((item) => {
      if (item.id === editId) {
        submittedData = {
          ...item,
          id: item.id,
          avatarBg: item.avatarBg,
          name: name,
          status: "Active",
          email: item.email,
          designation: designation,
          projects: projects,
          performed: performed,
          tasks: tasks,
        };
      }
    });
    let index = newitems.findIndex((item) => item.id === editId);
    newitems[index] = submittedData;
    setData(newitems);
    setModal({ edit: false });
  };

  const closeModal = () => {
    setModal({ add: false })
    resetForm();
  };

  const closeEditModal = () => {
    setModal({ edit: false })
    resetForm();
  };

  // function that loads the want to editted data
  const onEditClick = (id) => {
    data.forEach((item) => {
      if (item.id === id) {
        setEditFormData({
          name: item.name,
          designation: item.designation,
          projects: item.projects,
          performed: item.performed,
          tasks: item.tasks,
        });
        setModal({ edit: true, add: false });
        setEditedId(id);
      }
    });
  };

  // function to change to suspend property for an item
  const suspendUser = (id) => {
    let newData = data;
    let index = newData.findIndex((item) => item.id === id);
    newData[index].status = "Suspend";
    setData([...newData]);
  };

  return (
    <React.Fragment>
      <Head title="User Contact - Card"></Head>
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle page>User's Card</BlockTitle>
              <BlockDes className="text-soft">
                <p>You have total 2,595 users.</p>
              </BlockDes>
            </BlockHeadContent>
            <BlockHeadContent>
              <div className="toggle-wrap nk-block-tools-toggle">
                <a
                  href="#toggle"
                  onClick={(ev) => {
                    ev.preventDefault();
                    setSmOption(!smOption);
                  }}
                  className="btn btn-icon btn-trigger toggle-expand me-n1"
                >
                  <Icon name="menu-alt-r"></Icon>
                </a>
                <div className="toggle-expand-content" style={{ display: smOption ? "block" : "none" }}>
                  <ul className="nk-block-tools g-3">
                    <li>
                      <Button color="light" outline className="btn-white">
                        <Icon name="download-cloud"></Icon>
                        <span>Export</span>
                      </Button>
                    </li>
                    <li className="nk-block-tools-opt">
                      <Button color="primary" className="btn-icon" onClick={() => setModal({ add: true })}>
                        <Icon name="plus"></Icon>
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>
            </BlockHeadContent>
          </BlockBetween>
        </BlockHead>

        <Block>
          <Row className="g-gs">
            {data.slice(0, 4).map((item) => {
              return (
                <Col sm="6" lg="4" xxl="3" key={item.id}>
                  <PreviewAltCard className="card-bordered">
                    <div className="team">
                      <div
                        className={`team-status ${
                          item.status === "Active"
                            ? "bg-success text-white"
                            : item.status === "Pending"
                            ? "bg-warning text-white"
                            : "bg-danger text-white"
                        } `}
                      >
                        <Icon
                          name={`${
                            item.status === "Active" ? "check-thick" : item.status === "Pending" ? "clock" : "na"
                          }`}
                        ></Icon>
                      </div>
                      <div className="team-options">
                        <UncontrolledDropdown>
                          <DropdownToggle tag="a" className="dropdown-toggle btn btn-icon btn-trigger">
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
                              {item.status !== "Suspend" && (
                                <React.Fragment>
                                  <li className="divider"></li>
                                  <li onClick={() => suspendUser(item.id)}>
                                    <DropdownItem
                                      tag="a"
                                      href="#suspend"
                                      onClick={(ev) => {
                                        ev.preventDefault();
                                      }}
                                    >
                                      <Icon name="na"></Icon>
                                      <span>Suspend User</span>
                                    </DropdownItem>
                                  </li>
                                </React.Fragment>
                              )}
                            </ul>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </div>
                      <div className="user-card user-card-s2">
                        <UserAvatar theme={item.avatarBg} className="md" text={findUpper(item.name)} image={item.image}>
                          <div className="status dot dot-lg dot-success"></div>
                        </UserAvatar>
                        <div className="user-info">
                          <h6>{item.name}</h6>
                          <span className="sub-text">@{item.name.split(" ")[0].toLowerCase()}</span>
                        </div>
                      </div>
                      <div className="team-details">
                        <p>I am {item.designation} and love to be creative.</p>
                      </div>
                      <ul className="team-statistics">
                        <li>
                          <span>{item.projects}</span>
                          <span>Projects</span>
                        </li>
                        <li>
                          <span>{item.performed}%</span>
                          <span>Performed</span>
                        </li>
                        <li>
                          <span>{item.tasks}</span>
                          <span>Tasks</span>
                        </li>
                      </ul>
                      <div className="team-view">
                        <Link to={`${process.env.PUBLIC_URL}/user-details-regular/${item.id}`}>
                          <Button outline color="light" className="btn-round w-150px">
                            <span>View Profile</span>
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </PreviewAltCard>
                </Col>
              );
            })}
          </Row>
        </Block>

        <Block size="lg">
          <BlockHead>
            <BlockBetween>
              <BlockHeadContent>
                <BlockTitle tag="h4">User's Cards Alternate</BlockTitle>
                <BlockDes className="text-soft">
                  <p>An alternate version of user card here.</p>
                </BlockDes>
              </BlockHeadContent>
            </BlockBetween>
          </BlockHead>
          <Row className="g-gs">
            {userData.slice(0, 4).map((item) => {
              return (
                <Col sm="6" lg="4" xxl="3" key={item.id}>
                  <PreviewAltCard className="card-bordered">
                    <div className="team">
                      <div className="team-options">
                        <UncontrolledDropdown>
                          <DropdownToggle tag="a" className="dropdown-toggle btn btn-icon btn-trigger">
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
                              <li className="divider"></li>
                              <li onClick={() => suspendUser(item.id)}>
                                <DropdownItem
                                  href="#suspend"
                                  onClick={(ev) => {
                                    ev.preventDefault();
                                  }}
                                >
                                  <Icon name="na"></Icon>
                                  <span>Suspend User</span>
                                </DropdownItem>
                              </li>
                            </ul>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </div>
                      <div className="user-card user-card-s2">
                        <UserAvatar theme={item.avatarBg} className="lg" text={findUpper(item.name)} image={item.image}>
                          <div className="status dot dot-lg dot-success"></div>
                        </UserAvatar>
                        <div className="user-info">
                          <h6>{item.name}</h6>
                          <span className="sub-text">@{item.name.split(" ")[0].toLowerCase()}</span>
                        </div>
                      </div>
                      <div className="team-details">
                        <p>UI/UX Designer</p>
                      </div>
                      <ul className="team-info">
                        <li>
                          <span>Join Date</span>
                          <span>24 Jun 2015</span>
                        </li>
                        <li>
                          <span>Contact</span>
                          <span>{item.phone}</span>
                        </li>
                        <li>
                          <span>Email</span>
                          <span>{item.email}</span>
                        </li>
                      </ul>
                      <div className="team-view">
                        <Link to={`${process.env.PUBLIC_URL}/user-details-regular/${item.id}`}>
                          <Button color="primary" className="btn-block btn-dim">
                            <span>View Profile</span>
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </PreviewAltCard>
                </Col>
              );
            })}
          </Row>
        </Block>

        <CardFormModal modal={modal.add} modalType="add" formData={formData} setFormData={setFormData} closeModal={closeModal} onSubmit={onFormSubmit} />
        <CardFormModal modal={modal.edit} modalType="edit" formData={editFormData} setFormData={setEditFormData} closeModal={closeEditModal} onSubmit={onEditSubmit} />
      
      </Content>
    </React.Fragment>
  );
};
export default UserContactCardPage;
