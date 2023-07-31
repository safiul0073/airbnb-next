import Image from 'next/image'
import React from 'react'
import { CardPropsType } from '../../../types'

const Card = ({
    image="/images/man1.jpeg",
    title="The Coldest Sunset",
    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. Funny pictures, backgrounds for your desktop, diagrams and illustrated instructions.",
    location="Looking near: Bristol Bath & London",
    about="23 years/Male"
}:CardPropsType) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <Image 
      className="w-full" 
      src={image}
      alt="Sunset in the mountains"
      width={150}
      height={200}
    />
    <div className="px-6 pt-4 pb-2">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-left text-md text-black">{about}</p>
      <p className="text-gray-800 text-sm text-left">
        {description}
      </p>
    </div>
    <div className="px-4 pt-1 pb-2">
      <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-800 mr-2 mb-2">{location}</span>
    </div>
  </div>
  )
}

export default Card