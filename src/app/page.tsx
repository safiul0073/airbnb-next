"use client"

import HomePage from "@/components/pages/homePage"
import { menuItems } from "../constants/menuItems"
import { useMemo } from "react";
import { getParamValue } from "@/hooks/getParamValue";

export default function Home() {
  const category = getParamValue()
  const page = useMemo(() => {
    return menuItems.find(item => item.category === category)?.page || <HomePage/>;
  },[category])

  return (
    <main className="max-w-screen-2xl mx-auto my-6 px-8 pt-5">
      {/* render page by category wise */}
      { page }
    </main>
  )
}
