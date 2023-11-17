import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  let {loginUser} = useContext(AuthContext)
  return (
    <div className='login-form'>
      <form onSubmit={loginUser}>
        <input type="text" name="email" placeholder="Enter email" />
        <input type="password" name="password" placeholder="Enter password" />
        <button>Submit</button>
      </form>
      <p>Don't have an account yet? <Link to='/register'>Register</Link></p>
    </div>
  )
}

export default LoginPage
