import React from 'react'
import { Link, useOutletContext, useSearchParams } from 'react-router-dom'

export default function Vans() {
  const { data, loading, error } = useOutletContext()
  const vans = data || []
  const [searchParams, setSearchParams] = useSearchParams()
  const typeFilter = searchParams.get('type')

  const displayedVans = typeFilter ? vans.filter((van) => van.type === typeFilter) : vans

  const vanElements = displayedVans.map((van) => {
    return (
      <Link key={van.id} className='Van' to={van.id} state={{ search: searchParams.toString(), type: typeFilter }}>
        <img className='Van--img' src={van.imageUrl} />
        <div className='Van--info'>
          <h4>{van.name}</h4>
          <div className='Van--price'>
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
      <div className='Vans--filter'>
        <button
          onClick={() => {
            setSearchParams({ type: 'simple' })
          }}
          className={`${typeFilter === 'simple' ? 'selected' : ''} filter simple `}
        >
          Simple
        </button>
        <button
          onClick={() => {
            setSearchParams({ type: 'luxury' })
          }}
          className={`${typeFilter === 'luxury' ? 'selected' : ''} filter luxury `}
        >
          Luxury
        </button>
        <button
          onClick={() => {
            setSearchParams({ type: 'rugged' })
          }}
          className={`${typeFilter === 'rugged' ? 'selected' : ''} filter rugged `}
        >
          Rugged
        </button>
        {typeFilter ? (
          <button
            onClick={() => {
              setSearchParams({})
            }}
            className='clear'
          >
            Clear filters
          </button>
        ) : null}
      </div>
      <div className='Vans--container'>{loading ? <h1>Loading...</h1> : error ? <h1>{error}</h1> : vanElements}</div>
    </div>
  )
}
