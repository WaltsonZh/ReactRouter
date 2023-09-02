import React from 'react'
import { Link, Outlet, useParams, NavLink, useOutletContext } from 'react-router-dom'

export default function VansLayout() {
  const { id } = useParams()
  const vans = useOutletContext()
  let van = {}
  vans.forEach((data) => {
    if (data.id === id) {
      van = data
    }
  })

  return (
    <div className='VansLayout'>
      <Link to='..' relative='path'>
        &larr; Back to all vans
      </Link>
      <div className='VansLayout--content'>
        <img className='VansLayout--image' src={van.imageUrl} />
        <div className='VansLayout--vanData'>
          <div className={`type ${van.type}`}>{van.type[0].toUpperCase() + van.type.slice(1)}</div>
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
        <Outlet context={van} />
      </div>
    </div>
  )
}
