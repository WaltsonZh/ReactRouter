import React, { useEffect, useState } from 'react'

export default function Vans() {
  const [vans, setVans] = useState([])

  useEffect(() => {
    const fetchVans = async () => {
      fetch('/api/vans').then((res) => setVans(JSON.parse(res._bodyText).vans))
    }

    fetchVans().catch(error => console.log(error))
  }, [])

  return (
    <div className='Vans'>
      <h1>Vans page goes here 🚐</h1>
      {vans.map(van => {
        return <p>{JSON.stringify(van)}</p>
      })}
    </div>
  )
}
