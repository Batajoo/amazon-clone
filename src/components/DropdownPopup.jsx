import React from 'react'
import { Link } from 'react-router'
import {LinkButtons} from './'

function DropdownPopup({titleText, SignIn, Logout, isAuthenticated=true}) {
  return (
    <div className='mr-3 group relative'>
          {titleText?.text1 && 
            <p className='font-semibold text-sm h-4'>{titleText.text1}</p>
          }
          {titleText?.text2 &&
            <p className='font-bold'>{titleText.text2}</p>
          }
          
          <div className='absolute right-0 w-50 bg-amber-50 flex-col hidden group-hover:flex rounded-sm items-center'>

            <Link to="#" className='px-5 py-1.5 bg-amber-300 text-center rounded-md my-2 text-sm font-semibold'>Sign In</Link>
            <div className='mb-4'>
            {!isAuthenticated ? 
              <p>New? <Link className='text-blue-500 underline' to="#">Start here</Link></p>
              :
              <Link to="#" className='px-5 py-1.5 bg-amber-300 text-center rounded-md my-2 text-sm font-semibold'>Logout</Link>
            }
            </div>
            
            
          </div>
        </div>
  )
}

export default DropdownPopup
