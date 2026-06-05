//import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home/Home'
import { Layout } from '../components/Layout/Layout'
import { About } from '../pages/About/About'
import { Contact } from '../pages/Contact/Contact'
import { Checkout } from '../pages/Checkout/Checkout'
import { ProductDetail } from '../pages/ProductDetail/ProductDetail'
import {OrderConfirmation} from '../pages/OrderConfirmation/OrderConfirmation'

export const Rutas = () => {
  return (
    <Routes>
        <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path="/producto/:id" element={<ProductDetail />} />
            <Route path="/order/:orderId" element={<OrderConfirmation />} />
        </Route>
    </Routes>
  )
}
