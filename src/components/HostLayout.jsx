import React from 'react'
import HostNavBar from './HostNavBar'
import { Outlet, redirect, useLoaderData } from 'react-router-dom'
import { fetchHostVans } from '../API'

export const loader = async () => {
  const isLoggedIn = false
  if (!isLoggedIn) {
    throw redirect('/login')
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
