import React from "react";
import Body from "./components/Body";
import AllFiles from "./views/AllFiles";
import { BlockTitle } from "../../../components/Component";
import Layout from "./components/Layout";

const FileManager = () => {
  return (
    <Layout>
      <Body searchBar viewFilter title={<BlockTitle page>Файлы</BlockTitle>}>
        <AllFiles />
      </Body>
    </Layout>
  );
};

export default FileManager;
