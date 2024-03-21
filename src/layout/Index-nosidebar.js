import React from "react";
import { Outlet } from "react-router-dom";
import Head from "./head/Head";

const Layout = ({title, ...props}) => {

  return (
    <>
      <Head title={!title && 'Loading'} />
      <div className="nk-app-root">
        <div className="nk-wrap nk-wrap-nosidebar">
          <div className="nk-content">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
export default Layout;
