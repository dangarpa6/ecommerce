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
import ProtectedRoutes from './components/shared/ProtectedRoutes'
import { Container } from 'react-bootstrap'

function App() {

  const isLoading = useSelector(state=> state.isLoadingSlice)

  return (
    <div className='app'>
      <Header/>
      {isLoading && <Loader/>}
      <Container className='my-5'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/products/:id' element={<ProductDetail />} />
        <Route element={<ProtectedRoutes />}>
            <Route path="/purchases" element={<Purchases />} />
          </Route>
      </Routes>
      </Container>
    </div>
  )
}

export default App
