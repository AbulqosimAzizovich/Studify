import { ChangeEvent } from "react";

export interface FileSearchBarProps {
    setSearchFile: React.Dispatch<React.SetStateAction<string>>;
    searchFile: string
}

export interface AddUploadMediaProps {
    onFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onFileUpload: () => void;
}

export interface FileDataType {
    id: number;
    name: string;
    size: string;
    modify: string;
    icon: string;
    folderClass: string;
    title: string;
    folderFiles: string;
    folderTime: string;
}

export interface FileManagerBodyProps {
    myFile: FileDataType[];
    fileList: React.ReactNode;
}

export interface FileFolderItemProp {
    item : FileDataType;
}