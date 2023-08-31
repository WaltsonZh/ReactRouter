import React from 'react'
import HostNavBar from './HostNavBar'
import { Outlet, useOutletContext } from 'react-router-dom'

export default function HostLayout() {
  const vans = useOutletContext()

  return (
    <>
      <HostNavBar />
      <Outlet context={vans} />
    </>
  )
}
