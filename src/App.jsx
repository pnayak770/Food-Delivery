import React, { useEffect, useState } from 'react'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import LoginPopup from './components/LoginPopup/LoginPopup'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import MyOrders from './pages/MyOrders/MyOrders'
import Ai from './pages/Ai/Ai'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'


const App = () => {

  const [showLogin,setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin} setIsLoggedIn={setIsLoggedIn}/>:<></>}
      <div className='app'>
        <ToastContainer/>
        <Navbar setShowLogin={setShowLogin} showLogin={showLogin} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart  isLoggedIn={isLoggedIn}/>}/>
          <Route path='/order' element={<PlaceOrder/>}/>
          <Route path='/myorder' element={<MyOrders/>}/>
          <Route path='/Ai' element={<Ai/>}/>
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
