import React, { useState } from "react";
import { Icon } from "../../../../components/Component";
import { useFileManager } from "../components/Context";
import icons from "../components/Icons"

const Move = ({ file, toggle, toggleCreate }) => {

  const {fileManager} = useFileManager();

  const [selected, setSelected] = useState("");

  return (
    <React.Fragment>
      <div className="modal-header align-center border-bottom-0">
        <h5 className="modal-title">Move item to...</h5>
        <a
          href="#close"
          onClick={(ev) => {
            ev.preventDefault();
            toggle();
          }}
          className="close"
        >
          <Icon name="cross-sm"></Icon>
        </a>
      </div>
      <div className="modal-body pt-0 mt-n2">
        <ul className="breadcrumb breadcrumb-alt breadcrumb-xs breadcrumb-arrow mb-1">
          <li className="breadcrumb-item">Files</li>
          <li className="breadcrumb-item">{file.name}</li>
        </ul>
        <div className="nk-fmg-listing is-scrollable">
          <div className="nk-files nk-files-view-list is-compact">
            <div className="nk-files-list">
              {fileManager.files.filter((item) => item.type === "folder" && !item.deleted)
                .map((item) => {
                  return (
                    <div
                      className={`nk-file-item nk-file ${item.id === selected ? "selected" : ""}`}
                      key={item.id}
                      onClick={() => setSelected(item.id)}
                    >
                      <div className="nk-file-info">
                        <a className="nk-file-link" href="#link" onClick={(ev) => ev.preventDefault()}>
                          <div className="nk-file-title">
                            <div className="nk-file-icon"><div className="nk-file-icon-type">{icons[item.icon]}</div></div>
                            <div className="nk-file-name">
                              <div className="nk-file-name-text">
                                <span className="title">{item.name}</span>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="nk-file-actions">
                        <a
                          href="#link"
                          onClick={(ev) => ev.preventDefault()}
                          className="btn btn-sm btn-icon btn-trigger"
                        >
                          <Icon name="chevron-right"></Icon>
                        </a>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <div className="modal-footer bg-light">
        <div className="modal-footer-between">
          <div className="g">
            <a
              href="link"
              onClick={(ev) => {
                ev.preventDefault();
                toggle();
                toggleCreate();
              }}
              className="link link-primary"
            >
              Create New Folder
            </a>
          </div>
          <div className="g">
            <ul className="btn-toolbar g-3">
              <li>
                <a
                  href="#file-share"
                  onClick={(ev) => {
                    ev.preventDefault();
                    toggle();
                  }}
                  className="btn btn-outline-light btn-white"
                >
                  Cancel
                </a>
              </li>
              <li>
                <a
                  href="link"
                  onClick={(ev) => {
                    ev.preventDefault();
                    toggle();
                  }}
                  className="btn btn-primary"
                >
                  Move
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Move;
