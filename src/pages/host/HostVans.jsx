import React, { useEffect, useState } from 'react'
import { Link, useOutletContext } from 'react-router-dom'

export default function HostVans() {
  const vans = useOutletContext()

  const vanList = vans.map((van) => {
    return (
      <Link key={van.id} className='Dashboard--van HostVans--van' to={van.id}>
        <img src={van.imageUrl} />
        <div>
          <h4>{van.name}</h4>
          <p>${van.price}/day</p>
        </div>
      </Link>
    )
  })

  return (
    <div className='HostVans'>
      <h2>Your listed vans</h2>
      <div className='Dashboard--vans--container'>{vans.length > 0 ? vanList : <h2>Loding...</h2>}</div>
    </div>
  )
}
