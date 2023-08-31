import React, { useEffect, useState } from 'react'
import { Link, Outlet, useParams, NavLink } from 'react-router-dom'

export default function VansLayout() {
  const [van, setVan] = useState(null)
  const param = useParams()

  useEffect(() => {
    const fetchVanData = async () => {
      fetch(`/api/host/vans/${param.id}`)
        .then((res) => res.json())
        .then((data) => setVan(data.vans))
    }

    fetchVanData().catch(error => console.error(error))
  }, [])

  return (
    <div className='VansLayout'>
      <Link to='..' relative='path'>&larr; Back to all vans</Link>
      {van ? (
        <div className='VansLayout--content'>
          <img src={van.imageUrl} />
          <div className='VansLayout--vanData'>
            <div className={`type ${van.type}`}>{van.type}</div>
            <h2>{van.name}</h2>
            <p className='Detail--price'>
              ${van.price}
              <span>/day</span>
            </p>
          </div>
          <nav className='NavBar--links'>
            <NavLink to='.' end className={({ isActive }) => (isActive ? 'current--page' : '')}>
              Details
            </NavLink>
            <NavLink to='pricing' className={({ isActive }) => (isActive ? 'current--page' : '')}>
              Pricing
            </NavLink>
            <NavLink to='photos' className={({ isActive }) => (isActive ? 'current--page' : '')}>
              Photos
            </NavLink>
          </nav>
          <Outlet />
        </div>
      ) : (
        <h2>Loding...</h2>
      )}
    </div>
  )
}
