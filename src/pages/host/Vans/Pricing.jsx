import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function Pricing() {
  const { price } = useOutletContext()

  return (
    <p className='Pricing'>
      ${price}.00<span>/day</span>
    </p>
  )
}
