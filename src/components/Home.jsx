import React from 'react'
import popImg from './imgs/popcorn.png'
import quoteImg from './imgs/quote.png'
import "./css/home.css"


const Home=()=>{
    return (
        <div>
            <section id="home">
                <div className="home">
                <div className="h1s">
                <h1 className="books">BOOK.</h1><br/>
                <h1 className="dine"> DINE.</h1><br/>   
                <h1 className="repeat"> REPEAT.</h1>
                </div>
                
                <img src={popImg}
                     alt="NA"
                     className="popcorn"
                ></img>

                <img src={quoteImg}
                     alt="NA"
                     className="qoute1"
                ></img>

                <img src={quoteImg}
                     alt="NA"
                     className="qoute2"
                ></img>

                
            </div>
                
            
            </section>
        </div>
    )
}

export default Home;