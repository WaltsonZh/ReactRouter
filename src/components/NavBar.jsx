import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className='NavBar'>
      <Link className='NavBar--title' to='/'>#VANLIFE</Link>
      <div className='NavBar--links'>
        <Link to='/host'>Host</Link>
        <Link to='/about'>About</Link>
        <Link to='/vans'>Vans</Link>
      </div>
    </div>
  )
}
