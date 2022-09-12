import React from 'react';
import '../Styling/Review.css'
import Person1 from '../Images/Review4.jpg';
import Person2 from '../Images/review2.jpg';
import Person3 from '../Images/lady.jpg';
import { ImQuotesLeft } from "react-icons/im";

import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";






const Review = () => {
  return (
    <div className='Reviews'>
      <div className="review-cont">
        <div className="review-inner">
          <blockquote>
          <ImQuotesLeft className='review-icon1'/> Trading on TradeExpress web and mobile has been a smooth experience for me, quite easy to navigate. Crypto currency is taking over the world and will be the future of exchange. 
          </blockquote>
          <div className="ratings">
            <BsStarFill/> <BsStarHalf/><BsStarFill/> <BsStarHalf/>
          </div>
          <img src={Person1} alt="" />
          <h5>Jeffrey Parker</h5>
        </div>

        <div className="review-inner">
          <blockquote>
         <ImQuotesLeft className='review-icon1'/> Trading on TradeExpress web and mobile has been a smooth experience for me, quite easy to navigate. Crypto currency is taking over the world and will be the future of exchange. 
          </blockquote>
          <div className="ratings">
            <BsStarFill/> <BsStarHalf/><BsStarFill/> <BsStarHalf/>
          </div>
          <img src={Person3} alt="" />
          <h5>Lauretta Bella</h5>
        </div>

        <div className="review-inner">
          <blockquote>
           <ImQuotesLeft className='review-icon1'/> Easy to fund and withdraw coin or cash on their platform. I will most definately trade with them again. To state that no one controls it is thrilling and TradeExpress is a great platform to trade.
          </blockquote>
          <div className="ratings">
            <BsStarFill/> <BsStarHalf/><BsStarFill/> <BsStarHalf/>
          </div>
          <img src={Person2} alt="" />
            <h5>McMillian Joe</h5>
        </div>

      </div>
      
     
         
     

        
         
         

     

    </div>
  )
}

export default Review