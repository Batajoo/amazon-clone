import React from 'react'

function Button({
    bgColor="bg-amber-300",
    hoverColor="bg-amber-400",
    textColor="text-black",
    children,
    classname="",
    type="",
    ...props
}) {
  return (
    <button className={`py-1 hover:${hoverColor} hover:cursor-pointer ${bgColor} ${textColor} ${classname} ${type}`} {...props}>
        {children}
    </button>
  )
}

export default Button
