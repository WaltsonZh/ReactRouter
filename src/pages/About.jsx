import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className='About'>
      <img
        className='About--header'
        src='/images/about.png'
      />
      <div className='About--content'>
        <h3>Don’t squeeze in a sedan when you could relax in a van.</h3>
        <p>
          Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)
          <br />
          <br />
          Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
        </p>
        <div className='About--explore'>
          <h4>Your destination is waiting. Your van is ready.</h4>
          <Link to='/vans'>
            <button className='About--btn'>Explore our vans</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
