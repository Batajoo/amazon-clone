import React from 'react'
import { Container, Signup, Logo } from '../components'
function Register() {
  return (
    <div>
      <Container>
        <div className='w-fit mx-auto'>
          <Logo/>
        </div>
        <Signup/>
      </Container>
    </div>
  )
}

export default Register
