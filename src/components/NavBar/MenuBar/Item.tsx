
import React from 'react'
import { MenuItemPropsType } from '../../../../types'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation';

export const Item = ({
    icon,
    title,
    category,
}:MenuItemPropsType) => {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  return (
    <Link
      href={`/?category=${category}`} 
      className={`text-gray-900 pb-3 px-2 hover:text-blue-500 hover:border-b-4 hover:border-blue-500 flex flex-col gap-1 items-center ${category == categoryParam ? 'text-blue-500 border-b-4 border-blue-500' : ''}`}
      >
        <div className="text-[30px] font-light">
            {icon}
        </div>
        <p className="font-normal inline-block">{title}</p>
    </Link>
  )
}
