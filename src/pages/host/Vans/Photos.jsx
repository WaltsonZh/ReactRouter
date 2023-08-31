import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function Photos() {
  const { imageUrl } = useOutletContext()

  return (
    <>
      <img className='Photos' src={imageUrl} />
    </>
  )
}
