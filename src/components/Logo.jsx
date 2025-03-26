import React from 'react'
import { Link } from 'react-router'
import amazonLogo from "../assets/amazon-logo.webp"

function Logo() {
  return (
    <Link to="/">
            <img src={amazonLogo} alt='logo' className='h-15 w-35 object-fit'/>
    </Link>
  )
}

export default Logo
