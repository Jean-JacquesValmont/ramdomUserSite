import React, { useState } from 'react'

const BirthdayFilter = ({onFilterChange}) => {
    const [minAge, setMinAge] = useState("")
    const [maxAge, setMaxAge] = useState("")

    const handleFilterChange = () => {
        onFilterChange({min: minAge, max: maxAge})
    }

  return (
    <div className="flex justify-center">
        <div className="m-2">
            <label>Min Age</label>
            <input
                className='m-4'
                type="number"
                value={minAge}
                onChange={(e) => setMinAge(e.target.value)}
            />
        </div>
        <div className="m-2">
            <label>Max Age</label>
            <input
                className='m-4'
                type="number"
                value={maxAge}
                onChange={(e) => setMaxAge(e.target.value)}
            />
        </div>
        <div>
            <button className="bg-white border-2 border-black rounded-lg my-6 px-2 hover:bg-zinc-500" onClick={handleFilterChange}>Confirm</button>
        </div>
    </div>
  )
}

export default BirthdayFilter