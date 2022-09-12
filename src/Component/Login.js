import React from 'react';
import '../Styling/Login.css';
import {FaCheckCircle} from  "react-icons/fa";


const Login = () => {
  return (
    <div className='login'>
      <div className="login-cont">
        <h2> Welcome!</h2>
        <input type="text" name="username" id="username" placeholder='Username' />
        <input type="password" name="passwod" id="password" placeholder='Password' />

        <div className="login-flex">
          <div className="log1">
            <FaCheckCircle id='icon-log'/>
            <p>Remember password</p>
          </div>

          <p  id='forgot-log'>Forgot Password?</p>
        </div>
        <button className='btn-submit'>Log in</button>
        <p id='signup'>New User? <a href='/'>Click here</a></p>
      </div>

    </div>
  )
}

export default Login