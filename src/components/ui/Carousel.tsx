import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { CarouselPropsType } from '../../../types'

const Carousel = ({
    title="Get inspiration for your next stay",
    description="Listboxes are a great foundation for building custom, accessible select menus for your app, complete with robust support for keyboard navigation."
}:CarouselPropsType) => {
  return (
    <div className="flex flex-row justify-between items-center">
        <div className="w-2/3">
            <p className="font-bold text-gray-800 text-2xl">{title}</p>
            <p className="font-light text-sm py-4">{description}</p>
        </div>
        <div className="text-2xl cursor-pointer">
            <MdKeyboardArrowRight/>
        </div>
    </div>
  )
}

export default Carousel