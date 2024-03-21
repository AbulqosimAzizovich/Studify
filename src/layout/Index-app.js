import React, {useEffect} from "react";
import { Outlet } from "react-router-dom";
import Appbar from "./appbar/Appbar";
import Sidebar from "./sidebar/Sidebar";
import Head from "./head/Head";
import AppHeader from "./header/AppHeader";
import AppRoot from "./global/AppRoot";
import AppMain from "./global/AppMain";
import AppWrap from "./global/AppWrap";

import { useTheme } from "./provider/Theme";
import FileManagerProvider from "../pages/app/file-manager/components/Context";

const Layout = ({title, app, ...props}) => {
  const theme = useTheme();

  return (
      <FileManagerProvider>
        <Head title={!title && 'Loading'} />
        <AppRoot className="npc-apps apps-only">
          <Appbar />
          <AppMain>
          {theme.sidebarMobile && <Sidebar fixed />}
            <AppWrap>
              <AppHeader app={app} fixed />
              <Outlet />
            </AppWrap>
          </AppMain>
        </AppRoot>
      </FileManagerProvider>
  );
};
export default Layout;
