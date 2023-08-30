import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='Home'>
      <div className='Home--content'>
        <h3>You got the travel plans, we got the travel vans.</h3>
        <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
        <Link to='/vans'>
          <button className='Home--btn'>Find your van</button>
        </Link>
      </div>
    </div>
  )
}
