"use client"
import React, { useState } from 'react'
import {FaUserCircle} from "react-icons/fa"

export default function Menu() {
    const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
        <div className="relative">
            <div className="flex flex-row justify-between items-center gap-3">
                <p className="text-black hidden md:block">Airbnb your home</p>
                <div  className="rounded-full border border-gray-200 shadow-md px-2  py-2 cursor-pointer">
                    <div 
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-[70px] flex flex-row justify-between items-center"
                        >
                        <div className="pl-2 flex flex-col gap-[2px]">
                            <div className="w-[15px] h-[3px] bg-gray-600"></div>
                            <div className="w-[15px] h-[3px] bg-gray-600"></div>
                            <div className="w-[15px] h-[3px] bg-gray-600"></div>
                        </div>
                        <div className="text-[35px] text-gray-500">
                            <FaUserCircle />
                        </div>
                    </div>
                </div>
            </div>
            {/* menu buttons open when click the user sign */}
            {isOpen && 
            <>
                <div className="absolute w-[40vw] rounded-md shadow-md md:w-3/4 bg-white to-12 right-0 text-sm">
                    <div className="flex flex-col cursor-pointer overflow-y-auto">
                        <div className="px-4 py-3 font-medium hover:bg-gray-200">
                            login
                        </div>
                        <div className="px-4 py-3 font-medium hover:bg-gray-200">
                            Sign Up
                        </div>
                    </div>
                </div>
            </>}
    </div>
  )
}
