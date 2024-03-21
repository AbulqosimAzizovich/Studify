import React from "react";
import classNames from "classnames";
import SimpleBar from "simplebar-react";
import Menu from "../menu/Menu";

import { useTheme, useThemeUpdate } from '../provider/Theme';

const Sidebar = ({ fixed, className }) => {
  
  const theme = useTheme();
  const themeUpdate = useThemeUpdate();

  const classes = classNames({
    "nk-sidebar": true,
    "nk-sidebar-fixed": fixed,
    "nk-sidebar-active": theme.sidebarVisibility,
    "nk-sidebar-mobile": theme.sidebarMobile,
    [`is-light`]: theme.sidebar === "white",
    [`is-${theme.sidebar}`]: theme.sidebar !== "white" && theme.sidebar !== "light",
    [`${className}`]: className,
  });
  return (
    <>
      <div className={classes}>
        <SimpleBar className="nk-sidebar-inner">
          <Menu />
        </SimpleBar>
      </div>
      {theme.sidebarVisibility && <div 
      onClick={themeUpdate.sidebarVisibility}
       className="nk-sidebar-overlay"></div>}
    </>
  );
};
export default Sidebar;
