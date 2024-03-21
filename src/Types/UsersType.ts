export interface UserEditTableProp {
    id: number;
    projectName: string;
    date: string;
    status: string;
    price: string;
}

export interface SocialProfileCardProps {
    id: number;
    avatar: string;
    icon: string;
    name: string;
    email: string;
    totalPost: string;
    follower: string;
    following: string;
}

export interface SocialProfileType {
    colClass: string;
}