import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  const [vans, setVans] = useState([])

  useEffect(() => {
    const fetchVans = async () => {
      fetch('/api/vans')
        .then((res) => res.json())
        .then((data) => setVans(data.vans))
    }

    fetchVans()
  }, [])

  return (
    <>
      <NavBar />
      <Outlet context={vans} />
      <Footer />
    </>
  )
}
