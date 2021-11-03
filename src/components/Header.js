import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
        <h1> Blogium </h1>
        <Link to="/addpost" >
        <button className="style-3">ADD A POST </button></Link>
        </header>
    )
}

export default Header
