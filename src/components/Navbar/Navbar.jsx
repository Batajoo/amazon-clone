import React from 'react'
import {Link} from "react-router"
import amazonLogo from "../../assets/amazon-logo.webp"
import SearchBox from './SearchBox'
import DropdownPopup from "../DropdownPopup.jsx"
function Navbar() {
  return (
    <navbar
      className="flex h-15 justify-between items-center bg-gray-300"
    >
        <Link to="/">
            <img src={amazonLogo} alt='logo' className='h-15'/>
        </Link>
        <SearchBox/>
        <DropdownPopup
          titleText={
            {
              text1: "Hello, sign in",
              text2: "Account & Lists"
            }
          }
        />
    </navbar>
  )
}

export default Navbar
