import React from "react"
import { Switch, Route, Link } from "react-router-dom";
import Header from "./Header"
import Details from "./Details"
import Payment from "./Payment"
import Booking from "./Booking"
const Routes =()=>{
    return(<>
    
    <Switch>
        <Route exact path="/" component={Header}/>
        <Route exact path="/booking" component={Booking}/>
        <Route exact path="/details" component={Details}/>
        <Route exact path="/payment" component={Payment}/>
        <Route exact component={Error}/>
        </Switch>       
    
    </>)
}

export default Routes;