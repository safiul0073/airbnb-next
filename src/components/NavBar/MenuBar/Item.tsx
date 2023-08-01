
import React from 'react'
import { MenuItemPropsType } from '../../../../types'
import Link from 'next/link'
import { getParamValue } from '@/hooks/getParamValue';

export const Item = ({
    icon,
    title,
    category,
}:MenuItemPropsType) => {
  const categoryValue = getParamValue()
  return (
    <Link
      href={`/?category=${category}`} 
      className={`text-gray-700 pb-3 px-4 hover:text-blue-500 hover:border-b-4 hover:border-blue-500 flex flex-col gap-3 items-center ${category == categoryValue ? 'text-blue-500 border-b-4 border-blue-500' : ''}`}
      >
        <div className="text-[40px] font-mono">
            {icon}
        </div>
        <p className="font-normal inline-block">{title}</p>
    </Link>
  )
}
