import React, { useState } from 'react'
import { Button } from '../ui/Button'
import Select from 'react-select'
import { useForm } from "react-hook-form"
import Image from 'next/image'
const options = [
    { value: 'anywhere', label: 'Anywhere' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
export const Search = () => {

    const [selected, setSelected] = useState({ value: 'anywhere', label: 'Anywhere' })
    const onChange = (data:any) => {
        console.log
    }

    const onSubmit = () => {
        console.log()
    }
  return (
    <>
        <div className="mt-4">

            <div className="text-left">
                <p className="text-black font-bold text-xl mb-2">Where do wanna go?</p>
                <p className="text-gray-600 text-sm">Find the perfect location!</p>
            </div>
            
            <div className="mt-6">
                
                <Select 
                    options={options} 
                    value={selected}
                    onChange={onChange} 
                    className="my-2 mb-4"
                />

                <hr />

                <div className="mt-4">
                    <Image 
                        className="w-full"
                        alt="logo"
                        height={200}
                        width={300}
                        src={"/images/google-map.png"}
                    />
                </div>
                <div className="my-8">
                    <Button
                        styleClasses="w-full bg-blue-600 text-white hover:bg-blue-500 text-center font-light"
                        text="Search"
                        type="button"
                        onClick={onSubmit}
                    />
                </div>
            </div>
        </div>
    </>
  )
}
