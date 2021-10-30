import React from "react"
import {Login, Close,Submit} from './Login'
import Icon from "./imgs/icon.png"
import crossIcon from "./imgs/cross-icon.png"
import "./css/header.css"

const handleChange=()=>{
    
}
const Header=()=>{
return (
    <div>
        <div className="header">
            <div className="surface">
            <div className="hamburger">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
                <h1 className="header-head">Fine Dine</h1>
                 <img src={Icon} alt="NA" className="icon"/>
            <ul>
                   <li><a href="#home">Home</a></li>
                   <li><a href="#book">Search</a></li>
                   <li><a href="#about">Why Us</a></li>
                   <li><a href="#contact">App</a></li>
                   <li><a href="#social">Info</a></li>
                   <li><button onClick={Login} className="loginButton">Login</button></li>
                   <li><button className="signupButton">Sign up</button></li>

        
            </ul>
            </div>
            
        </div>
        <div className="loginmodal">
        <div className="modal">
            <img src={crossIcon} alt="NA" className="crossIcon" onClick={Close}/>
            <img src={Icon} alt="NA" className="login-modal-icon"/>
            <h1 className="modalHead">Fine Dine</h1>
            <form>
            <input type="text" name="lbox" className="lBox" placeholder="Enter Username" autoComplete="off"/><br />
            <input type="password" className="pBox" placeholder="Enter Password"  autoComplete="off"/><br />
            <button type="submit" className="loginmodalbutton" onClick={Submit}>Login</button><br />
            </form>
            <a href="#" className="forgotpass">Forgot Password?</a>
        </div>
        </div>
        
     
    </div>
)
}


export default Header;