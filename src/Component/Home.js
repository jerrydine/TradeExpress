import React from 'react';
import { FaApple} from "react-icons/fa";
import {IoLogoGooglePlaystore } from "react-icons/io5";
import '../Styling/Nav.css';
import '../Styling/Home.css';
import Why from './Why';
import Buyandsell from './Buyandsell';
import Startnow from './Startnow';
import CurrentRate from './CurrentRate';
import Review from './Review';
import Footer from './Footer';


const Home = () => {
  return (
    <div>
      <div className='nav dash-nav'>
      <div className="container cont-responsive">
      <div className="dashboard">
          <div className="dash-contain">
          <h2>Buy, sell and manage your <br/> Crypto on TradeExpress </h2>
          <p className='diff-curriencies'>Easily trade cryptocurrencies like BTC, USDT, ETH, LTC and XRP with NGN </p>
          <button className='btn-light'>Get Started</button>
          <div className="ext">
            <a href='/' className="btn-primary"> <div className='btn-flex'><FaApple className='icon1'/>
             <div><span>Download on the</span><br className='break'/>
            App Store </div> </div></a>
            <a href='/' className="btn-primary"> <div className='btn-flex'><IoLogoGooglePlaystore className='icon1' id='c-icon'/> <div><span>Get on</span> <br className='break'/>
            Goggle Play </div> </div></a>
            
          </div>
          </div>

        </div>
        </div>
    </div>
<CurrentRate/>
<Why/>
<Buyandsell/>
<Startnow/>
<Review/>
<Footer/>


    </div>
  )
}

export default Home