import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className='NavBar'>
      <Link className='NavBar--title' to='/'>
        #VANLIFE
      </Link>
      <div className='NavBar--links'>
        <NavLink to='host' className={({ isActive }) => (isActive ? 'current--page' : '')}>
          Host
        </NavLink>
        <NavLink to='about' className={({ isActive }) => (isActive ? 'current--page' : '')}>
          About
        </NavLink>
        <NavLink to='vans' className={({ isActive }) => (isActive ? 'current--page' : '')}>
          Vans
        </NavLink>
        <NavLink to='login' className={({ isActive }) => (isActive ? 'current--page' : '')}>
          <i className='bx bx-user-circle' style={{fontSize: '1.5em'}}></i>
        </NavLink>
      </div>
    </div>
  )
}
