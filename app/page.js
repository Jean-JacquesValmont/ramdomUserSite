"use client"

import React, { useState } from "react"
import useFetch from "./CustomHook/UseFetch"
import Card from "./Components/Card"

export default function Home() {
  const dataRamdomUsers = useFetch("https://randomuser.me/api/?results=100")

  if (!dataRamdomUsers.results || dataRamdomUsers.results.length === 0) {
    return <div>Loading...</div>;
  }

  const cardsUser = dataRamdomUsers.results.map(item => {
    return (
        <Card
            key={dataRamdomUsers.results.indexOf(item)}
            item={item}
        />
    )
  })

  return (
    <main className="bg-black">
      <div className="m-4 grid grid-cols-5 gap-10">
        {cardsUser}
      </div>
    </main>
  )
}
