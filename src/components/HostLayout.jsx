import React from 'react'
import HostNavBar from './HostNavBar'
import { Outlet, redirect, useLoaderData } from 'react-router-dom'
import { fetchHostVans } from '../API'

export const loader = async ({ request }) => {
  const isLoggedIn = localStorage.getItem('loggedIn')
  const pathname = new URL(request.url).pathname

  if (!isLoggedIn) {
    throw redirect(`/login?redirectTo=${pathname}`)
  }
  return fetchHostVans()
}

export default function HostLayout() {
  const vans = useLoaderData()

  return (
    <>
      <HostNavBar />
      <Outlet context={vans} />
    </>
  )
}
