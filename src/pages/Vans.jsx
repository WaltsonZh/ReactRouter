import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Vans.css'

export default function Vans() {
  const [vans, setVans] = useState([])

  useEffect(() => {
    const fetchVans = async () => {
      fetch('/api/vans')
        .then((res) => res.json())
        .then((data) => setVans(data.vans))
    }

    fetchVans()
  }, [])

  const vanElements = vans.map((van) => {
    return (
      <Link
        key={van.id}
        className='van'
        to={`/vans/${van.id}`}
      >
        <img
          className='van--img'
          src={van.imageUrl}
        />
        <div className='van--info'>
          <h4>{van.name}</h4>
          <div className='van--price'>
            <b>${van.price}</b>
            <p>/day</p>
          </div>
        </div>
        <div className={`type ${van.type}`}>{van.type[0].toUpperCase() + van.type.slice(1)}</div>
      </Link>
    )
  })

  return (
    <div className='Vans'>
      <h2>Explore our van options</h2>
      <div className='filter'>
        <div>Simple</div>
        <div>Luxury</div>
        <div>Rugged</div>
        <a href='#'>Clear filters</a>
      </div>
      <div className='van--container'>{vanElements}</div>
    </div>
  )
}
