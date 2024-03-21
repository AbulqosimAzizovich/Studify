import React from "react";
import ContentAlt from "../../../../layout/content/ContentAlt";
import Head from "../../../../layout/head/Head";
import FileManagerAside from "./Aside";
import { useFileManager } from "./Context";

const FileManagerLayout = ({...props}) => {
  const {fileManager} = useFileManager();

  return (
    <>
      <Head title="File Manager"></Head>
      <ContentAlt>
        <div className="nk-fmg">
          <FileManagerAside  />
          <div className="nk-fmg-body" style={{minHeight:`${fileManager.contentHeight}px`}}>
            {props.children}
          </div>
        </div>
      </ContentAlt>
    </>
  );
};

export default FileManagerLayout;
