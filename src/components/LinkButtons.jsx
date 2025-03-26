import React from 'react'
import {Link} from "react-router"

function LinkButtons({
    classname="",
    bgColor="bg-amber-300",
    linkRef="/",
    children
}) {
  return (
    <Link to={linkRef} className={`px-5 py-1.5  text-center rounded-md my-2 text-sm font-semibold ${classname} ${bgColor ? bgColor : "bg-amber-300" }`}>{children}</Link>
  )
}

export default LinkButtons
