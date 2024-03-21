import React, { useState } from "react";
import ContentAlt from "../../../layout/content/ContentAlt";
import Head from "../../../layout/head/Head";
import KanbanBoard from "./KanbanBoard";
import { columnData } from "./KanbanData";
import { Modal } from "reactstrap";
import {
  BlockHead,
  BlockBetween,
  BlockHeadContent,
  BlockTitle,
  Button,
  Icon,
  PreviewAltCard,
} from "../../../components/Component";
import { KanbanBoardForm, KanbanTaskForm } from "./KanbanForms";

const Kanban = () => {
  const [columns, setColumns] = useState(columnData);
  const [boardModal, setBoardModal] = useState(false);
  const [smBtn, setSmBtn] = useState(false);
  const [taskModal, setTaskModal] = useState(false);

  const toggleBoardModal = () => {
    setBoardModal(!boardModal);
  };

  const toggleTaskModal = () => {
    setTaskModal(!taskModal);
  };

  return (
    <React.Fragment>
      <Head title="Kanban Board"></Head>
      <ContentAlt>
        {/* <PreviewAltCard bodyClass="py-3 border-bottom border-light rounded-0" className="bg-transparent">
          <BlockHead size="sm">
            <BlockBetween>
              <BlockHeadContent>
                <BlockTitle page>Kanban Board</BlockTitle>
              </BlockHeadContent>
            </BlockBetween>
          </BlockHead>
        </PreviewAltCard> */}

        <PreviewAltCard className="mt-0">
          <BlockHeadContent>
            <div className="toggle-wrap nk-block-tools-toggle">
              <a
                href="#toggle"
                onClick={(ev) => {
                  ev.preventDefault();
                  setSmBtn(!smBtn);
                }}
                className="btn btn-icon btn-trigger toggle-expand me-n1"
              >
                <Icon name="menu-alt-r"></Icon>
              </a>
              <div className={`toggle-expand-content ${smBtn ? "expanded" : ""}`}>
                <ul className="nk-block-tools g-3">
                  <li>
                    <Button color="light" outline className="btn-white" onClick={() => toggleTaskModal()}>
                      <Icon name="plus" />
                      <span>Add Task</span>
                    </Button>
                  </li>
                  <li>
                    <Button color="primary" onClick={() => toggleBoardModal()}>
                      <Icon name="plus" />
                      <span>Add Board</span>
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
          </BlockHeadContent>
          <div className="nk-kanban">
            <KanbanBoard columns={columns} setColumns={setColumns} />
          </div>
        </PreviewAltCard>

        <Modal size="lg" isOpen={boardModal} toggle={toggleBoardModal}>
          <KanbanBoardForm toggle={toggleBoardModal} data={columns} setData={setColumns} />
        </Modal>

        <Modal size="lg" isOpen={taskModal} toggle={toggleTaskModal}>
          <KanbanTaskForm toggle={toggleTaskModal} data={columns} setData={setColumns} />
        </Modal>
      </ContentAlt>
    </React.Fragment>
  );
};

export default Kanban;
