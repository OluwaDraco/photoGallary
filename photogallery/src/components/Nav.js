import React from "react";
import {Link } from "react-router-dom";
import key from "../config/Config";

const Nav = () =>{
    return(
    <nav className="main-nav">
        <ul>
            {/* <li>
            <Link to={`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=$cats&per_page=24&page=1&format=json&nojsoncallback=1`}>
            Cats</Link>
            </li> */}
            {/* <li><NavLink to="">Dogs</NavLink></li>
            <li><NavLink to="">Computers</NavLink></li> */}
        </ul>
    </nav>)
}

export default Nav;