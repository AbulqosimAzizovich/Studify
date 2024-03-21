import React, { useState, useEffect, useContext } from "react";

import Body from "./components/Body";
import Home from "./views/Home";
import Layout from "./components/Layout";

import { BlockTitle } from "../../../components/Component";

const FileManager = () => {

  return (
    <Layout>
      <Body searchBar title={<BlockTitle page>Основной</BlockTitle>}>
        <Home />
      </Body>
    </Layout>
  );
};

export default FileManager;
