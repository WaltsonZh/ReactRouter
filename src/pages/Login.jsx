import React from 'react'
import { Link, useLoaderData, Form, redirect, useActionData, useNavigation } from 'react-router-dom'
import { loginUser } from '../API'

export const loader = ({ request }) => {
  return new URL(request.url).searchParams.get('redirect')
}

export const action = async ({ request }) => {
  const formData = await request.formData()
  const email = formData.get('email')
  const password = formData.get('password')
  try {
    const data = await loginUser({email, password})
    console.log(data)
    localStorage.setItem('loggedIn', true)
    return redirect('/host')
  } catch (err) {
    return err
  }
}

export default function Login() {
  const navigation = useNavigation()
  const error = useActionData()
  const redirect = useLoaderData()

  return (
    <div className='Login'>
      <h1>Sign in to your account</h1>
      {error ? <h3>{error.message}</h3> : redirect ? <h3>You must login first.</h3> : null}
      <Form method='post' replace>
        <input className='email' type='email' name='email' placeholder='Email address' />
        <input className='password' type='password' name='password' placeholder='Password' />
        {<button disabled={navigation.state === 'submitting'}>{navigation.state === 'idle' ? 'Sign in' : 'Loading...'}</button>}
      </Form>
      <p>
        Don't have an account? <Link>Create one now</Link>
      </p>
    </div>
  )
}
