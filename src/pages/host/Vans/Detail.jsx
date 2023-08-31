import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function Detail() {
  const [van, setVan] = useState(null)
  const param = useParams()

  useEffect(() => {
    const fetchVanData = async () => {
      fetch(`/api/host/vans/${param.id}`)
        .then((res) => res.json())
        .then((data) => setVan(data.vans))
    }

    fetchVanData().catch(error => console.error(error))
  }, [])

  return van ? (
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
  ) : (
    <h2>Loding...</h2>
  )
}
