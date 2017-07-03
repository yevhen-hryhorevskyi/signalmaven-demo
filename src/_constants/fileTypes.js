import {PdfIcon, DocIcon, TxtIcon} from "./assetUrls";
export const fileTypes = "application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/msword,text/plain";

export const fileIcons = {
    "application/pdf": PdfIcon,
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": DocIcon,
    "application/msword": DocIcon,
    "text/plain": TxtIcon
};

export const typesAccepted = Object.keys(fileIcons);
