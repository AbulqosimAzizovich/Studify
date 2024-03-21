import React from 'react'
import classNames from 'classnames';
import { Icon } from '../../../../components/Component';
import { useFileManager, useFileManagerUpdate } from "./Context";

export const options = [
    {
      title: 'Grid View',
      icon: 'view-grid3-wd',
      value: 'grid'
    },
    {
      title: 'Group View',
      icon: 'view-group-wd',
      value: 'group'
    },
    {
      title: 'List View',
      icon: 'view-row-wd',
      value: 'list'
    },
]

const ViewFilter = ({listOpt}) => {

    const {fileManager} = useFileManager();
    const {fileManagerUpdate} = useFileManagerUpdate();


  const mainClass = classNames({
      [`nk-block-tools g-3`]: !listOpt,
      [`link-list-opt no-bdr`]: listOpt,
  });
  const linkClass = classNames({
      [`nk-switch-icon`]: !listOpt
  });

  return (
    <ul className={mainClass}>
        {options.map((item) => (
            <li key={item.value}>
                <a href="#link" onClick={(ev) => {
                  ev.preventDefault();
                  fileManagerUpdate.filesView(item.value);
                }} className={`${linkClass} ${fileManager.filesView == item.value ? 'active' : ''}`}>
                    <Icon name={item.icon}></Icon>
                    {listOpt && <span>{item.title}</span>}
                </a>
            </li>
        ))}
    </ul>
  )
}


export default ViewFilter