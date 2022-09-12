import React from 'react';
import {Link} from 'react-router-dom';
import '../Styling/Nav.css';
import {GoThreeBars } from "react-icons/go";
import { FaTimes } from "react-icons/fa";
import {NavLink} from 'react-router-dom';
import TradeExpress from '../Images/TradExpress (1).svg';
import Responsive from './Responsive';
import { useState } from 'react';

const Nav = () => {
  const [btn, setbtn] = useState(false)
  const closedmobile = ()=> setbtn(false)

  return (
    <div className='nav'>
      <div className="container nav-flex">
        <div className="nav-logo">
          <Link to='/'>
          <img src={TradeExpress} alt="" />
          </Link>
        </div>

        <div className="nav-list">
          <nav>
            <ul>
            <li>
              <NavLink to= '/Instantly'> InstantBuy/Sell </NavLink>
            </li>

            <li>
              <NavLink to= '/Learn'> Learn </NavLink>
            </li>

            <li>
              <NavLink to= '/Getstarted'> Get Started</NavLink>
            </li>

            <li>
              <NavLink to= '/Login' id='log'> Log In </NavLink>
            </li>
            </ul>
          </nav>
          <div className="hamburger">
          <a href="#" className='ham' onClick={()=> setbtn(!btn)} >{btn? <FaTimes size={25}/>   :<GoThreeBars size={25}/> }</a>
          </div>

        </div>
        
      </div>
         
       {btn && <Responsive isMobile={true} closedmobile = {closedmobile}/>} 
    </div>
  )

}

export default Nav