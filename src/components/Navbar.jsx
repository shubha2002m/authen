import React from 'react'
import './Navbar.css'
const Navbar = () =>{
    return(
        <div className='nb'>
            <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/about'>About</a></li>
                <li><a href='/contact'>Contact</a></li>
            </ul>
        </div>
    );
}
export default Navbar;