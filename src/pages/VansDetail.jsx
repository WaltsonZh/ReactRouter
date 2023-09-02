import React from 'react'
import { Link, useLocation, useOutletContext, useParams } from 'react-router-dom'

export default function VansDetail() {
  const { id } = useParams()
  const vans = useOutletContext()
  const van = vans[id - 1]
  const location = useLocation()
  const search = location.state?.search || ''
  const state = location.state?.type || ''

  return (
    <div className='VansDetail'>
      <>
        <Link to={`..?${search}`} relative='path'>
          &larr; Back to {state || 'all'} vans
        </Link>
        <div className='Detail--content'>
          <img className='Detail--image' src={van.imageUrl} />
          <div className={`type ${van.type}`}>{van.type}</div>
          <h3 className='Detail--title'>{van.name}</h3>
          <p className='Detail--price'>
            ${van.price}
            <span>/day</span>
          </p>
          <p className='Detail--description'>{van.description}</p>
          <button className='Detail--btn'>Rent this van</button>
        </div>
      </>
    </div>
  )
}
