import React from "react";
import {NavLink } from "react-router-dom";


const Nav = (props) =>{
    const searchHandler = e =>{
        this.props.navigate(`/${this.query.value}`)
        e.preventDefault();
        this.props.onSearch(this.query.value);
        e.currentTarget.reset();
    }

    return(
    <nav className="main-nav">
         <ul>
            <li><NavLink onClick={searchHandler} to="/cats">Cats</NavLink></li>
            <li><NavLink onClick={searchHandler} to="/dogs">Dogs</NavLink></li> 
            <li><NavLink onClick={searchHandler} to="/computers">Computers</NavLink></li>
        </ul> 
    </nav> 
    )
}

export default Nav;