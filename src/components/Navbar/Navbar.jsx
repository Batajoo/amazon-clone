import React from 'react'
import {Link} from "react-router"
import {Logo, DropdownPopup} from "../"
import SearchBox from "./SearchBox"

function Navbar() {
  return (
    <nav
      className="flex h-15 justify-between items-center bg-gray-300"
    >
        <Logo/>
        <SearchBox/>
        <DropdownPopup
          titleText={
            {
              text1: "Hello, sign in",
              text2: "Account & Lists"
            }
          }
        />
    </nav>
  )
}

export default Navbar
