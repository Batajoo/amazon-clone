import React from 'react'
import { Container, Login as LoginComponent, Logo} from '../components'

function Login() {
  return (
    <Container>
      <div className='w-fit mx-auto'>
        <Logo/>
      </div>
      <LoginComponent/>
    </Container>
  )
}

export default Login
