import React from 'react'
import { SocialButtonPropsType } from '../../../types'

const SocialButton = ({
    icon,
    title
}:SocialButtonPropsType) => {
  return (
    <>
        <button className=" my-2 rounded-md bg-white w-full py-3 px-3 text-gray-600 border border-gray-400 outline-none">
            <div className="float-left pt-1">
                {icon}
            </div>
            {title}
        </button>
    </>
  )
}

export default SocialButton