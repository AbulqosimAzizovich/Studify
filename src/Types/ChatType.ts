export interface SideHeaderProp {
    title: string;
}

export interface AllMembersType {
    id: number;
    name: string;
    image: string;
    status: string;
    time: string;
    badge?: number;
    online: boolean;
}

export interface ContactEditProp {
    divClass?: string;
}

export interface ChatType {
    users: number[];
    messages: MessagesType[];
}

export interface MessagesType {
    sender: number;
    text: string;
    time: string;
}

interface ChatMessage {
    sender: number;
    time: string;
    text: string;
    status?: boolean
}

export interface ChatConversation {
    id: number;
    users: number[];
    lastMessageTime: string;
    online?: boolean;
    messages: ChatMessage[];
}
export interface ContactChildItem {
    id: number;
    src?: string;
    text?: string;
    textColor?: string;
    name: string;
    number: string;
}

export interface ContactParentItem {
    id: number;
    title: string;
    child: ContactChildItem[];
}

export interface ChatInitialState {
    allMembers: AllMembersType[];
    members: AllMembersType[];
    chats: ChatConversation[];
    chatContact: ContactParentItem[];
    currentUser: Partial<AllMembersType>;
    selectedUser: any;
    toggleSideBar: boolean;
}