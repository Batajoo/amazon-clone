import React from 'react'

function Button({
    bgColor="bg-amber-300",
    textColor="text-white",
    children,
    classname="",
    type="",
    ...props
}) {
  return (
    <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${classname} ${type}`} {...props}>
        {children}
    </button>
  )
}

export default Button
