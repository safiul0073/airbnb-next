"use client"
import { Search } from '@/components/forms/Search'
import Modal from '@/components/ui/Modal'
import React, { useState } from 'react'
import { FiSearch } from "react-icons/fi"

export default function SearchBar() {
    const [open, setOpen] = useState<boolean>(false)
  return (
    <>
        <div className="border border-gray-300 hover:shadow-md px-4 md:py-2 rounded-full flex flex-row gap-2 justify-between items-center">
            <div className="font-normal md:font-medium text-gray-700 px-1 md:px-2 cursor-pointer">
                Anywhere
            </div>
            <div className="font-normal md:font-medium text-gray-700 border-x border-gray-300 px-2 md:px-4 cursor-pointer">
                Any Week
            </div>
            <div className="font-normal md:font-medium text-gray-500 px-1 md:px-2 cursor-pointer">
                Add guests
            </div>
            <div onClick={() => setOpen(!open)} className="bg-gray-500 text-white rounded-full px-1 md:px-2 py-1 md:py-2 cursor-pointer">
                <FiSearch/>
            </div>
        </div>
        <Modal 
            isOpen={open}
            setIsOpen={setOpen}
            title="Filter"
        >
            <Search />
        </Modal>
    </>
  )
}
