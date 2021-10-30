import React from 'react'
import "./css/contact.css"
import Googleplay from "./imgs/google-play.png"
import Applestore from "./imgs/Applestore.png"
import App from "./imgs/mobile-img.png"

const Contact=()=>{
    return (
        <div>
            <section id="contact">
            <div className="contact">
                <h1 className="contact-head">Restaurants in your pocket.</h1><br/>
                <h3>Order from your favorite restaurants & track on the go, with the all-new Fine Dine app.</h3><br/>
                <a href="#">
                    <img src={Googleplay} alt="NA" className="googlep"/>
                </a>
                <a href="#">
                    <img src={Applestore} alt="NA" className="apples"/>
                </a>
                
            </div>
            <div className="mob-img">
            <img src={App} alt="NA" className="mob-app"/>
            </div>
            </section>
        </div>
    )
}

export default Contact;