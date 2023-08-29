import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import './server'
import Vans from './pages/Vans'

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
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
