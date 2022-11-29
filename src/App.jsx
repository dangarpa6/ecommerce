import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/routes/Home'
import ProductDetail from './components/routes/ProductDetail'
import Login from './components/routes/Login'
import Purchases from './components/routes/Purchases'
import Header from './components/shared/Header'
import Loader from './components/shared/Loader'



import { useSelector } from 'react-redux'
import isLoadingSlice from './store/slices/isLoading.slice'

function App() {

  const isLoading = useSelector(state=> state.isLoading)

  return (
    <div className='app'>
      <Header/>
      {isLoading && <Loader/>}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/purchases' element={<Purchases />} />
        <Route path='/products/:id' element={<ProductDetail />} />
      </Routes>
    </div>
  )
}

export default App
