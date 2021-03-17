import React from 'react'
import {NavLink} from "react-router-dom";
import './D6_SL_Footer_CSS.css'

const D6_SL_Footer = () => {
    return (
        <div className="D6_SL_Footer_Items">
            <div className="D6_SL_Footer_Items_NavLink D6_SL_Footer_Items_NavLink1">
                    <NavLink className="D6_SL_Footer_Items_Link" exact to="/">
                            HOME
                    </NavLink>
                </div>
                <div className="D6_SL_Footer_Items_NavLink D6_SL_Footer_Items_NavLink2">
                    <NavLink className="D6_SL_Footer_Items_Link" exact to="/">
                            PRIVACY POLICY
                    </NavLink>
                </div>
                <div className="D6_SL_Footer_Items_NavLink D6_SL_Footer_Items_NavLink3">
                    <NavLink className="D6_SL_Footer_Items_Link" exact to="/">
                            TERMS & CONDITIONS
                    </NavLink>
                </div>
                <div className="D6_SL_Footer_Items_P_Div">  
                    <p className="D6_SL_Footer_Items_P">
                        &#169;2021 DASAC
                    </p>
                </div>
        </div>
    )
}

export default D6_SL_Footer
