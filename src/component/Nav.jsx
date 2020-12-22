import React from "react";
import { NavLink } from 'react-router-dom';

const style={
    color:'black',
    fontweight:'bold',
    padding:'20px',
    margin:'10px'
}
const Nav=()=>{
    return(
        <div>
        <NavLink activeStyle={style} 
         style={{fontSize:"20px", border: "2px solid skyblue", padding:'10px'}} exact to="/">Home</NavLink>
        <NavLink activeStyle={style}
         style={{fontSize:"20px", border: "2px solid skyblue",padding:'10px'}}to="/about">About</NavLink>
        <NavLink activeStyle={style}
         style={{fontSize:"20px", border: "2px solid skyblue",padding:'10px'}}to="/contact">Contact</NavLink>
        </div>
    );
}
export default Nav;