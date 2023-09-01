import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { Outlet, useLoaderData } from 'react-router-dom'
import { fetchVans } from '../API'

export const loader = async () => {
  return fetchVans()
}

export default function Layout() {
  const data = useLoaderData()
  const [vans, setVans] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  console.log(data)

  useEffect(() => {
    const loadVans = async () => {
      console.log('fetch')
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
