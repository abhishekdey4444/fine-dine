import React from 'react'
import Fa from './imgs/facebook.png'
import Tw from './imgs/twitter.jpg'
import Insta from './imgs/insta.png'
import Ln from './imgs/linkedin.png'
import Location from './imgs/place.png'
import Email from './imgs/email.png'
import "./css/social.css"

const Social=()=>{
    return (
        <div>
            <section id="social">
            <div className="socials" >
              <a href="#"> 
                <div className="social1">
                    <img src={Fa} alt="na" className="fa"/><br/>
                </div>
              </a>

              <a href="#">
                 <div className="social2">
                    <img src={Tw} alt="na"  className="tw"/><br/>
                 </div>
              </a>
                
              <a href="#">
                  <div className="social3">
                    <img src={Insta} alt="na" className="insta"/><br/>
                  </div>
              </a>
              <a href="#">
                   <div className="social4">
                      <img src={Ln} alt="na" className="ln"/>
                   </div>
              </a>
                
            </div>
            <div className="office-details">
              <img src={Location} alt="NA" className="office-location-img"/>
              <h6 className="office-add">
                Kolkata, West Bengal
                India
                Pincode: 9000078
              </h6>
            </div>
            <div className="email-details">
            <img src={Email} alt="NA" className="office-email-img"/>
            <h6 className="office-email">
                abhishekdey4444@gmail.com
              </h6>
            </div>
            </section>
        </div>
    )
}

export default Social;