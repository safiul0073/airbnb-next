"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Logo() {
  return (
    <div className="hidden md:block">
        <Link 
            href="/"
            className="object-cover"
        >
            <Image 
            className="h-[70px]"
                alt="logo"
                height={40}
                width={120}
                src={"/images/logo.jpg"}
            />
        </Link>
    </div>
  )
}
