import React from 'react';
import '../Styling/Buyandsell.css';
import Phone from '../Images/phone.jpeg';
import Help from '../Images/Group 52.svg';
import Chart from '../Images/Group 28.svg'

const Buyandsell = () => {
  return (
    <div className="sell">
<div className='buy-cont'>
      <h2>Buy and Sell your Crypto Currency in 3 simple steps</h2>
      <div className="buy-flex">
        
        <div className="steps step1">
          <img src={Phone} alt="" width={'280px'} className= 'img-buy' />
          <div className="step-content">
            <h3 className='num'>1</h3>
            <div>
              <h3 className='step-head'>Create a free account</h3>
              <p>Signup fo your free Trade Express wallet on web, IOS o Andriod devices and follow our easy process to setup your profile</p>
            </div>
          </div>
        </div>

        <div className="steps step2">
          <img src={Help} alt="" className= 'img-buy' />
          <div className="step-content">
            <h3 className='num'>2</h3>
            <div>
              <h3 className='step-head'>Deposit</h3>
              <p>Choose your peferred deposit option, like bank transfer, credit/ debit card o send digital assest directly to your wallet fo easy funding/withdrawal.</p>
            </div>
          </div>
        </div>

        <div className="steps step3">
          <img src={Chart} alt=""  className= 'img-buy' />
          <div className="step-content">
            <h3 className='num'>3</h3>
            <div>
              <h3 className='step-head'>Buy/Sell Crypto</h3>
              <p>Buy BTC, USDT,ETH, LTC, XRP and DODGE and securely store it in your wallect or send it easily to friends and family.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
    </div>
    
  )
}

export default Buyandsell