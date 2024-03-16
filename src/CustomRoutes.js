import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import ProductList from './screens/products/ProductList'
import ProductAdd from './screens/products/ProductAdd'
import CustomCalendar from './components/CustomCalendar'

function CustomRoutes() {
  return (
   <>
   <Routes>
    <Route path='/' element={<ProductList/>}/>
    <Route path='/product-add' element={<ProductAdd/>}/>
    <Route path='/calendar' element={<CustomCalendar/>}/>

   </Routes>

   </>
  )
}

export default CustomRoutes