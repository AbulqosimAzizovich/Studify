import React, { useRef, useEffect } from "react";
import SimpleBar from "simplebar-react";
import data from "../Data";
import { Icon } from "../../../../components/Component";
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";
import { Link } from "react-router-dom";
import { useFileManager, useFileManagerUpdate } from "./Context";

const FileManagerAside = ({ ...props }) => {
  const { fileManager } = useFileManager();
  const { fileManagerUpdate } = useFileManagerUpdate();

  const asideWrap = useRef(null);

  useEffect(() => {
    fileManagerUpdate.contentHeight(asideWrap.current.clientHeight + 10);
  }, [asideWrap.current]);

  return (
    <React.Fragment>
      <SimpleBar className={`nk-fmg-aside toggle-screen-lg ${fileManager.asideVisibility ? "content-active" : ""}`}>
        <div className="nk-fmg-aside-wrap" ref={asideWrap}>
          <SimpleBar className="nk-fmg-aside-top">
            <ul className="nk-fmg-menu">
              {data.navigation.map((item) => (
                <li
                  key={item.id}
                  onClick={(ev) => {
                    ev.preventDefault();
                    fileManagerUpdate.asideHide();
                  }}
                  className={`${
                    window.location.pathname === `${process.env.PUBLIC_URL}/app-file-manager${item.link}`
                      ? "active"
                      : ""
                  }`}
                >
                  <Link className="nk-fmg-menu-item" to={`${process.env.PUBLIC_URL}/app-file-manager${item.link}`}>
                    <Icon name={item.icon}></Icon>
                    <span className="nk-fmg-menu-text">{item.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </SimpleBar>
          <div className="nk-fmg-aside-bottom">
            <div className="nk-fmg-status">
              <h6 className="nk-fmg-status-title">
                <Icon name="hard-drive"></Icon>
                <span>Хранилище</span>
              </h6>
              <div className="progress progress-md bg-light">
                <div
                  className="progress-bar"
                  style={{
                    width: `${
                      1200 / fileManager.data.plans.find((item) => item.id === fileManager.currentPlan).memory
                    }%`,
                  }}
                ></div>
              </div>
              <div className="nk-fmg-status-info">
                12.47 GB of {fileManager.data.plans.find((item) => item.id === fileManager.currentPlan).memory} GB used
              </div>
              <div className="nk-fmg-status-action">
                <Link
                  to={`${process.env.PUBLIC_URL}/app-file-manager/settings?tab=billing`}
                  className="link link-primary link-sm"
                >
                  Обновление хранилища
                </Link>
              </div>
            </div>
            <div className="nk-fmg-switch">
              <UncontrolledDropdown direction="up">
                <DropdownToggle
                  tag="a"
                  href="#toggle"
                  onClick={(ev) => ev.preventDefault()}
                  className="dropdown-toggle dropdown-indicator-unfold"
                >
                  <div className="lead-text">
                    {fileManager.data.plans.find((item) => item.id === fileManager.currentPlan).title}
                  </div>
                  <div className="sub-text">Only you</div>
                </DropdownToggle>
                <DropdownMenu end>
                  <ul className="link-list-opt no-bdr">
                    {fileManager.data.plans.map((item) => (
                      <li className={item.id === fileManager.currentPlan ? "active" : ""} key={item.id}>
                        <DropdownItem
                          tag="a"
                          href="#item"
                          disabled={item.id !== fileManager.currentPlan}
                          onClick={(ev) => {
                            ev.preventDefault();
                          }}
                        >
                          <span>{item.title}</span>
                        </DropdownItem>
                      </li>
                    ))}
                    <li className="divider"></li>
                    <li>
                      <Link to={`${process.env.PUBLIC_URL}/app-file-manager/settings?tab=billing`} className="link">
                        <span>Upgrade Plan</span>
                      </Link>
                    </li>
                  </ul>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
          </div>
        </div>
      </SimpleBar>
      {fileManager.asideVisibility && (
        <div
          className="toggle-overlay"
          onClick={(ev) => {
            ev.preventDefault();
            fileManagerUpdate.asideVisibility();
          }}
        ></div>
      )}
    </React.Fragment>
  );
};

export default FileManagerAside;
