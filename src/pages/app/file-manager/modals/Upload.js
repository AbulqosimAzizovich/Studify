import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { Button } from "reactstrap";
import { Icon } from "../../../../components/Component";
import { bytesToMegaBytes } from "../../../../utils/Utils";

import {iconsType} from '../components/Icons';

const Upload = ({ toggle }) => {

  const [files, setFiles] = useState([]);
  
  const handleDropChange = (acceptedFiles) => {
    setFiles(acceptedFiles);
  };

  const removeFromList = (name) => {
    let defaultFiles = files;
    defaultFiles = defaultFiles.filter((item) => item.name !== name);
    setFiles([...defaultFiles]);
  };

  return (
    <React.Fragment>
      <a
        href="#close"
        onClick={(ev) => {
          ev.preventDefault();
          toggle();
        }}
        className="close"
      >
        <Icon name="cross-sm"></Icon>
      </a>
      <div className="modal-body modal-body-md">
        <div className="nk-upload-form">
          <h5 className="title mb-3">Upload File</h5>
          <Dropzone onDrop={(acceptedFiles) => handleDropChange(acceptedFiles)}>
            {({ getRootProps, getInputProps }) => (
              <section>
                <div {...getRootProps()} className="dropzone upload-zone small bg-lighter my-2 dz-clickable">
                  <input {...getInputProps()} />
                  <div className="dz-message">
                    <span className="dz-message-text">
                      <span>Drag and drop</span> file here or <span>browse</span>
                    </span>
                  </div>
                </div>
              </section>
            )}
          </Dropzone>
        </div>
        <div className="nk-upload-list">
          <h6 className="title">Uploaded Files</h6>
          {files.length > 0 ? (
            files.map((file, index) => (
              <div className="nk-upload-item" key={index}>
                <div className="nk-upload-icon">
                  {iconsType[file.type] ? iconsType[file.type] : iconsType["others"]}
                </div>
                {console.log(file.type)}
                <div className="nk-upload-info">
                  <div className="nk-upload-title">
                    <span className="title">{file.name}</span>
                  </div>
                  <div className="nk-upload-size">{bytesToMegaBytes(file.size)} MB</div>
                </div>
                <div className="nk-upload-action">
                  <a
                    href="#delete"
                    onClick={(ev) => {
                      ev.preventDefault();
                      removeFromList(file.name);
                    }}
                    className="btn btn-icon btn-trigger"
                  >
                    <Icon name="trash"></Icon>
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="d-flex justify-center">
              <span>No files added yet !</span>
            </div>
          )}
        </div>
        <div className="nk-modal-action justify-end">
          <ul className="btn-toolbar g-4 align-center">
            <li>
              <a
                href="#toggle"
                onClick={(ev) => {
                  ev.preventDefault();
                  toggle();
                }}
                className="link link-primary"
              >
                Cancel
              </a>
            </li>
            <li>
              <Button color="primary">
                Add Files
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Upload;
