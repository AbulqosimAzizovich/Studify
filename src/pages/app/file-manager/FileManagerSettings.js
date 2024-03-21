import React from "react";
import Body from "./components/Body";
import Settings from "./views/Settings";
import { BlockTitle } from "../../../components/Component";
import Layout from "./components/Layout";

const FileManager = () => {
  return (
    <Layout>
      <Body title={<BlockTitle page>Настройки</BlockTitle>}>
        <Settings />
      </Body>
    </Layout>
  );
};

export default FileManager;
