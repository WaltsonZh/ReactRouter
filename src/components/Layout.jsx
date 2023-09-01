import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import { fetchVans } from '../API'

export default function Layout() {
  const [vans, setVans] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadVans = async () => {
      setLoading(true)
      try {
        const data = await fetchVans()
        setVans(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    loadVans()
  }, [])

  return (
    <>
      <NavBar />
      <Outlet context={{ data: vans, loading, error }} />
      <Footer />
    </>
  )
}
