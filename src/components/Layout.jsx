import React, { Suspense } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { Await, Outlet, defer, useLoaderData } from 'react-router-dom'
import { getVans } from '../API'

export const loader = () => {
  return defer({ vans: getVans() })
}

export default function Layout() {
  const vansPromise = useLoaderData()

  return (
    <>
      <NavBar />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Await resolve={vansPromise.vans}>{(vans) => <Outlet context={vans} />}</Await>
      </Suspense>
      <Footer />
    </>
  )
}
