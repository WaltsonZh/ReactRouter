import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans'
import VansDetail from './pages/VansDetail'
import Dashboard from './pages/host/Dashboard'
import Income from './pages/host/Income'
import HostVans from './pages/host/Vans'
import Reviews from './pages/host/Reviews'
import './server'
import Layout from './components/Layout'
import HostLayout from './components/HostLayout'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='vans' element={<Vans />} />
          <Route path='vans/:id' element={<VansDetail />} />
          <Route path='host' element={<HostLayout />}>
            <Route path='' element={<Dashboard />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='income' element={<Income />} />
            <Route path='vans' element={<HostVans />} />
            <Route path='reviews' element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
