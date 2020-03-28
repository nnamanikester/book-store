import React from 'react'
import image from "../images";
import {NavLink} from 'react-router-dom'

function Sidebar() {
    return (
        <React.Fragment>
            <div className="sidebar">
                <div className="logo">
                    <img alt="logo" src={image.logo} />
                </div>
                <div className="menu">
                    <ul>
                        <li><NavLink activeStyle={{color:'red'}} exact to="/">Home</NavLink></li>
                        <li><NavLink activeStyle={{color:'red'}} exact to="/books">Books</NavLink></li>
                        <li><NavLink activeStyle={{color:'red'}} exact to="/about">About</NavLink></li>
                        <li><NavLink activeStyle={{color:'red'}} exact to="/services">Services</NavLink></li>
                        <li><NavLink activeStyle={{color:'red'}} exact to="/dmca">DMCA</NavLink></li>
                        <li><NavLink activeStyle={{color:'red'}} exact to="/post_book">Post Book</NavLink></li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Sidebar
