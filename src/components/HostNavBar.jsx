import React from 'react'
import { NavLink } from 'react-router-dom'

export default function HostNavBar() {
  return (
    <nav className='NavBar--links HostNavBar'>
      <NavLink to='.' end className={({ isActive }) => (isActive ? 'current--page' : '')}>
        Dashboard
      </NavLink>
      <NavLink to='income' className={({ isActive }) => (isActive ? 'current--page' : '')}>
        Income
      </NavLink>
      <NavLink to='vans' className={({ isActive }) => (isActive ? 'current--page' : '')}>
        Vans
      </NavLink>
      <NavLink to='reviews' className={({ isActive }) => (isActive ? 'current--page' : '')}>
        Reviews
      </NavLink>
    </nav>
  )
}
