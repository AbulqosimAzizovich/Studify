import React from 'react'
import { useFileManager } from "../components/Context";
import Files from '../components/Files';

const Shared = () => {

  const {fileManager} = useFileManager();
  
  const files = [...fileManager.files.filter((item) => (item.access && item.access.length > 0)  && !item.deleted)]

  return (
    <>
        <Files files={files}  fixedView="list"  />
    </>
  )
}

export default Shared