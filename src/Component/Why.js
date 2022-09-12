import React from 'react';
import Why1 from '../Images/why1.jpeg';
import Why2 from '../Images/why2.jpeg';
import Why3 from '../Images/why3.jpeg'; 
import '../Styling/Why.css';


const Why = () => {
  return (
    <div className='whycrypto'>
      <h2 className='why-heading'>Why do people get involved with cryptocurrencies</h2>
      <div className="why-container">
        <div className="lets-explain">
          <img src={Why3} alt=""  width={'200px'}/>
          <h3>Easy Mode of Payment</h3>
          <p>People can now easily send and receive money from anywhere in the world to purchase goods and pay fo services</p>
        </div>

        <div className="lets-explain">
        <img src={Why2} alt="" width={'200px'} />
        <h3>Financial Freedom</h3>
        <p>Just like the internet, no single entity controls the Crypto network which provides users transparency and privacy, which puts you in absolute control of your money</p>
        </div>

        <div className="lets-explain">
        <img src={Why1} alt="" width={'200px'} />
        <h3>Investment</h3>
        <p>The constant demands has made cryptocurrencies a Digital Gold used for alternative store of wealth on long term investments.</p>
        </div>
  
      </div>
      <div className="btn1">
      <button id='btn-why'>Learn More</button>
      </div>
      

     
    </div>
  )
}

export default Why