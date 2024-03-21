import { Direction } from "reactstrap/types/lib/Dropdown";
import { Placement } from "@popperjs/core";
import * as Icon from 'react-feather';

export type textColorDataType = {
    class: string;
    text: string;
    code: string
}

export type blockQuotesDataType = {
    class: string;
    text: string;
    footer: string
}

export type AvatarSizetype = {
    class: string;
    image: string;
}

export type AvatarStatusType = {
    class: string;
    image: string;
    status: string
}

export type AvatarGroupType = {
    id: number;
    child: AvatarChildType[];
}

 type AvatarChildType = {
    id: number;
    class: string;
    image: string;
}

export type AdditiveBorderType = {
    class: string;
    text: string;
    textClass?: string;
    alertText?: string | JSX.Element;
    text2?: string;
}

export type ImageClass = {
    class: string
}

export type TabDatatype = {
    id: string;
    text: string | JSX.Element | JSX.Element[]
}

export type justifyDataType = {
    image: string;
    head: string;
    text: string;
}

export type JustifyTabType = {
    data: justifyDataType[],
    id: string
}

export type ListDataType = {
    class: string;
    data: string[];
}

export type ContectualListDataType = {
    id?: string;
    class: string
    htmlText: string | JSX.Element | JSX.Element[]
}

export type CustomlistType = {
    class: string;
    head: string;
    mail: string;
    image: string;
    span: string;
    subtext: string;
    follower: string;
}

export type CheckboxListType = {
    class: string;
    labelClass?: string;
    text: string;
    idFor?: string;
}

export type BadgeListType = {
    text: string;
    badgeClass: string;
    badgeText: string;
}

export type DisableListType = {
    class: string;
    image: string;
    text: string;
}

export type ScrollableListType = {
    image: string;
    head: string;
    mail: string;
    small: string;
}
export type BasicDropdownType = {
    class: string;
    divClass?: string;
    bodyClass?: string;
    position?: Direction
    text: string;
    menulist: string[]
}

type FlushChildItem = {
    text?: string;
};

export type FlushDataType = {
    id: string;
    head: string;
    child: FlushChildItem[]
}

export type IconDataType = {
    id: string
    icon: keyof typeof Icon,
    head: string
    text: string | JSX.Element | JSX.Element[]
}

export type OutlineDataType = {
    id: string;
    head: string
    text: string | JSX.Element | JSX.Element[]
}
export type AlertColorType = {
    data: AdditiveBorderType[]
}

export type AdditionalAlertType = {
    class: string;
    head: string;
    headclass: string;
    text: string;
    subtext: string;
}

export type PopoverType = {
    id: string;
    placement: string;
    popoverHeader: string;
    popoverBody: string;
    btnColor: string;
    btnText: string;
    trigger?: string;
}
export interface TooltipState {
    tooltip1: boolean;
    tooltip2: boolean;
    tooltip3: boolean;
  }

type modalDataType = {
    isOpen: boolean;
    header?: boolean;
    class?: string;
    footer?: boolean;
    toggler: () => void
    title?: string;
    size?: string;
    bodyClass?: string;
    button?: string;
    center?: boolean;
}

export type commonModalTypes = {
    modalData: modalDataType
    children: string | JSX.Element | JSX.Element[]
}

export type FullscreenModalType = {
    title: string;
    text: string
}

export type LargeModalTyep = {
    text: string
}

export type ModalcommonType = {
    class: string;
    text: string
}

export type TooltipType = {
    class: string;
    text: string;
    position?: Placement
}

export type HtmlTooltipType = {
    class: string;
    text: string;
    tooltip: string | JSX.Element | JSX.Element[]
}
export type GridTableHeadType = {
    class?: string;
    text1: string;
    text2: string
}   

export type BadgeIconType = {
    class: string;
    color?: string;
    iconName: keyof typeof Icon
}

export type BadgeButtonType = {
    class: string
    text: string
    iconName: keyof typeof Icon
}

export type BasicProgresstype = {
    class: string;
    value: string;
}

export type MultipleBarType = {
    data: BasicProgresstype[]
}

export type CustomProgressType = {
    text: string;
    class?: string;
    value: string;
}
