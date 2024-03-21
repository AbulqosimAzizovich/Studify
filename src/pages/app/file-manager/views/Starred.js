import React from 'react'
import { useFileManager } from "../components/Context";
import Files from '../components/Files';

const Starred = () => {

  const {fileManager} = useFileManager();
  
  const files = [...fileManager.files.filter((item) => item.starred === true  && !item.deleted)]
  return (
    <>
        <Files files={files}  fixedView="list"  />
    </>
  )
}

export default Starred