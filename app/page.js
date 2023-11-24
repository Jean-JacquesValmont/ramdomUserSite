"use client"

import React, { useState } from "react"
import useFetch from "./CustomHook/UseFetch"
import Card from "./Components/Card"

export default function Home() {
  const [numberOfUser, setNumberOfUser] = useState(5)
  const dataRamdomUsers = useFetch("https://randomuser.me/api/?results="+String(numberOfUser), numberOfUser)

  if (!dataRamdomUsers.results || dataRamdomUsers.results.length === 0) {
    return <div>Loading...</div>;
  }

  const increaseUser = () => {
    setNumberOfUser(numberOfUser + 1)
    console.log(numberOfUser)
  }

  const decreaseUser = () => {
    setNumberOfUser(numberOfUser - 1)
    console.log(numberOfUser)
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
    <main className="bg-white">
      <button onClick={increaseUser}>Increase by 1 user</button>
      <button onClick={increaseUser}>Increase by 10 user</button>
      <button onClick={decreaseUser}>Decreased by 1 user</button>
      <div className="m-4 grid grid-cols-5 gap-6">
        {cardsUser}
      </div>
    </main>
  )
}
