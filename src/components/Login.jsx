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

    const login = async (data) => {

    }

    return (
        <div className='w-full flex justify-center items-center'>
            <div className='border-1 border-gray/10 rounded-lg w-full max-w-md p-5'>
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
                        classname="mb-1"
                        {...register(
                            "password",
                            {
                                required: true
                            }
                        )}
                    />
                    <Button 
                        type='submit'
                        classname='w-full mt-2'   
                    >Enter</Button>
                </form>
                
            </div>
            
        </div>
    )
}

export default Login
