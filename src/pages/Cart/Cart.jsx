import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaIndianRupeeSign } from "react-icons/fa6";

const Cart = ({isLoggedIn}) => {

  const {cartItems, food_list, removeFromCart,getTotalCartAmount} = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p> <p>Title</p> <p>Price</p> <p>Quantity</p> <p>Total</p> <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item.food_id]>0) {
            return (<div key={index}>
              <div className="cart-items-title cart-items-item">
                <img src={item.food_image} alt="" />
                <p>{item.food_name}</p>
                <p><FaIndianRupeeSign/>{item.food_price}</p>
                <div>{cartItems[item.food_id]}</div>
                <p><FaIndianRupeeSign/>{item.food_price*cartItems[item.food_id]}</p>
                <p className='cart-items-remove-icon' onClick={()=>removeFromCart(item.food_id)}>x</p>
              </div>
              <hr />
            </div>)
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details"><p>Subtotal</p><p><FaIndianRupeeSign/>{getTotalCartAmount()}</p></div>
            <hr />
            <div className="cart-total-details"><p>Delivery Fee</p><p><FaIndianRupeeSign/>{getTotalCartAmount()===0?0:40}</p></div>
            <hr />
            <div className="cart-total-details"><b>Total</b><b><FaIndianRupeeSign/>{getTotalCartAmount()===0?0:getTotalCartAmount()+40}</b></div>
          </div>
          <button onClick={()=>{isLoggedIn?navigate('/order'):toast.success("please Sign in!!", {
                position: "top-center",
              });
    
          }}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder='promo code'/>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
