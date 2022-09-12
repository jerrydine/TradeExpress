import React from 'react';
import { useState, useEffect} from 'react';
import { FaLongArrowAltDown, FaLongArrowAltUp } from 'react-icons/fa';
import '../Styling/Current.css';


const CurrentRate = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
      fetch('https://api.coinlore.net/api/tickers/?start=100&limit=6')
      // promise
      .then((res)=>res.json())
      // 
      .then((response)=>{
        setData(response.data)
      })
    })
  return (
    <div>
      {/* this is the main container housing each content */}
      <div className='rate-cont'>
        {data.map((datum)=>{
          return(
            <div className='border-rate'>
              {/* second flex */}
              <div className='sub-ratecont' >
              <h2>{datum.symbol}NGN</h2>
              <p>{datum.percent_change_24h}%{datum.percent_change < 0 ? <FaLongArrowAltDown style={{color: 'red'}}/> : <FaLongArrowAltUp style={{color: 'green'}}/>}</p>

              </div>

              <p>{Math.ceil(datum.price_usd)*432}</p>
            </div>
          )
        })}
      </div>
         
    </div>
  )
}

export default CurrentRate