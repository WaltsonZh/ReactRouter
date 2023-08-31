import React, { useEffect, useState } from 'react'
import HostNavBar from './HostNavBar'
import { Outlet } from 'react-router-dom'

export default function HostLayout() {
  const [vans, setVans] = useState([])

  useEffect(() => {
    const fetchVansData = async () => {
      fetch('/api/host/vans')
        .then((res) => res.json())
        .then((data) => setVans(data.vans))
    }

    fetchVansData().catch((error) => console.error(error))
  }, [])

  return (
    <>
      <HostNavBar />
      <Outlet context={vans} />
    </>
  )
}
