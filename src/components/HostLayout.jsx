import React from 'react'
import HostNavBar from './HostNavBar'
import { Outlet, useLoaderData } from 'react-router-dom'
import { fetchHostVans } from '../API'

export const loader = async () => {
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
