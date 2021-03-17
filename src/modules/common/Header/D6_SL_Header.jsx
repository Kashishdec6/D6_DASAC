
import React,{useState} from 'react';
import './D6_SL_Header_CSS.css';
import HamBurger from './D6_SL_Hamburger';
import Logo from '../../../assets/Images/Logo.svg'
/*import Logo1 from '..../src/assets/Images/Logo.svg' */
import {NavLink} from "react-router-dom";

function D6_SL_Header() {
    return(
        <>
        <nav className="D6_SL_Navbar_Items">
            <div>
                <NavLink className="D6_SL_Navbar_Link" exact to="/">
                    <img src={Logo} className="D6_SL_Navbar_Items1_Image" alt="SmartLook" /> 
                </NavLink>
            </div>
            <HamBurger/>    
        </nav>
        </>
    );
}

export default D6_SL_Header;
