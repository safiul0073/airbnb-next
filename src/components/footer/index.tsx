import { footerItems } from '@/constants/footerItems'
import Link from 'next/link'
import React from 'react'

const index = () => {
  return (
    <div className="max-w-screen-2xl mx-auto mt-6 bg-gray-200">
        <div className="py-8 px-4 md:px-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {
                footerItems.map((item, index) => (
                    <div key={index}>
                        <h4 className="font-normal text-gray-700 text-2xl">{item.title}</h4>
                        <ul
                            className="pt-3"    
                        >
                            {
                                item.items.map((link, idx) => (
                                    <li 
                                        key={idx}
                                        className="pb-2"
                                    >
                                        <Link 
                                            href={link.url}
                                            className=" font-thin text-sm text-gray-800"
                                        > {link.title} </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }
        </div>
        <p className="py-2 pt-2 text-center uppercase font-bold text-lg">&copy; Copy Write 2023, All Right Reserve.</p>
    </div>
  )
}

export default index