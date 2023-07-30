"use client"

import React from 'react'
import { MenuItemPropsType } from '../../../../types'
import Link from 'next/link'

export const Item = ({
    icon,
    title,
    url,
}:MenuItemPropsType) => {
  return (
    <Link href={url} className="text-gray-900 hover:text-blue-500 flex flex-col gap-1 items-center">
        <div className="text-[30px] font-light">
            {icon}
        </div>
        <p className="font-normal">{title}</p>
    </Link>
  )
}
