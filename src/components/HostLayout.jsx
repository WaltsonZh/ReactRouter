import React from 'react'
import HostNavBar from './HostNavBar'
import { Outlet } from 'react-router-dom'

export default function HostLayout() {
  return (
    <>
      <HostNavBar />
      <Outlet />
    </>
  )
}
