import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function Detail() {
  const { van, loading } = useOutletContext()

  return loading ? (
    <h2>Loading...</h2>
  ) : (
    <div className='Details'>
      <p>
        Name: <span>{van.name}</span>
      </p>
      <p>
        Category: <span>{van.type}</span>
      </p>
      <p>
        Description: <span>{van.description}</span>
      </p>
      <p>
        Visibility: <span>public</span>
      </p>
    </div>
  )
}
