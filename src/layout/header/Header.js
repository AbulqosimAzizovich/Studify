import React from "react";
import classNames from "classnames";
import Toggle from "../sidebar/Toggle";
import User from "./dropdown/user/User";
import Notification from "./dropdown/notification/Notification";
import AppDropdown from "./dropdown/app/App";
import ChatDropdown from "./dropdown/chat/Chat";
import { Icon } from "../../components/Component";
import { Link } from "react-router-dom";

import { useTheme, useThemeUpdate } from "../provider/Theme";

const Header = ({ fixed, className }) => {
  const theme = useTheme();
  const themeUpdate = useThemeUpdate();
  const headerClass = classNames({
    "nk-header": true,
    "nk-header-fixed": fixed,
    [`is-light`]: theme.header === "white",
    [`is-${theme.header}`]: theme.header !== "white" && theme.header !== "light",
    [`${className}`]: className,
  });
  let currentUrl;

  if (window.location.pathname !== undefined) {
    currentUrl = window.location.pathname;
  } else {
    currentUrl = null;
  }
  return (
    <div className={headerClass}>
      <div className="container-fluid">
        <div className="nk-header-wrap">
          <div className="nk-menu-trigger d-xl-none ms-n1">
            <Toggle className="nk-nav-toggle nk-quick-nav-icon" icon="menu" click={themeUpdate.sidebarVisibility} />
          </div>
          <div className="nk-header-app-name">
            <div className="nk-header-app-logo">
              <Icon name="dashlite" className="bg-purple-dim"></Icon>
            </div>
            <div className="nk-header-app-info">
              <span className="lead-text">Medify CRM</span>
            </div>
          </div>
          {/* <div className="nk-header-menu is-light">
            <div className="nk-header-menu-inner">
              <ul className="nk-menu nk-menu-main">
                <li
                  className={`nk-menu-item ${currentUrl === process.env.PUBLIC_URL + "/" ? "active current-page" : ""}`}
                >
                  <Link to={`${process.env.PUBLIC_URL}/`} className="nk-menu-link">
                    <span className="nk-menu-text">Overview</span>
                  </Link>
                </li>
                <li
                  className={`nk-menu-item ${
                    currentUrl === process.env.PUBLIC_URL + "/components" ? "active current-page" : ""
                  }`}
                >
                  <Link to={`${process.env.PUBLIC_URL}/components`} className="nk-menu-link">
                    <span className="nk-menu-text">Components</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div> */}
          <div className="nk-header-tools">
            <ul className="nk-quick-nav">
              <li className="chats-dropdown hide-mb-xs">
                <ChatDropdown />
              </li>
              <li className="notification-dropdown me-n1">
                <Notification />
              </li>
              <li className="list-apps-dropdown d-lg-none">
                <AppDropdown />
              </li>
              <li className="user-dropdown">
                <User />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
