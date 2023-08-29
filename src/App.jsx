import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Vans from './pages/Vans'
import VansDetail from './pages/VansDetail'
import './server'

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/about'
          element={<About />}
        />
        <Route
          path='/vans'
          element={<Vans />}
        />
        <Route
          path='/vans/:id'
          element={<VansDetail />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
