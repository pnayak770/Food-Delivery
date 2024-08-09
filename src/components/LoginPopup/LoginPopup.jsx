import React, { useState,useContext } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { auth,db } from "../Firebase"
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import {toast} from 'react-toastify';



const LoginPopup = ({setShowLogin,setIsLoggedIn}) => {

    const [currState,setCurrState] = useState("Sign Up");
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [pass,setPass]=useState("");


    
    const handleRegister = async (e) => {
        e.preventDefault();
        try {
          await createUserWithEmailAndPassword(auth, email, pass);
          // setIsLoggedIn(true);
          // setShowLogin(false);
          setCurrState("Login");
          console.log("User Registered Successfully!!");
          toast.success("User Registered Successfully!!", {
            position: "top-center",
          });
        } catch (error) {

          toast.error(error.message, {
            position: "bottom-center",
          });
        }
      };

//login
      const handleLogin = async (e) => {
        e.preventDefault();
        try {
          await signInWithEmailAndPassword(auth, email, pass);
          setIsLoggedIn(true);
          setShowLogin(false);
          toast.success("User Logged In Successfully!!", {
            position: "top-center",
          });
        } catch (error) {
          toast.error(error.message, {
            position: "bottom-center",
          });
        }
      };



  return (
    <div className='login-popup'>
        <div className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2> <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
           
            <form className="login-popup-inputs" onSubmit={currState === "Sign Up" ? handleRegister : handleLogin}>
                {currState==="Sign Up"&&<input type="text" placeholder='Your name' onChange={(e)=>(setName(e.target.value))}/>}
                <input type="email" placeholder='Your email' onChange={(e)=>(setEmail(e.target.value))}/>
               
                <input type="password" placeholder='Password' onChange={(e)=>(setPass(e.target.value))}/>
            <button type='submit'>
                {currState==="Login"?"Login":"Create account"}
            </button>
            </form>
           { console.log(currState)}
            <div className="login-popup-condition">
                <input type="checkbox" name="" id="" />
                <p>By continuing, i agree to the terms of use & privacy policy.</p>
            </div>
            {currState==="Login"
                ?<p>Create a new account? <span onClick={()=>setCurrState('Sign Up')}>Click here</span></p>
                :<p>Already have an account? <span onClick={()=>setCurrState('Login')}>Login here</span></p>
            }
        </div>
    </div>
  )
}

export default LoginPopup
