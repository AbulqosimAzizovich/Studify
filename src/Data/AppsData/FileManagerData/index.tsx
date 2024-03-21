import { AlertCircle, Clock, Folder, Home, Star, Trash2 } from "react-feather";
import { FileDataType } from "../../../Types/FileManagerType";

export const fileSidebarButton = [
    {
        id: 1,
        icon: <Home />,
        text: 'Home'
    },
    {
        id: 2,
        icon: <Folder />,
        text: 'All'
    },
    {
        id: 3,
        icon: <Clock />,
        text: 'Recent'
    },
    {
        id: 4,
        icon: <Star />,
        text: 'Starred'
    },
    {
        id: 5,
        icon: <AlertCircle />,
        text: 'Recovery'
    },
    {
        id: 6,
        icon: <Trash2 />,
        text: 'Deleted'
    },
];

export const quickAccessData = [
    {
        id: 1,
        quickClass: 'youtube-play font-danger',
        quickTitle: 'Videos'
    },
    {
        id: 2,
        quickClass: 'th font-info',
        quickTitle: 'Apps'
    },
    {
        id: 3,
        quickClass: 'file-text-o font-secondary',
        quickTitle: 'Document'
    },
    {
        id: 4,
        quickClass: 'music font-warning',
        quickTitle: 'Music'
    },
    {
        id: 5,
        quickClass: 'download font-primary',
        quickTitle: 'Download'
    },
    {
        id: 6,
        quickClass: 'folder font-info',
        quickTitle: 'Folder'
    },
    {
        id: 7,
        quickClass: 'file-archive-o font-secondary',
        quickTitle: 'Zip File'
    },
    {
        id: 8,
        quickClass: 'trash font-danger',
        quickTitle: 'Trash'
    }
]

export const filesListData: FileDataType[] = [
    {
        id: 1,
        name: "Logo.psd",
        size: "2.0 MB",
        modify: "7 hour ago",
        icon: "folder font-info",
        folderClass: "file-archive-o",
        title: "Tivo Admin",
        folderFiles: "20 files",
        folderTime: '2 Hour ago',
    },
    {
        id: 2,
        name: "Backend.xls",
        size: "3.0 GB",
        modify: "2 Day ago",
        icon: "file-excel-o font-success",
        folderClass: "file-archive-o",
        title: "Unice Admin",
        folderFiles: "15 files",
        folderTime: '3 Day ago',
    },
    {
        id: 3,
        name: "Project.zip",
        size: "1.9 GB",
        modify: "1 Day ago",
        icon: "file-archive-o font-warning",
        folderClass: "folder",
        title: "Viho Admin",
        folderFiles: "14 files",
        folderTime: '3 Hour ago',
    },
    {
        id: 4,
        name: "Report.txt",
        size: "0.9 KB",
        modify: "1 Day ago",
        icon: "folder font-primary",
        folderClass: "folder",
        title: "Koho Admin",
        folderFiles: "10 files",
        folderTime: '1 Day ago',
    },
];
