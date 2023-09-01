import { Link, useOutletContext } from 'react-router-dom'

export default function HostVans() {
  const { data, loading, error } = useOutletContext()
  const vans = data || []

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
      <div className='Dashboard--vans--container'>{loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : vanList}</div>
    </div>
  )
}
