import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import {Link, useNavigate} from "react-router-dom"
import { loginSuccess } from '../store/authSlice'
import { useForm } from 'react-hook-form'
import {Button, Input, LinkButtons, Logo} from "./"

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")
    
    // need to implement the login fuction after completing the backend
    const login = async (data) => {
        console.log(data)
    }

    return (
        <div className='w-full flex flex-col justify-center items-center mt-5'>
            <div className=' w-full max-w-sm'>
                
                <form onSubmit={handleSubmit(login)}
                    className='outline-1 shadow-lg outline-black/50 border-gray/10 rounded-lg p-7'
                >
                <h1 className='text-2xl font-semibold mb-2'>Sign in</h1>
                    <Input
                        label="Email or mobile phone number"
                        {...register(
                            "useId",
                            {
                                required: true
                            }
                        )}
                    />
                    <Input
                        label="Password"
                        classname=""
                        {...register(
                            "password",
                            {
                                required: true
                            }
                        )}
                    />
                    <Button 
                        type='submit'
                        classname='w-full mt-4 rounded-[1000px]'   
                    >Sign in</Button>
                </form>

                <div className='w-full mt-7'>
                    <div className='flex justify-center items-center gap-1'>
                        <div className='w-full border-1 border-gray-300'></div>
                        <p className='text-sm text-gray-600'><span className='block w-27'>New to Amazon?</span></p>
                        <div className='w-full border-1 border-gray-300'></div>
                    </div>
                    <LinkButtons
                        borderRounded='rounded-[100px]'
                        classname='border-1 w-full block hover:bg-gray-100'
                        bgColor='bg-white'
                        linkRef='/register'
                    >
                    Create your Amazon account
                    </LinkButtons>
                </div>
            </div>
            
            
        </div>
    )
}

export default Login
