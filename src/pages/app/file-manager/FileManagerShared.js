import React from "react";
import Body from "./components/Body";
import Shared from "./views/Shared";
import { BlockTitle } from "../../../components/Component";
import Layout from "./components/Layout";

const FileManager = () => {
  return (
    <Layout>
      <Body searchBar title={<BlockTitle page>Преслать</BlockTitle>}>
        <Shared />
      </Body>
    </Layout>
  );
};

export default FileManager;
