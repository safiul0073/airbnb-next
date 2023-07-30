"use client";

import React from 'react'
import Logo from './Logo';
import SearchBar from './SearchBar';
import Menu from './Menu';

const Index = () => {
  return (
    <div className="z-10 shadow-md h-[80px]">
      <div className="px-2 md:px-4 flex flex-row justify-between items-center">
        <Logo/>
        <SearchBar/>
        <Menu/>
      </div>
    </div>
  )
}

export default Index;
