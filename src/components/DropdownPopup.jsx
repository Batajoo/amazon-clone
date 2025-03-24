import React from 'react'

function DropdownPopup({children}) {
  return (
    <div className='relative group1'>
        <button className=''>

        </button>
        <div
            className='absolute left-0 mt-2 hidden w-40 bg-white shadow-lg rounded-md group1-hover:block'
        >
            {
                children
            }

        </div>
    </div>
  )
}

export default DropdownPopup
