import { footerItems } from '@/constants/footerItems'
import Link from 'next/link'
import React from 'react'

const index = () => {
  return (
    <div className="mt-6 bg-gray-200">
        <div className="py-8 px-4 md:px-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {
                footerItems.map((item, index) => (
                    <div key={index}>
                        <h4 className="font-bold text-gray-700 text-xl">{item.title}</h4>
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
                                            className=" font-thin text-sm text-gray-700"
                                        > {link.title} </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }
        </div>
        <p className="py-2 pt-2 text-center uppercase font-bold text-lg">&#169; Copy Write 2023, All Right Reserve.</p>
    </div>
  )
}

export default index