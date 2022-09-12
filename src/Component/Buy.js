import React from 'react';
import '../Styling/Instant.css';
//  import { FaCaretDown } from "react-icons/fa";

const Buy = () => {
  return (
    <div className='buy'>
      <label htmlFor="btc" id='btc'>Coin to Buy</label>
      <select type="text" name="btc" id="btc" >
      <option value="Bitcoin">Bitcoin(BTC)</option>
    <option value="ETH">Etherium(ETH)</option>
    <option value="Win">Wink(WIN)</option>
    <option value="NEO">NEO</option>
      </select>
      {/* <FaCaretDown/> */}

      <label htmlFor="ngn" id='ngn'>Currency</label>
      <select type="text" name="ngn" id="ngn" placeholder='Naria(NGN)'>
      <option value="naria">Naria(NGN)</option>
    <option value="pounds">Pounds(GBP)</option>
    <option value="dollar">Dollars</option>
    <option value="cedis">Cedis</option>
      </select>
      {/* <FaCaretDown/> */}

      <label htmlFor="amount" id='amount'>Amount</label>
      <input type="number" name="amount" id="amount" className='amount-input' placeholder='NGN  3,000,000.00' />
      <button className='btn-submit'>Continue</button>


    </div>
  )
}

export default Buy