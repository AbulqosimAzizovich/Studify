import React, {useEffect} from "react";
import { Outlet } from "react-router-dom";
import Appbar from "./appbar/Appbar";
import Sidebar from "./sidebar/Sidebar";
import Head from "./head/Head";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import AppRoot from "./global/AppRoot";
import AppMain from "./global/AppMain";
import AppWrap from "./global/AppWrap";

const Layout = ({title, app, ...props}) => {  

  
  return (
      <>
        <Head title={!title && 'Loading'} />
        <AppRoot>
          <Appbar />
          <AppMain>
            <Sidebar fixed />
            <AppWrap>
              <Header fixed />
              <Outlet />
              <Footer />
            </AppWrap>
          </AppMain>
        </AppRoot>
      </>
  );
};
export default Layout;
