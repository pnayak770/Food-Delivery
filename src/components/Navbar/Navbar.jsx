import React, { useContext, useEffect, useState } from 'react'
import  './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate,  } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'
import ToggleThemeButton from '../ToggleThemeButton/ToggleThemeButton'
import {toast} from 'react-toastify';

const Navbar = ({setShowLogin, showLogin, isLoggedIn, setIsLoggedIn}) => {

  const [menu,setMenu] = useState("home");
  // const [value,setValue]=useState("0")
  const {getTotalCartAmount,cartItems, setValue,value,} = useContext(StoreContext);
  const navigate = useNavigate(); 

//   for (let key in cartItems) {
//     if (cartItems[key] === 0) {
//       delete cartItems[key];
//     }
//   }

// useEffect(()=>{
//   const length = Object.keys(cartItems).length;
//   setValue(length)

// },[cartItems])

const handleLogout = () => {
  setIsLoggedIn(false);
  toast.success("User Logged Out Successfully!!", {
    position: "top-center",
  });
};

const handleNavigateAndScroll = (sectionId) => {
  navigate('/'); // Navigate to the home page
  setTimeout(() => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }, 0); // Delay to ensure navigation completes before scrolling
};
  

  return (
    <div className='navbar'>
      <Link to='/'><img className='logo' src={assets.logo} alt=""  onClick={()=>setMenu("home")} /></Link>
      <ul className="navbar-menu">
        <Link to="/" onClick={()=>setMenu("home")} className={`${menu==="home"?"active":""}`}>home</Link>
        {/* <a to="/home" href='#explore-menu' onClick={()=>setMenu("menu")} className={`${menu==="menu"?"active":""}`}>menu</a>
        <a href='#app-download' onClick={()=>setMenu("mob-app")} className={`${menu==="mob-app"?"active":""}`}>mobile app</a> */}
         <li onClick={() => {

           setMenu("menu")
           handleNavigateAndScroll('explore-menu')
         }
         
         } className={`${menu === "menu" ? "active" : ""}`}>menu</li>
        <li onClick={() => {
            setMenu("mob-app");
            handleNavigateAndScroll('app-download');
          }} className={`${menu === "mob-app" ? "active" : ""}`}>mobile app</li>
        {/* <a href='#footer' onClick={()=>setMenu("contact")} className={`${menu==="contact"?"active":""}`}>contact us</a> */}
        <Link to="/Ai" onClick={()=>setMenu("AI")} className={`${menu==="AI"?"active":""}`}>Ask AI</Link>
      </ul>
      <div className="navbar-right">
        {/* <img src={assets.search_icon} alt="" /> */}
        <ToggleThemeButton/>
        <Link to='/cart'className={`${menu==="basket"?"active":""}`} onClick={()=>setMenu("basket")}>
          <img src={assets.basket_icon} alt="" className='basket'/>
          <div className='cart1'>
            {value}
          </div>
        </Link>
        <button onClick={() => {
          if (isLoggedIn) {
            handleLogout();
          } else {
            setShowLogin(pre => !pre);
          }
        }}>
          {isLoggedIn ? "Log out" : "Sign in"}
        </button>
      </div>
    </div>
  )
}

export default Navbar
