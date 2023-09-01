import React, { useEffect, useState } from 'react'
import HostNavBar from './HostNavBar'
import { Outlet } from 'react-router-dom'
import { fetchHostVans } from '../API'

export default function HostLayout() {
  const [vans, setVans] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadHostVans = async () => {
      setLoading(true)
      try {
        const data = await fetchHostVans()
        setVans(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    loadHostVans()
  }, [])

  return (
    <>
      <HostNavBar />
      <Outlet context={{data: vans, loading, error}} />
    </>
  )
}
