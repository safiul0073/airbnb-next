import React, { Dispatch, MouseEventHandler, SetStateAction } from "react";

export interface ButtonPropsType{
    onClick?: MouseEventHandler
    text: string
    disabled?: boolean
    styleClasses?: string,
    type?: 'button' | 'submit'
}

export interface MenuItemPropsType {
    icon: React.JSX.Element,
    title: string
    category: string,
    page?: React.JSX.Element,
}

export interface ModalPropsType {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>,
    title: string,
    children: React.ReactNode
}

export interface TextInputPropsType {
    type?: string,
    placeholder?: string,
    classInput?: string,
    classGroup?:string ,
    register:any ,
    name: string,
    error: any 
}

export interface SocialButtonPropsType {
    icon: any,
    title: string
}

export interface CarouselPropsType {
    title?: string,
    description?: string,
}

export interface CardPropsType extends CarouselPropsType {
    image?: string,
    location?: string,
    about?: string
}

export interface LoginFormValuesTypes {
    email: string,
    password: string
}

export interface RegisterFormValuesTypes extends LoginFormValuesTypes {
    name: string,
}