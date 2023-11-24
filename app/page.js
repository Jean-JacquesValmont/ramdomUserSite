"use client"
import React, { useState } from "react"
import useFetch from "./CustomHook/UseFetch"
import Card from "./Components/Card"
import BirthdayFilter from "./Components/BirthdayFilter"

export default function Home() {

  const [numberOfUser, setNumberOfUser] = useState(5)
  const dataRandomUsers = useFetch("https://randomuser.me/api/?results="+String(numberOfUser), numberOfUser)
  const [filteredData, setFilteredData] = useState(dataRandomUsers)
  const [isfilteredApplied, setIsfilteredApplied] = useState(false)
  const styleButton = "bg-white border-2 border-black rounded-lg p-2 hover:bg-zinc-500";

  if (!dataRandomUsers.results || dataRandomUsers.results.length === 0) {
    return <div>Loading...</div>;
  }

  const handleResetfilter = () => {
    setIsfilteredApplied(false)
    setFilteredData(dataRandomUsers.results)
  }

  const handleFilterChange = ({min, max}) => {
    const minAge = parseFloat(min)
    const maxAge = parseFloat(max)

    const updatedFilterData = dataRandomUsers.results.filter((item) => {
      const itemAge = parseFloat(item.registered.age)
      return(
        (isNaN(minAge)|| itemAge >= minAge) && 
        (isNaN(maxAge)|| itemAge <= maxAge)
      )
    })

    setFilteredData(updatedFilterData)
    setIsfilteredApplied(true)
  }

  const handleDeleteCard = (itemToDelete) => {
    const updatedFilteredData = filteredData.filter((item) => item !== itemToDelete)
    setFilteredData(updatedFilteredData)
  }

  const modifiedNumberOfUser = (number) => {
    setNumberOfUser(numberOfUser + number)
    if(numberOfUser <= 0)
      {setNumberOfUser(2)}
  }

  const increasedNumberByOne = () => modifiedNumberOfUser(1)
  const increasedNumberByTen = () => modifiedNumberOfUser(10)
  const decreaseNumberByOne = () => modifiedNumberOfUser(-1)
  const decreaseNumberByTen = () => modifiedNumberOfUser(-10)

  const cardsUser = dataRandomUsers.results.map(item => {
    return (
        <Card
            key={dataRandomUsers.results.indexOf(item)}
            item={item}
            onDelete={handleDeleteCard}
        />
    )
  })

  const cardsUserFilter = filteredData.map(item => {
    return (
        <Card
            key={dataRandomUsers.results.indexOf(item)}
            item={item}
            onDelete={handleDeleteCard}
        />
    )
  })

  return (
    <main className="bg-zinc-300">
      <div className="flex justify-between mx-2">
        <BirthdayFilter onFilterChange={handleFilterChange}/>
        <button className={styleButton} onClick={handleResetfilter}>Reset age filter</button>
      </div>
      <div className="flex justify-between my-2 mx-4">
        <button className={styleButton} onClick={increasedNumberByOne}>Add 1 user</button>
        <button className={styleButton} onClick={increasedNumberByTen}>Add 10 user</button>
        <button className={styleButton} onClick={decreaseNumberByOne}>Remove 1 user</button>
        <button className={styleButton} onClick={decreaseNumberByTen}>Remove 10 user</button>
      </div>
      <div className="p-4 grid grid-cols-5 gap-6">
          {isfilteredApplied ? cardsUserFilter.length === 0 ? <p>No results found</p> : cardsUserFilter : cardsUser}
      </div>
    </main>
  )
}
