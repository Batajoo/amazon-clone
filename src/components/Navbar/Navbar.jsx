import React from 'react'
import {Link} from "react-router"
import amazonLogo from "../../assets/amazon-logo.webp"
import SearchBox from './SearchBox'

function Navbar() {
  return (
    <navbar
      className="flex h-15 justify-between items-center bg-gray-300"
    >
        <Link to="/">
            <img src={amazonLogo} alt='logo' className='h-15'/>
        </Link>
        <SearchBox/>
        <div className='mr-3'>
          <p className='font-semibold text-sm h-4'>Hello, sign in</p>
          <p className='font-bold'>Account & Lists</p>
        </div>
    </navbar>
  )
}

export default Navbar
