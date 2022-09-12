import React from 'react';
import '../Styling/Getstarted.css';

const GetstartedIndividual = () => {
  return (
    <div className='form-individual'>
      <input type="text" placeholder='Username' className='input-start' />
      <input type="text" placeholder='Fullname' className='input-start'/>
      <input type="email" name="email" id="" placeholder='Email' className='input-start' />
      <input type="number" name="Phonenumber" id="" placeholder='Phone Number' className='input-start' />
      <input type="number" name="referralcode" id="" placeholder='Referral Code(optional)'  className='input-start'/>

      <p>By clicking the Sign Up button below, you agree to TradeExpress <a href="/" >Terms and Conditions</a></p>

      <button className='btn-submit'>Sign Up</button>

      <p id='signup'>Already have an account? <a href="/">Click here</a></p>
      
    </div>
  )
}

export default GetstartedIndividual