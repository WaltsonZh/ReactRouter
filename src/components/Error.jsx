import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { useRouteError } from 'react-router-dom'

export default function Error() {
  const error = useRouteError()

  return (
    <>
      <NavBar />
      <h1>Error: {error.message}</h1>
      <br />
      <p>{JSON.stringify(error)}</p>
      <Footer />
    </>
  )
}
