import React from 'react'
import Link from 'next/link';
import { GiCardRandom } from "react-icons/gi";

const Header = () => {
  return (
    <div className="flex mx-4 items-center bg-white sticky top-0 z-10">
        <Link href="/">
            <GiCardRandom size={64}/>
        </Link>
        <h1 className="text-4xl font-bold mx-4">RandomProfile</h1>
    </div>
  )
}

export default Header