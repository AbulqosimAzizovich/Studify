import React, {useState} from "react";
import { DropdownMenu, DropdownToggle, Dropdown } from "reactstrap";
import { Icon } from "../../../../components/Component";
import { ChatItemHeader } from "../../../../pages/app/chat/ChatPartials";
import { chatData } from "../../../../pages/app/chat/ChatData";
import { Link } from "react-router-dom";
import { useThemeUpdate } from "../../../provider/Theme";

const ChatDropdown = () => {
  const themeUpdate = useThemeUpdate();
  const [open, setOpen] = useState(false);
  const toggle = () => {   
    themeUpdate.sidebarHide();
    setOpen((prevState) => !prevState)
  };
  return (
    <Dropdown isOpen={open} toggle={toggle}>
      <DropdownToggle tag="a" href="#dropdown" onClick={(ev) => ev.preventDefault()} className="nk-quick-nav-icon">
        <div className="icon-status icon-status-na">
          <Icon name="comments"></Icon>
        </div>
      </DropdownToggle>
      <DropdownMenu end className="dropdown-menu-xl">
        <div className="dropdown-head">
          <span className="sub-title nk-dropdown-title">Recent Chats</span>
          <Link to={`${process.env.PUBLIC_URL}/user-profile-setting`}>Setting</Link>
        </div>
        <div className="dropdown-body">
          <ul className="chat-list">
            {chatData.map((item, i) => {
              return item.convo.length > 0 && !item.group && <ChatItemHeader key={i} item={item} />;
            })}
          </ul>
        </div>
        <div className="dropdown-foot center">
          <Link to={`${process.env.PUBLIC_URL}/app-chat`}>View All</Link>
        </div>
      </DropdownMenu>
    </Dropdown>
  );
};

export default ChatDropdown;
