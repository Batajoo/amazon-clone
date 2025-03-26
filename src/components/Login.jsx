import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import {Link, useNavigate} from "react-router-dom"
import { loginSuccess } from '../store/authSlice'
import { useForm } from 'react-hook-form'
import {Button, Input, Logo} from "./"

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
        <div className='w-full flex justify-center items-center mt-5'>
            <div className='outline-1 outline-black/50 border-gray/10 rounded-lg w-full max-w-sm p-7'>
                <h1 className='text-2xl font-semibold mb-2'>Sign in</h1>
                <form onSubmit={handleSubmit(login)}>
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
                
            </div>
            
        </div>
    )
}

export default Login
