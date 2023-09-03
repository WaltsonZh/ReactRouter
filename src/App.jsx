import React from 'react'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans'
import VansDetail from './pages/VansDetail'
import Dashboard from './pages/host/Dashboard'
import Income from './pages/host/Income'
import Reviews from './pages/host/Reviews'
import HostVans from './pages/host/HostVans'
import Detail from './pages/host/Vans/Detail'
import Pricing from './pages/host/Vans/Pricing'
import Photos from './pages/host/Vans/Photos'
import NotFound from './pages/NotFound'
import Login, { loader as loginLoader, action as loginAction } from './pages/Login'
import './server'
import Layout, { loader as vansLoader } from './components/Layout'
import HostLayout, { loader as hostLoader } from './components/HostLayout'
import VansLayout from './components/VansLayout'
import Error from './components/Error'
import HostError from './components/HostError'

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />} loader={vansLoader} errorElement={<Error />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='vans' element={<Vans />} />
        <Route path='vans/:id' element={<VansDetail />} />
        <Route path='login' element={<Login />} loader={loginLoader} action={loginAction} />
        <Route path='host' element={<HostLayout />} loader={hostLoader} errorElement={<HostError />}>
          <Route index element={<Dashboard />} />
          <Route path='income' element={<Income />} />
          <Route path='vans' element={<HostVans />} />
          <Route path='vans/:id' element={<VansLayout />}>
            <Route index element={<Detail />} />
            <Route path='pricing' element={<Pricing />} />
            <Route path='photos' element={<Photos />} />
          </Route>
          <Route path='reviews' element={<Reviews />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  )

  return <RouterProvider router={router} />
}
