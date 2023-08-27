import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

export default function NavBar() {
  return (
    <div className='NavBar'>
      <Link className='title' to='/'>#VANLIFE</Link>
      <div className='links'>
        <Link to='/about'>About</Link>
        <Link to='/vans'>Vans</Link>
      </div>
    </div>
  )
}
