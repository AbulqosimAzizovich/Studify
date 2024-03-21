import React, { useState } from "react";
import classNames from "classnames";
import { useFileManager, useFileManagerUpdate } from "../components/Context";
import icons from "./Icons";
import { Modal, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";
import { Icon } from "../../../../components/Component";

import CreateFolder from "../modals/CreateFolder";
import Details from "../modals/Details";
import Share from "../modals/Share";
import Copy from "../modals/Copy";
import Move from "../modals/Move";

const File = ({ item, fileView, page }) => {
  const { fileManagerUpdate } = useFileManagerUpdate();

  const [detailModal, setDetailModal] = useState(false);
  const [shareModal, setShareModal] = useState(false);
  const [copyModal, setCopyModal] = useState(false);
  const [moveModal, setMoveModal] = useState(false);
  const [createModal, setCreateModal] = useState(false);

  const toggleDetailModal = () => {
    setDetailModal(!detailModal);
  };
  const toggleShareModal = () => {
    setShareModal(!shareModal);
  };
  const toggleCopyModal = () => {
    setCopyModal(!copyModal);
  };
  const toggleMoveModal = () => {
    setMoveModal(!moveModal);
  };
  const toggleCreateModal = () => {
    setCreateModal(!createModal);
  };

  const downloadFile = (file) => {
    const downloadLink = document.createElement("a");
    downloadLink.href = "data:" + file.ext + ";charset=utf-8," + encodeURIComponent(file.name);
    downloadLink.download = file.name;
    downloadLink.click();
  };

  return (
    <>
      <div className="nk-file-item nk-file">
        <div className="nk-file-info">
          <div className="nk-file-title">
            <div className="nk-file-icon">
              <span className="nk-file-icon-type">{icons[item.icon]}</span>
            </div>
            <div className="nk-file-name">
              <div className="nk-file-name-text">
                <span className="title">{item.name}</span>
                <div className="asterisk">
                  <a
                    href="#folder"
                    onClick={(ev) => {
                      ev.preventDefault();
                      fileManagerUpdate.toggleStarred(item.id);
                    }}
                    className={item.starred ? "active" : ""}
                  >
                    <Icon className="asterisk-off icon ni ni-star"></Icon>
                    <Icon className="asterisk-on icon ni ni-star-fill"></Icon>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {(fileView === "group" || fileView === "grid") && (
            <ul className="nk-file-desc">
              <li className="date">{item.date}</li>
              <li className="size">{item.size} MB</li>
              {item.access && fileView === "group" && <li className="members">{item.access.length} Members</li>}
            </ul>
          )}
        </div>
        {fileView === "list" && (
          <>
            {page === undefined && (
              <div className="nk-file-meta">
                <div className="tb-lead">{item.date}</div>
              </div>
            )}
            {page === "recovery" && (
              <div className="nk-file-date">
                <div className="tb-lead">{item.deleted}</div>
              </div>
            )}
            <div className="nk-file-members">
              <div className="tb-lead">{item.access && item.access.length} Members</div>
            </div>
          </>
        )}
        <div className="nk-file-actions">
          <UncontrolledDropdown>
            <DropdownToggle
              tag="a"
              href="#folder"
              className="dropdown-toggle btn btn-sm btn-icon btn-trigger"
              onClick={(ev) => ev.preventDefault()}
            >
              <Icon name="more-h"></Icon>
            </DropdownToggle>
            <DropdownMenu end>
              <ul className="link-list-opt no-bdr">
                <li>
                  <DropdownItem
                    tag="a"
                    href="#item"
                    onClick={(ev) => {
                      ev.preventDefault();
                      setDetailModal(true);
                    }}
                  >
                    <Icon name="eye"></Icon>
                    <span>Подробности</span>
                  </DropdownItem>
                </li>
                <li>
                  <DropdownItem
                    tag="a"
                    href="#item"
                    onClick={(ev) => {
                      ev.preventDefault();
                      setShareModal(true);
                    }}
                  >
                    <Icon name="share"></Icon>
                    <span>Делиться</span>
                  </DropdownItem>
                </li>
                <li>
                  <DropdownItem
                    tag="a"
                    href="#item"
                    onClick={(ev) => {
                      ev.preventDefault();
                      setCopyModal(true);
                    }}
                  >
                    <Icon name="copy"></Icon>
                    <span>Копировать</span>
                  </DropdownItem>
                </li>
                <li>
                  <DropdownItem
                    tag="a"
                    href="#item"
                    onClick={(ev) => {
                      ev.preventDefault();
                      setMoveModal(true);
                    }}
                  >
                    <Icon name="forward-arrow"></Icon>
                    <span>Двигаться</span>
                  </DropdownItem>
                </li>
                <li>
                  <DropdownItem
                    tag="a"
                    href="#item"
                    onClick={(ev) => {
                      ev.preventDefault();
                      downloadFile(item);
                    }}
                  >
                    <Icon name="download"></Icon>
                    <span>Скачать</span>
                  </DropdownItem>
                </li>
                <li>
                  <DropdownItem
                    tag="a"
                    href="#item"
                    onClick={(ev) => {
                      ev.preventDefault();
                      fileManagerUpdate.toTrash(item.id, !item.deleted);
                    }}
                  >
                    {item.deleted ? (
                      <>
                        <Icon name="back-arrow"></Icon> <span>Восстановить</span>
                      </>
                    ) : (
                      <>
                        <Icon name="trash"></Icon>
                        <span>Удалить</span>
                      </>
                    )}
                  </DropdownItem>
                </li>
              </ul>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>

        <Modal isOpen={detailModal} size="md" toggle={toggleDetailModal}>
          <Details
            file={item}
            toggle={toggleDetailModal}
            toggleShare={toggleShareModal}
            triggerDownload={downloadFile}
          />
        </Modal>

        <Modal isOpen={shareModal} size="md" toggle={toggleShareModal}>
          <Share file={item} toggle={toggleShareModal} />
        </Modal>

        <Modal isOpen={copyModal} size="md" toggle={toggleCopyModal}>
          <Copy file={item} toggle={toggleCopyModal} toggleCreate={toggleCreateModal} />
        </Modal>

        <Modal isOpen={moveModal} size="md" toggle={toggleMoveModal}>
          <Move file={item} toggle={toggleMoveModal} toggleCreate={toggleCreateModal} />
        </Modal>

        <Modal isOpen={createModal} size="md" toggle={toggleCreateModal}>
          <CreateFolder toggle={toggleCreateModal} />
        </Modal>
      </div>
    </>
  );
};

const Files = ({ files, fixedView, page }) => {
  const { fileManager } = useFileManager();

  const fileView = fixedView ? fixedView : fileManager.filesView;

  const mainClass = classNames({
    "nk-files": true,
    [`nk-files-view-${fileView}`]: fileView,
  });

  const filesList = files;

  return (
    <div className={mainClass}>
      {filesList.length > 0 && (
        <div className="nk-files-head">
          <div className="nk-file-item">
            {fileView === "list" && (
              <>
                <div className="nk-file-info">
                  <div className="tb-head">Имя</div>
                  <div className="tb-head"></div>
                </div>
                {page === undefined && (
                  <div className="nk-file-meta">
                    <div className="tb-head">Последнее открытие</div>
                  </div>
                )}
                {page === "recovery" && (
                  <div className="nk-file-date">
                    <div className="tb-head">Удалено все</div>
                  </div>
                )}
                <div className="nk-file-members">
                  <div className="tb-head">Члены</div>
                </div>
                <div className="nk-file-actions"></div>
              </>
            )}
          </div>
        </div>
      )}
      {(fileView === "list" || fileView === "grid") && (
        <div className="nk-files-list">
          {filesList.map((item) => (
            <File fileView={fileView} item={item} key={item.id} page={page} />
          ))}
        </div>
      )}
      {fileView === "group" && (
        <>
          <div className="nk-files-group">
            <h6 className="title border-top-0">Папки</h6>
            <div className="nk-files-list">
              {filesList
                .filter((item) => item.type === "folder")
                .map((item) => (
                  <File fileView={fileView} item={item} key={item.id} page={page} />
                ))}
            </div>
          </div>
          <div className="nk-files-group">
            <h6 className="title">Файлы</h6>
            <div className="nk-files-list">
              {filesList
                .filter((item) => item.type === "file")
                .map((item) => (
                  <File fileView={fileView} item={item} key={item.id} page={page} />
                ))}
            </div>
          </div>
        </>
      )}
      {filesList.length === 0 && <div>Нет доступных папок и файлов</div>}
    </div>
  );
};

export default Files;
