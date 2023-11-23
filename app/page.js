"use client"

import React from "react"
import useFetch from "./CustomHook/UseFetch"
import Card from "./Components/Card"

export default function Home() {
  const dataRamdomUser = useFetch("https://randomuser.me/api")

  console.log(dataRamdomUser)

  return (
    <main>
      <div>
        <Card/>
      </div>
    </main>
  )
}
