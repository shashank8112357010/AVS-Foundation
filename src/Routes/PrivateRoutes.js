import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Product from '../Pages/Product'
import Home from '../Pages/Home'
import Team from '../Pages/Team'
import Me from '../Pages/Me'
import Referral from '../Pages/Referral'
import Details from '../Pages/Details'
import ChangePassword from '../Pages/ChangePassword'
import Withrawpassword from '../Pages/Withrawpassword'
import Wallet from '../Pages/Wallet'
import Transaction from '../Pages/Transaction'
import Mybankaccount from '../Pages/Mybankaccount'
import Myorder from '../Pages/Myorder'
import Recharge from '../Pages/Recharge'
import Withdraw from '../Pages/Withdraw'


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
      <Route path='/withrawpassword' element={<Withrawpassword title="Withraw Password"/>} />
      <Route path='/wallet' element={<Wallet title="Wallet"/>} />
      <Route path='/transaction' element={<Transaction title="Transaction"/>} />
      <Route path='/mybankaccount' element={<Mybankaccount title="Mybankaccount"/>} />
      <Route path='/myorder' element={<Myorder title="Myorder"/>} />
      <Route path='/recharge' element={<Recharge title="Recharge"/>} />
      <Route path='/withdraw' element={<Withdraw title="Withdraw"/>} />

    </Routes>
  )
}

export default PrivateRoutes