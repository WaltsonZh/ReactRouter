import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  const [loginData, setLoginData] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setLoginData((prevLoginData) => ({
      ...prevLoginData,
      [name]: value,
    }))
  }

  const submit = (e) => {
    e.preventDefault()
    console.log(loginData)
  }

  return (
    <div className='Login'>
      <h1>Sign in to your account</h1>
      <form onSubmit={submit}>
        <input className='email' name='email' onChange={handleChange} type="email" placeholder='Email address'/>
        <input className='password' name='password' onChange={handleChange} type="password" placeholder='Password' />
        <button>Sign in</button>
      </form>
      <p>Don't have an account? <Link>Create one now</Link></p>
    </div>
  )
}
