import React from 'react'
import { useFileManager } from "../components/Context";
import Files from '../components/Files';

const AllFiles = () => {

  const {fileManager} = useFileManager();
  
  const files = [ ...fileManager.files.filter(item => !item.deleted)]
  return (
    <>
        <Files files={files} />
    </>
  )
}

export default AllFiles