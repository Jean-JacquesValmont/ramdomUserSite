"use client"
import React, { useState } from "react"
import useFetch from "./CustomHook/UseFetch"
import Card from "./Components/Card"
import BirthdayFilter from "./Components/BirthdayFilter"

export default function Home() {

  const [numberOfUser, setNumberOfUser] = useState(5)
  const dataRamdomUsers = useFetch("https://randomuser.me/api/?results="+String(numberOfUser), numberOfUser)
  const [filteredData, setFilteredData] = useState(dataRamdomUsers)
  const [isfilteredApplied, setIsfilteredApplied] = useState(false)
  const styleButton = "bg-green-300 border-2 border-black rounded-lg p-2 hover:bg-green-600";

  if (!dataRamdomUsers.results || dataRamdomUsers.results.length === 0) {
    return <div>Loading...</div>;
  }

  const handleResetfilter = () => {
    setIsfilteredApplied(false)
    setFilteredData(dataRamdomUsers.results)
  }

  const handleFilterChange = ({min, max}) => {
    const minAge = parseFloat(min)
    const maxAge = parseFloat(max)

    const updatedFilterData = dataRamdomUsers.results.filter((item) => {
      console.log("item.registered.age: ", item.registered.age)
      const itemAge = parseFloat(item.registered.age)
      return(
        (isNaN(minAge)|| itemAge >= minAge) && 
        (isNaN(maxAge)|| itemAge <= maxAge)
      )
    })

    setFilteredData(updatedFilterData)
    setIsfilteredApplied(true)
    console.log("updatedFilterData: ", updatedFilterData)
  }

  const handleDeleteCard = (itemToDelete) => {
    const updatedFilteredData = filteredData.filter((item) => item !== itemToDelete);
    setFilteredData(updatedFilteredData);
  };

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
            onDelete={handleDeleteCard}
        />
    )
  })

  const cardsUserFilter = filteredData.map(item => {
    return (
        <Card
            key={dataRamdomUsers.results.indexOf(item)}
            item={item}
            onDelete={handleDeleteCard}
        />
    )
  })

  return (
    <main className="bg-white">
      <div className="flex justify-between mx-2">
        <BirthdayFilter onFilterChange={handleFilterChange}/>
        <button onClick={handleResetfilter}>Reset age filter</button>
      </div>
      <div className="flex justify-between m-4">
        <button className={styleButton} onClick={increasedNumberByOne}>Increase by 1 user</button>
        <button className={styleButton} onClick={increasedNumberByTen}>Increase by 10 user</button>
        <button className={styleButton} onClick={decreaseNumberByOne}>Decreased by 1 user</button>
        <button className={styleButton} onClick={decreaseNumberByTen}>Decreased by 10 user</button>
      </div>
      <div className="m-4 grid grid-cols-5 gap-6">
          {isfilteredApplied ? cardsUserFilter.length === 0 ? <p>No results found</p> : cardsUserFilter : cardsUser}
      </div>
    </main>
  )
}
