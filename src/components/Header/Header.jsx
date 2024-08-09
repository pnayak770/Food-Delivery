import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className='header' id='header2'>
            <div className='header-contents'>
                <h2>HUNGER</h2>
                <p>Discover restaurants that deliver near you</p>
                {/* <button>View Menu</button> */}
            </div>
            <div className='header2'>
                <ul className="header-second">
                    <li>
                        <div className="home-features-box">
                            <img className="img-fluid icon" src="/destination.png" alt="routing"/>
                            <h6>Wide Map</h6>
                        </div>
                    </li>
                    <li>
                        <div className="home-features-box">
                            <img className="img-fluid icon" src="return.png" alt="3d-rotate"/>
                            <h6>Easiest Order</h6>
                        </div>
                    </li>
                    <li>
                        <div className="home-features-box">
                            <img className="img-fluid icon" src="bike.png" alt="truck"/>
                            <h6>Fast Delivery</h6>
                        </div>
                    </li>
               </ul>
          </div>
          <img src="/scooter.png" alt="" className='scooter'/>
        </div>
    )
}

export default Header
