import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Product from '../Pages/Product'
import Home from '../Pages/Home'
import Team from '../Pages/Team'
import Me from '../Pages/Me'
import Referral from '../Pages/Referral'
import Details from '../Pages/Details'
import ChangePassword from '../Pages/ChangePassword'
import Wallet from '../Pages/Wallet'
import Transaction from '../Pages/Transaction'
import Mybankaccount from '../Pages/Mybankaccount'


const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path='/me' element={<Me />} />
      <Route path='/team' element={<Team />} />
      <Route path='/product' element={<Product />} />
      <Route path='/home' element={<Home />} />
      <Route path='/referral' element={<Referral />} />
      <Route path='/productdetails/:id' element={<Details />} />
      <Route path='/changepassword' element={<ChangePassword title="Change Password"/>} />
      <Route path='/wallet' element={<Wallet title="Wallet"/>} />
      <Route path='/transaction' element={<Transaction title="Transaction"/>} />
      <Route path='/mybankaccount' element={<Mybankaccount title="Mybankaccount"/>} />



    </Routes>
  )
}

export default PrivateRoutes