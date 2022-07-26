import React from 'react';

import Nav from './Nav'
import SearchForm from './SearchForm';

const Header = (props) => {
    return (
        <div>
            <SearchForm onSearch = {props.onSearch}/>
            <Nav query={props.query} onSearch={props.onSearch}/>
        </div>
    )
};

export default Header;