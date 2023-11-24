import React from 'react'
import Link from 'next/link';
import { GiCardRandom } from "react-icons/gi";

const Header = () => {
  return (
    <header className="flex items-center bg-white border-b-4 border-black sticky top-0 z-10">
        <Link href="/" className="mx-4">
            <GiCardRandom size={64}/>
        </Link>
        <h1 className="text-4xl font-bold mx-2">RandomProfile</h1>
    </header>
  )
}

export default Header