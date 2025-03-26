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

    const login = () => {

    }

    return (
        <div>
        
        </div>
    )
}

export default Login
