import React, { useState } from "react";
import icons from "../components/Icons";
import { useFileManagerUpdate } from "../components/Context";
import { Block, BlockBetween, BlockHead, BlockHeadContent, BlockTitle, Icon } from "../../../../components/Component";
const QuickAccess = ({ files }) => {
  const [quickAccess, setQuickAccess] = useState(true);
  const { fileManagerUpdate } = useFileManagerUpdate();
  return (
    <Block className="nk-fmg-quick-list">
      <BlockHead size="xs">
        <BlockBetween className="g-2">
          <BlockHeadContent>
            <BlockTitle tag="h6">Быстрый доступ</BlockTitle>
          </BlockHeadContent>
          <BlockHeadContent>
            <a
              href="#toggle"
              onClick={(ev) => {
                ev.preventDefault();
                setQuickAccess(!quickAccess);
              }}
              className={`"link link-primary toggle-opt ${quickAccess === true ? "active" : ""}`}
            >
              <div className="inactive-text">Show</div>
              <div className="active-text">Hide</div>
            </a>
          </BlockHeadContent>
        </BlockBetween>
      </BlockHead>
      <div className={`toggle-expand-content ${quickAccess === true ? "expanded" : ""}`}>
        <div className="nk-files nk-files-view-grid">
          <div className="nk-files-list">
            {files.map((item, index) => (
              <div className="nk-file-item nk-file" key={index}>
                <div className="nk-file-info">
                  <a className="nk-file-link" href="#link" onClick={(ev) => ev.preventDefault()}>
                    <div className="nk-file-title">
                      <div className="nk-file-icon">
                        <span className="nk-file-icon-type">{icons[item.icon]}</span>
                      </div>
                      <div className="nk-file-name">
                        <div className="nk-file-name-text">
                          <span className="title">{item.name}</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="nk-file-actions hideable">
                  <a
                    href="#folder"
                    onClick={(ev) => {
                      ev.preventDefault();
                      fileManagerUpdate.toggleStarred(item.id);
                    }}
                    className="btn btn-sm btn-icon btn-trigger"
                  >
                    <Icon name="cross"></Icon>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Block>
  );
};

export default QuickAccess;
