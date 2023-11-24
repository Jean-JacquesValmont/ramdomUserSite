"use client"
import React, { useState } from "react"
import useFetch from "./CustomHook/UseFetch"
import Card from "./Components/Card"

export default function Home() {
  const [numberOfUser, setNumberOfUser] = useState(5)
  const dataRamdomUsers = useFetch("https://randomuser.me/api/?results="+String(numberOfUser), numberOfUser)
  const styleButton = "bg-green-300 border-2 border-black rounded-lg p-2 hover:bg-green-600";

  if (!dataRamdomUsers.results || dataRamdomUsers.results.length === 0) {
    return <div>Loading...</div>;
  }

  const modifiedNumberOfUser = (number) => {
    setNumberOfUser(numberOfUser + number)
    if(numberOfUser <= 0)
      {setNumberOfUser(2)}
    console.log(numberOfUser)
  }

  const increasedNumberByOne = () => modifiedNumberOfUser(1)
  const increasedNumberByTen = () => modifiedNumberOfUser(10)
  const decreaseNumberByOne = () => modifiedNumberOfUser(-1)
  const decreaseNumberByTen = () => modifiedNumberOfUser(-10)

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
      <div className="flex justify-between m-4">
        <button className={styleButton} onClick={increasedNumberByOne}>Increase by 1 user</button>
        <button className={styleButton} onClick={increasedNumberByTen}>Increase by 10 user</button>
        <button className={styleButton} onClick={decreaseNumberByOne}>Decreased by 1 user</button>
        <button className={styleButton} onClick={decreaseNumberByTen}>Decreased by 10 user</button>
      </div>
      <div className="m-4 grid grid-cols-5 gap-6">
        {cardsUser}
      </div>
    </main>
  )
}
