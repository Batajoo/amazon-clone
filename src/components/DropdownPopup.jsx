import React from 'react'
import { Link } from 'react-router'
import {LinkButtons} from './'

function DropdownPopup({titleText, SignIn, Logout, isAuthenticated=false}) {
  return (
    <div className='mr-3 group relative'>
          {titleText?.text1 && 
            <p className='font-semibold text-sm h-4'>{titleText.text1}</p>
          }
          {titleText?.text2 &&
            <p className='font-bold'>{titleText.text2}</p>
          }
          
          <div className='absolute right-0 w-50 bg-gray-100 flex-col hidden group-hover:flex rounded-sm items-center z-10'>

            <div className='my-4 flex flex-col gap-1'>
            {!isAuthenticated ? 
              <>
                <LinkButtons linkRef='/login'>Sign In</LinkButtons>
                <p>New? <Link className='text-blue-500 underline' to="/register">Start here</Link></p>
              
              </>
              :
              <LinkButtons linkRef='/'>Logout</LinkButtons>
            }
            </div>
            
            
          </div>
        </div>
  )
}

export default DropdownPopup
