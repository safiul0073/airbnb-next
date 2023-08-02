"use client";

import React from 'react'
import TopBar from './TopBar/Index'
import MenuBar from './MenuBar/Index'
const NavigationBar = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <TopBar/>
      <MenuBar/>
    </div>
  )
}

export default NavigationBar;
