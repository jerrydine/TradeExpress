import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Instantly = () => {
  return (
    <div>
      <div className="instant-cont">
        <h2>Buy/Sell Instantly</h2>
        <nav className='instant-nav'>
          <NavLink to= 'Buy' >Buy</NavLink>
          <NavLink to= 'Sell'>Sell</NavLink>

        </nav>
        <Outlet/>
      </div>
      
      </div>
  )
}

export default Instantly