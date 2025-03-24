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
        <div className='mr-3 group relative'>
          <p className='font-semibold text-sm h-4'>Hello, sign in</p>
          <p className='font-bold'>Account & Lists</p>
          <div className='absolute right-0 w-80 bg-amber-50 flex-col hidden group-hover:flex rounded-sm'>
            <Link to="#" className='w-30 bg-amber-300 text-center mx-auto rounded-md my-2'>Sign In</Link>
            <Link to="#" className='w-full'>Logout</Link>
          </div>
        </div>
    </navbar>
  )
}

export default Navbar
