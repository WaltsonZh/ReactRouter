import React from 'react'
import { Link, useOutletContext } from 'react-router-dom'

export default function Dashboard() {
  const { data, loading, error } = useOutletContext()
  const vans = data || []

  const vanList = vans.map((van) => {
    return (
      <div key={van.id} className='Dashboard--van'>
        <img src={van.imageUrl} />
        <div>
          <h4>{van.name}</h4>
          <p>${van.price}/day</p>
        </div>
        <Link className='Dashboard--link' to={`vans/${van.id}`}>
          Edit
        </Link>
      </div>
    )
  })

  return (
    <>
      <div className='Dashboard--income'>
        <h2>Welcome!</h2>
        <p className='Dashboard--period'>
          Income last <b>30 days</b>
        </p>
        <h1>$2,260</h1>
        <Link className='Dashboard--link' to='income'>
          Details
        </Link>
      </div>
      <div className='Dashboard--reviews'>
        <h2>Review score</h2>
        <div className='Dashboard--reviews--rating'>
          <img src='/images/star.svg' />
          <p>
            <b>5.0</b>/5
          </p>
        </div>
        <Link className='Dashboard--link' to='reviews'>
          Details
        </Link>
      </div>
      <div className='Dashboard--vans'>
        <h4>Your listed vans</h4>
        <Link className='Dashboard--link' to='Vans'>
          View all
        </Link>
        <div className='Dashboard--vans--container'>{loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : vanList}</div>
      </div>
    </>
  )
}
