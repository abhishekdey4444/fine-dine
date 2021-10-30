import React from 'react'
import Queue from './imgs/queue.png'
import Fast from './imgs/fast-time.png'
import UX from './imgs/friends.png'
import "./css/about.css"

const About=()=>{
    return (
        <div>
            <section id="about">
            <div className="about">
            <h1 className="about-head">Why Us?</h1>
              <div className="profiles">
                
                    <div className="profile1">
                        <img src={Fast} alt="NA" className="pro-pic"/>
                        <h3>Fast Checkout</h3>
                        <h6>Reserve your table in few clicks</h6>
                    </div>
                
                    <div className="profile2">
                        <img src={UX} alt="NA" className="pro-pic"/>
                        <h3>User Friendly</h3>
                        <h6>Our UI is so user friendly that a 3yo could use it.</h6>
                    </div>
                

                    <div className="profile3">
                        <img src={Queue} alt="NA" className="pro-pic"/>
                        <h3>Avoiding Queues</h3>
                        <h6>Standing in lines, boring right? Just Fine it.</h6>
                    </div>
                
                </div>
                
            </div>
            </section>
        </div>
    )
}

export default About;