import React from 'react'
import { Link } from 'react-router-dom'

export default function HostNavBar() {
  return (
    <nav className='NavBar--links HostNavBar'>
      <Link to='./dashboard'>Dashboard</Link>
      <Link to='./income'>Income</Link>
      <Link to='./vans'>Vans</Link>
      <Link to='./reviews'>Reviews</Link>
    </nav>
  )
}
