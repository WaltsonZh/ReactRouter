import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { Outlet, useLoaderData } from 'react-router-dom'
import { fetchVans } from '../API'

export const loader = async () => {
  return fetchVans()
}

export default function Layout() {
  const vans = useLoaderData()

  return (
    <>
      <NavBar />
      <Outlet context={vans} />
      <Footer />
    </>
  )
}
