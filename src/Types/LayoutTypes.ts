import { ChangeEvent } from "react";
import * as Icon from 'react-feather';

export interface LayoutState {
    searchIcon: boolean;
    bookMarkClass: boolean;
    pinedMenu: string[];
    sideBarToggle: boolean;
}

export interface SubChildrenType {
    title: string;
    type: string;
    url: string;
}

interface SidebarChildrenType {
    url?: string;
    title: string;
    type: string;
    menu?: SubChildrenType[]
    bookmark?: boolean
}

export interface SidebarItemType {
    id?: number
    title?: string;
    icon?: string;
    type?: string;
    active?: boolean;
    url?: string;
    bookmark?: boolean;
    menu?: SidebarChildrenType[]
}
export interface SidebarMenuType {
    title?: string;
    menucontent?: string;
    menu: SidebarItemType[]
}

export interface MenuListType {
    menu: SidebarItemType[];
    setActiveMenu: (temp: any) => void;
    activeMenu: any;
    level: number;
}

export interface FolderItemType {
    id: number;
    link: string;
    text: string;
};

interface ChildItemType {
    id: number;
    link: string;
    text: string;
};

export interface HeaderDataType {
    id: number;
    icon: string;
    text: string;
    child: ChildItemType[];
};
export interface SearchBarContainPropsType {
    handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
    suggestion: SidebarItemType[];
};
export interface MessageHeader {
    id: number;
    src: string;
    name: string;
    text: string;
};
export interface ProfileType {
    id: number;
    icon: keyof typeof Icon;
    text: string;
};
export interface BookMarkContainerPropsType {
    bookmarkList: SidebarItemType[];
    handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
    handleBookmark: (event: React.MouseEvent<HTMLElement, MouseEvent>, data: SidebarItemType) => void;
    bookmarkItems: SidebarItemType[];
}

export interface CallbackNavType {
    (select: string, open: boolean): void;
}
export interface NavCustomizerProps {
    callbackNav: CallbackNavType;
    selected: string;
};

export interface ConfigurationProps {
    modal: boolean;
    toggle: () => void;
}

export interface ColorsType {
    colorBackground1: string;
    colorBackground2: string;
}

export interface BookmarkListProps {
    bookmarkList: SidebarItemType[];
};