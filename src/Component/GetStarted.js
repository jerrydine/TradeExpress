import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import '../Styling/Getstarted.css';

const GetStarted = () => {
  return (
    <div className='getstarted'>
      <div className="getstart-cont">
        <h3>Welcome!</h3>
      <nav className='getlink'>
     <NavLink to='GetstartedIndividual' >Individual</NavLink>
     <NavLink to='GetstartedBusiness'>Business</NavLink>
      </nav>
      <Outlet/>
      </div>
      
     
    </div>
  )
}

export default GetStarted