/* eslint-disable array-callback-return */
import React from'react'
import {Link } from "react-router-dom";
import {useState} from 'react'
import dataRestaurants from './DATA/dataRestaurants';
import Booking from './Booking';
import "./css/book.css"

const Book=()=>{
    const [searchTerm,setSearchTerm]=useState('');
    return (
        <div>
            <section id="book">
            <h1 classname="book-head">Bon Appetit</h1>
            <div className="book">
                
                <div className="searchBox">
                    <input type="text" className="sbox" placeholder="Search Restaurants" onChange={event=>{setSearchTerm(event.target.value)}}/>
                </div>

                <div className="grid">
                    {dataRestaurants.filter((item)=>{
                        if (searchTerm===""){
                            return item
                        }else if (item.Name.toLowerCase().includes(searchTerm.toLowerCase())){
                            return item
                        }
                    }).map((item,index)=>(
                        <div className="uicard">
                        <div className="box">
                            <div className="banner">
                                <img src={item.Image}
                                     alt="NA"
                                />
                            </div>
                            <div className="details">
                                <h6>NAME: {item.Name}</h6>
                                <h6>ADDRESS: {item.Address}</h6>
                                <h6>RATINGS: {item.Ratings}</h6>
                                <a href={Booking}>
                                <button className="book-btn">Book</button>
                                </a>
                            </div>
                        </div>
                        </div>
                    ))
                    }
                </div>
            </div>
            </section>
        </div>
    )
}

export default Book;