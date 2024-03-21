import React from "react";
import { Icon} from "../../../../components/Component";
import icons from "../components/Icons"

const Details = ({ file, toggle, toggleShare, triggerDownload }) => {
  
  return (
    <React.Fragment>
      <div className="modal-header align-center">
        <div className="nk-file-title">
          <div className="nk-file-icon"><div className="nk-file-icon-type">{icons[file.icon]}</div></div>
          <div className="nk-file-name">
            <div className="nk-file-name-text">
              <span className="title">{file.name}</span>
            </div>
            <div className="nk-file-name-sub">{file.type}</div>
          </div>
        </div>
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
      <div className="modal-body">
        <div className="nk-file-details">
          <div className="nk-file-details-row">
            <div className="nk-file-details-col">Size</div>
            <div className="nk-file-details-col">{file.size} MB</div>
          </div>
          <div className="nk-file-details-row">
            <div className="nk-file-details-col">Location</div>
            <div className="nk-file-details-col">
              <ul className="breadcrumb breadcrumb-sm breadcrumb-alt breadcrumb-arrow">
                <li className="breadcrumb-item">Files</li>
                <li className="breadcrumb-item">{file.name}</li>
              </ul>
            </div>
          </div>
          <div className="nk-file-details-row">
            <div className="nk-file-details-col">Owner</div>
            <div className="nk-file-details-col">Me</div>
          </div>
          <div className="nk-file-details-row">
            <div className="nk-file-details-col">Starred</div>
            <div className="nk-file-details-col">{file.starred ? 'Yes' : 'No'}</div>
          </div>
          <div className="nk-file-details-row">
            <div className="nk-file-details-col">Created</div>
            <div className="nk-file-details-col">{file.time}, {file.date}</div>
          </div>
        </div>
      </div>
      <div className="modal-footer modal-footer-stretch bg-light">
        <div className="modal-footer-between">
          <div className="g">
            <a href="link" onClick={(ev) => ev.preventDefault()} className="link link-primary">
              View All Activity
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
                    toggleShare();
                  }}
                  className="btn btn-outline-light btn-white"
                >
                  Share
                </a>
              </li>
              <li>
                <a
                  href="link"
                  onClick={(ev) => {
                    ev.preventDefault();
                    triggerDownload(file);
                  }}
                  className="btn btn-primary"
                >
                  Download
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Details;
