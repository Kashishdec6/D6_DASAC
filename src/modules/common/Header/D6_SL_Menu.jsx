import React from 'react';
import styled from 'styled-components';
import {NavLink} from "react-router-dom";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  text-decoration: none;
  color: white;
  margin-right: 40px;
  li {
    padding: 18px 10px;
    padding: 35px 20px;
  }
  li a {
    text-decoration: none;
    color: white;
  }
  @media (max-width: 990px) {
    padding-top: 0.75rem;
    
      li {
    padding: 18px 10px;
    }
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    padding-right: 0px;
    background-color: black;
    background-color: rgba(0,0,0,0.7);
    background-color: black;
    background-color: #36444e;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    top: 80px;
    right: 0;
    height: 50vh;
    width: 140px;
    padding-top: 1.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
      padding: 18px 10px;
    }
  }
`;

const D6_SL_Menu = ({ open }) => {

  return (
    <Ul open={open} className="D6_SL_Navbar_List">
                        <li>
                            <NavLink className="D6_SL_Navbar_Link1" activeClassName="active" exact to="/">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="D6_SL_Navbar_Link1" activeClassName="active" exact to="/">
                                About us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="D6_SL_Navbar_Link1" activeClassName="active" exact to="/">
                                Services
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="D6_SL_Navbar_Link1" activeClassName="active" exact to="/">
                                Contact us
                            </NavLink>
                        </li>
    </Ul>
  )
}

export default D6_SL_Menu