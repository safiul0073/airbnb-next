"use client";

import React from 'react'
import { menuItems } from '../../../../constants/menuItems';
import { MenuItemPropsType } from '../../../../types';
import { Item } from './Item';

export default function Index() {
  return (
    <div className="my-2 mt-4 shadow-md pb-4">
        <ul className="px-[40px] flex flex-row font-medium mt-0  space-x-8 text-sm overflow-x-auto">
            {
                menuItems.map((item:MenuItemPropsType, index:number) => (
                    <>
                        <li>
                            <Item
                                title={item.title}
                                icon={item.icon}
                                url={item.url}
                                key={index}
                            />
                        </li>
                    </>
                ))
            }
        </ul>
    </div>
  )
}
