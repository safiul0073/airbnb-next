"use client";

import React from 'react'
import { menuItems } from '../../../constants/menuItems';
import { MenuItemPropsType } from '../../../../types';
import { Item } from './Item';

export default function Index() {
  return (
    <div className="mt-6 shadow-md">
        <ul className="px-[40px] flex flex-row font-medium mt-0 space-x-4 text-sm overflow-x-auto">
            {
                menuItems.map((item:MenuItemPropsType, index:number) => (
                    <>
                        <li
                            key={item.category}
                        >
                            <Item
                                key={item.category}
                                title={item.title}
                                icon={item.icon}
                                category={item.category}
                            />
                        </li>
                    </>
                ))
            }
        </ul>
    </div>
  )
}
