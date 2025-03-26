import React from 'react'
import {Link} from "react-router"

function LinkButtons({
    classname="",
    bgColor="bg-amber-300",
    linkRef="/",
    borderRounded="rounded-md",
    children,
    ...props
}) {
  return (
    <Link 
      to={linkRef} 
      className={`px-5 py-1.5  text-center my-2 text-sm font-semibold ${classname} ${bgColor} ${borderRounded}`}
      {...props}
      >{children}</Link>
  )
}

export default LinkButtons
