import { createContext, useEffect, useState } from "react";
import { food_list,menu_list } from "../assets/assets";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const [cartItems,setCartItems] = useState({});
    const [ordersData,setOrdersData] = useState({});
    const [value,setValue]=useState("0")
   



    for (let key in cartItems) {
        if (cartItems[key] === 0) {
          delete cartItems[key];
        }
      }
    
    useEffect(()=>{
      const length = Object.keys(cartItems).length;
      setValue(length)
    
    },[cartItems])
    
    const addToCart = (itemId) =>{
        if(!cartItems[itemId])
        {
            setCartItems((prev)=>({...prev,[itemId]:1}));
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        }
    }

    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
          if (cartItems[item] > 0) {
            let itemInfo = food_list.find((product) => product.food_id === Number(item));
            totalAmount += itemInfo.food_price * cartItems[item];
          }
        }
        return totalAmount;
      }

    const placeOrder = (deliveryData) =>{

        console.log(deliveryData);
    }

    const contextValue = {
        setValue,
        value,
        food_list,
        menu_list,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        placeOrder
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
        )

}

export default StoreContextProvider;