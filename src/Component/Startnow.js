import React from 'react';
import { Link } from 'react-router-dom';
import Apple from '../Images/Icon awesome-apple.svg';
import playstore from '../Images/Group 53.svg';
import '../Styling/Startnow.css';


const Startnow = () => {
  return (
    <div className='startnow'>
      <div className="startnow-cont">
        <h3 className='start-h1'>Ready to trade Buy/Sell Crypto currencies in just 10minutes?</h3>
        <h2 className='start-heading'>Create you account for free and start trading today!</h2>

        <div id='btn-cont'>
          <Link to='/GetStarted' id='start-btn'>Get started</Link> 
          </div>

          <div className="btn-flex-start1">
          <div className="btn-startnow">
               <div className='btn-flex-start'>
                <img src={Apple} alt=''/>
             <div className='btn-inner'><span>Download on the</span> <br/>
            App Store </div> 
            </div>
            </div>

            <div className='btn-startnow'>

               <div className='btn-flex-start'>
                <img src={playstore} alt=''/>
                <div className='btn-inner' ><span>Get on</span> <br/>
            Goggle Play </div> </div>
        </div>


          </div>
          
      </div>

    </div>
  )
}

export default Startnow