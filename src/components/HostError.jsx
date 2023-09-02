import React from 'react'
import { useRouteError } from 'react-router-dom'
import HostNavBar from './HostNavBar'

export default function HostError() {
  const error = useRouteError()

  return (
    <>
      <HostNavBar />
      <h1>Error: {error.message}</h1>
      <br />
      <p>{JSON.stringify(error)}</p>
    </>
  )
}
