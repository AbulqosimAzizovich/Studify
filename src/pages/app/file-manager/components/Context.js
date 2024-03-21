import React, { useState, createContext, useContext } from "react";

import data, {files} from "../Data";

const FileManager = createContext();

const FileManagerUpdate = createContext();

export function useFileManager(){
  return useContext(FileManager);
}

export function useFileManagerUpdate(){
  return useContext(FileManagerUpdate);
}

const FileManagerProvider = ({...props}) => {
  
  const defaultFileManager = {
    search:'',
    data: data,
    files: files,
    filesView: 'grid',
    asideVisibility: false,
    recoveryFilter: false,
    currentPlan: 'planid01',
    contentHeight: 0
  }

  const [fileManager, setFileManager] = useState(defaultFileManager);

  const fileManagerUpdate = {
    toggleStarred : function(selector) {
      let index = fileManager.files.findIndex((item) => item.id === selector);
      fileManager.files[index].starred = !fileManager.files[index].starred;
      setFileManager({...fileManager})
    },
    toTrash : function(selector, value){
      let index = fileManager.files.findIndex((item) => item.id === selector);
      fileManager.files[index].deleted = value;
      setFileManager({...fileManager})
    },
    asideVisibility : function(){
      setFileManager({...fileManager, asideVisibility : !fileManager.asideVisibility})
    },
    asideHide : function(){
      setFileManager({...fileManager, asideVisibility : false})
    },
    filesView : function(value){
      setFileManager({...fileManager, filesView : value})
    },
    recoveryFilter : function(){
      setFileManager({...fileManager, recoveryFilter : !fileManager.recoveryFilter})
    },
    currentPlan : function(value){
      setFileManager({...fileManager, currentPlan : value})
    },
    search : function(value){
      setFileManager({...fileManager, search : value})
    },
    contentHeight : function(value){
      setFileManager({...fileManager, contentHeight : value})
    },
  };



  return (
    <FileManager.Provider value={{fileManager}}>
      <FileManagerUpdate.Provider value={{fileManagerUpdate}}>
        {props.children}
      </FileManagerUpdate.Provider>
    </FileManager.Provider>
  );
};

export default FileManagerProvider;