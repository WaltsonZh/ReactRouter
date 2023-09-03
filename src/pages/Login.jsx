import React, { useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { loginUser } from '../API'

export const loader = ({ request }) => {
  return new URL(request.url).searchParams.get('redirect')
}

export default function Login() {
  const [loginData, setLoginData] = useState({})
  const [idle, setIdle] = useState(true)
  const [error, setError] = useState(null)
  const redirect = useLoaderData()

  const handleChange = (e) => {
    const { name, value } = e.target
    setLoginData((prevLoginData) => ({
      ...prevLoginData,
      [name]: value,
    }))
  }

  const submit = async (e) => {
    e.preventDefault()
    try {
      setIdle(false)
      setError(null)
      const { data } = await loginUser(loginData)
      console.log(data)
    } catch (err) {
      setError(err)
    } finally {
      setIdle(true)
    }
  }

  return (
    <div className='Login'>
      <h1>Sign in to your account</h1>
      {error ? <h3>{error.message}</h3> : redirect ? <h3>You must login first.</h3> : null}
      <form onSubmit={submit}>
        <input className='email' name='email' onChange={handleChange} type='email' placeholder='Email address' />
        <input className='password' name='password' onChange={handleChange} type='password' placeholder='Password' />
        {<button disabled={!idle}>{idle ? 'Sign in' : 'Loading...'}</button>}
      </form>
      <p>
        Don't have an account? <Link>Create one now</Link>
      </p>
    </div>
  )
}
