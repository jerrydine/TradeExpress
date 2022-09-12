import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styling/Responsive.css';

const Responsive = (props) => {
  return (
    <div>
      <ul className='respond'>
        <li onClick={()=> props.isMobile && props.closedmobile()}>
        <NavLink to='Learn'>Learn</NavLink>
        </li>

        <li onClick={()=> props.isMobile && props.closedmobile()}>
        <NavLink to='/Login'>Log In</NavLink>
        </li>

        <li onClick={()=> props.isMobile && props.closedmobile()}>
        <NavLink to='/GetStarted'>Get Started</NavLink>
        </li>

        <li onClick={()=> props.isMobile && props.closedmobile()}>
        <NavLink to='/Instantly'>Instant Buy/Sell</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Responsive