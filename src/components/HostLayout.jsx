import React, { Suspense } from 'react'
import HostNavBar from './HostNavBar'
import { Await, Outlet, defer, redirect, useLoaderData } from 'react-router-dom'
import { getHostVans } from '../API'

export const loader = ({ request }) => {
  const isLoggedIn = localStorage.getItem('loggedIn')
  const pathname = new URL(request.url).pathname

  if (!isLoggedIn) {
    throw redirect(`/login?redirectTo=${pathname}`)
  }
  return defer({ vans: getHostVans() })
}

export default function HostLayout() {
  const vansPromise = useLoaderData()

  return (
    <>
      <HostNavBar />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Await resolve={vansPromise.vans}>{(vans) => <Outlet context={vans} />}</Await>
      </Suspense>
    </>
  )
}
