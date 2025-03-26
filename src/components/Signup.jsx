import React, {useState} from 'react'
import { Link, useNavigate} from 'react-router'
import { useDispatch } from 'react-redux'
import {Button, Input} from "./"
import { useForm } from 'react-hook-form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'

function Signup() {
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()

    const handleRegister = (data) => {
        console.log(data)
    }
    return (
        <div className='w-full flex justify-center items-center mt-5'>
            <div className='outline-1 shadow-lg outline-black/10  p-7 rounded-lg w-full max-w-sm'>
                <h1 className='text-2xl font-semibold mb-3'>Create account</h1>
                <form onSubmit={handleSubmit(handleRegister)}>
                    <Input
                        label="Your name"
                        placeholder="First and Last name"
                        {...register(
                            "name",
                            {
                                required: true
                            }
                        )}
                    />
                    <Input
                        label="Mobile number or email"
                        {...register("userId",{
                            required:true
                        })}
                    />
                    <Input
                        label="Password"
                        placeholder="At least 6 characters"
                        {...register("password",{
                            required: true
                        })}
                    />
                    <p className=' mb-4 flex items-center gap-1'><FontAwesomeIcon icon={faCircleInfo} className='text-lg text-blue-500/80' /> <span className='text-sm'>Password must be at least 6 characters</span></p>
                    <Input
                        label="Re-enter password"
                        elementMargin="mb-4"
                        {...register("re-password",{
                            required: true
                        })}
                    />
                    <Button 
                        type='submit'
                        classname='w-full rounded-[100px]'
                    >Continue</Button>
                </form>
                <div className='border-t-3 border-gray-300 mt-4 w-full pt-2'>
                    <p>Already have an account? <Link className='text-blue-700' to="/login">Sign in</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Signup
