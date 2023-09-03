import React from 'react'
import HostNavBar from './HostNavBar'
import { Outlet, redirect, useLoaderData } from 'react-router-dom'
import { fetchHostVans } from '../API'

export const loader = async () => {
  const isLoggedIn = localStorage.getItem('loggedIn')
  if (!isLoggedIn) {
    throw redirect('/login?redirect=1')
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
