import React from 'react'
import "./css/signup.css"
import Form_img from "./imgs/icon.png"

const Signup=()=>{
    return (
        <div>
         <div className="sign-up">
             <h1 className="signuphead">Sign Up</h1>
             <div className="signup-form">
             <div className="signup-page">
                 <div className="signupform-img">
                     <img src={Form_img} alt="NA" className="signup-img" />
                 </div>
                 <div className="signupdetails-form">
                 <div className="signup-details">
                    <div className="fname">
                    <p>Full name</p>
                    <input type="text" placeholder="Full Name" className="fnamebox"/>
                    </div>

                    <div className="s-email">
                    <p>Email</p><input type="email" placeholder="Email" className="s-emailbox"/>
                    </div>

                    <div className="s-password">
                    <p>Password</p><input type="password" placeholder="Password" className="s-passwordbox"/>
                    </div>

                    <div className="s-c-password">
                    <p>Confirm Password</p><input type="password" placeholder="Confirm Password" className="s-c-passwordbox"/>
                    </div>
                    </div>
                    
                 </div>

                <div className="signup-btn">
                <button className="signupform-btn">Sign up</button>
                </div>
                 
                    
             </div>
                
                    
             
                
                </div>
         </div>
        </div>
    )
}
export default Signup;
