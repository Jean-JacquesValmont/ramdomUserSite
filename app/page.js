"use client"

import React, { useState } from "react"
import useFetch from "./CustomHook/UseFetch"
import Card from "./Components/Card"

export default function Home() {
  const dataRamdomUsers = useFetch("https://randomuser.me/api")

  if (!dataRamdomUsers.results || dataRamdomUsers.results.length === 0) {
    // Les données ne sont pas encore disponibles
    return <div>Loading...</div>;
  }

  return (
    <main>
      <div>
        <Card
        item = {dataRamdomUsers.results}/>
      </div>
    </main>
  )
}
