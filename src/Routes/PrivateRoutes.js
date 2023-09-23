import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Product from '../Pages/Product'
import Home from '../Pages/Home'
import Team from '../Pages/Team'
import Me from '../Pages/Me'
import Referral from '../Pages/Referral'
import Details from '../Pages/Details'


const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path='/me' element={<Me />} />
      <Route path='/team' element={<Team />} />
      <Route path='/product' element={<Product />} />
      <Route path='/home' element={<Home />} />
      <Route path='/referral' element={<Referral />} />
      <Route path='/productdetails/:id' element={<Details />} />
    </Routes>
  )
}

export default PrivateRoutes