export interface CallbackProp {
    activeCallback: (tab: number) => void;
}

export interface EmailContentProps {
    activeCallback: (tab: number) => void;
    activeTab: number;
}

export interface LetterBoxSidebarType {
    title: string;
    icon: string;
    id: string;
    color?: string;
    badge?: boolean
}

export interface EmailStateProp {
    navId: string;
    modal: boolean;
    composeEmail: boolean;
    faIcon: boolean;
    interviewEmail: boolean;
    page?: boolean;
    inboxEmail: InboxEmailType[];
    emailValidation: boolean
}

export interface InboxEmailType {
    id: number;
    image?: string;
    shortName?: string;
    name: string;
    color: string;
    message: string;
    subMessage: string;
    badge?: BadgeType[];
    time: string;
    star?: boolean
}

interface BadgeType {
    title: string;
    color: string;
}

export interface CommonDataType {
    data: InboxEmailType,
    i: number
}

export interface AddNewEmailInterFace {
    userEmail: string
    subject: string
}

export interface ToggleComponentProps {
    ccShow: boolean
    bccShow: boolean
}

export interface MailPropsType {
    handlePrint: () => void;
}

export interface LetterBoxNavContentType {
    navId: string;
}

export interface LetterBoxNavType {
    navId: string;
    setNavId: (key: string) => void;
}