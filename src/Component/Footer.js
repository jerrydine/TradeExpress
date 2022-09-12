import React from 'react';
import '../Styling/Footer.css';
import Icons from '../Images/Group 79.svg';

const Footer = () => {
  return (
    <div >
      <div className="l-footer">
        <div className="list-footer">
          <h6>Products</h6>
          <li>Bitcion</li>
          <li>Alt</li>
          <li>Flat</li>
          <li>Refill</li>
          <li>P2P</li>
        </div>

        <div className="list-footer">
          <h6>Learn</h6>
          <li>Blog</li>
          <li>Help Center</li>
        </div>
     

      <div className="list-footer">
          <h6>Contact</h6>
          <li>hello@tradeexpress.com</li>
          <li>support@tradeexpress.com</li>
          <li><img src={Icons} alt="" /></li>
          </div>

          <div className="list-footer">
          <h6>Company</h6>
          <li>About Us</li>
          <li>Careers</li>
          <li>Rates</li>
          <li>Mobile</li>
        </div>

        <div className="list-footer">
          <h6>Legal</h6>
          <li>Privacy Policy</li>
          <li>Anti Money Laudering</li>
          <li>Terms and Conditions</li>
          
        </div>
        </div>
          

      
      
      
      
      <div className="footer">
        <p>&copy; 2022 TradeExpress Technology All Rights Reserved</p>
      </div>

    </div>
  )
}

export default Footer