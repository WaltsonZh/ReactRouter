import React, { useEffect, useState } from 'react'
import { Link, useOutletContext, useParams } from 'react-router-dom'

export default function VansDetail() {
  const { id } = useParams()
  const van = useOutletContext()[id - 1]

  return (
    <div className='VansDetail'>
      {van ? (
        <>
          <Link to='/vans'>&larr; Back to all vans</Link>
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
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  )
}
