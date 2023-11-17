import React, { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const RegisterUserForm = () => {
  let [name, setName] = useState('');
  let [username, setUsername] = useState('');
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

  const navigate = useNavigate()

  let handleSubmit = async (e) => {
    e.preventDefault();

    let response = await api.post('register/', {
        name,
        username,
        email,
        password,
    });
    if (response.status === 201) {
        navigate('/login')
      } else {
        // There was an error registering the user.
      }
  
  }
  return (
    <div className='register-form'>
      <form onSubmit={handleSubmit}>
        <input 
        type='text'
        name='name'
        placeholder='Enter your name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        <input 
        type='text'
        username='username'
        placeholder='Enter your username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />
        <input 
            type='email'
            name='email'
            placeholder='Enter your email address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <input 
            type='password'
            name='password'
            placeholder='Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />

        <button type='Submit'>Register</button>
        <p>Already have an account? <Link to='/login'>login</Link></p>

      </form>
    </div>
  )
}

export default RegisterUserForm
