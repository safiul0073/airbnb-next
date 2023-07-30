import { MouseEventHandler } from "react";

export interface ButtonPropsType{
    onClick?: MouseEventHandler
    text?: string
    disabled?: boolean
    customStyle?: string
}

export interface MenuItemPropsType {
    icon: any,
    title: string
    url: string
}
