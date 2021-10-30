import React from 'react'

const Login=()=>{
    console.log("function is running")
    document.getElementsByClassName('loginmodal')[0].style.display="flex"
    document.getElementsByClassName('header')[0].style.opacity="0.5"
    document.getElementsByClassName('home')[0].style.opacity="0.5"
}
const Close=()=>{
    document.getElementsByClassName('loginmodal')[0].style.display="none"
    document.getElementsByClassName('header')[0].style.opacity="1"
    document.getElementsByClassName('home')[0].style.opacity="1"
}
const Submit=()=>{
    var name=document.getElementsById('lbox').value;
    console.log(name);
}
export  {Login, Close,Submit};