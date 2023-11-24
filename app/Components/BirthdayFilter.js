import React, { useState } from 'react'

const BirthdayFilter = ({onFilterChange}) => {
    const [minAge, setMinAge] = useState("")
    const [maxAge, setMaxAge] = useState("")

    const handleFilterChange = () => {
        onFilterChange({min: minAge, max: maxAge})
    }

  return (
    <div className="flex">
        <div>
            <label>Min Age</label>
            <input
                className='m-4'
                type="number"
                value={minAge}
                onChange={(e) => setMinAge(e.target.value)}
            />
        </div>
        <div>
            <label>Max Age</label>
            <input
                className='m-4'
                type="number"
                value={maxAge}
                onChange={(e) => setMaxAge(e.target.value)}
            />
        </div>
        <button onClick={handleFilterChange}>Confirm</button>
    </div>
  )
}

export default BirthdayFilter