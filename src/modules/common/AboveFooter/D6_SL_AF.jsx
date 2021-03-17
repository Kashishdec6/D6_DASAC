import React from 'react'
import './D6_SL_AF_CSS.css';
import {Grid,Container} from '@material-ui/core';
import {NavLink} from "react-router-dom";
import Form from './D6_SL_AF_Form'

const D6_SL_AF = () => {

    return (
   <div className="D6_FE_AboveFooter_Container">   

 <Container className="D6_FE_AF_Grid_Cont">
 <Grid container justify="center" alignItems="center" fixed className="D6_FE_AF_Grid">

        <Grid item lg={4} sm={6} md={4} xs={12} className="D6_FE_AF_Grid3">
            <div className="D6_FE_AboveFooter_Item" id="D6_FE_AboveFooter_Item-3">
                <h3 className="D6_FE_AboveFooter_H3">Our Services</h3>
                <ul className="D6_FE_AboveFooter_List3">
                    <li>
                        <NavLink className="" exact to="/Services">
                            A
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="" exact to="/">
                            B
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="" exact to="/">
                            C
                        </NavLink>
                    </li>
                </ul>
            </div>
        </Grid>

        <Grid item lg={4} sm={6} md={4} xs={12} className="D6_FE_AF_Grid5">
            <div className="D6_FE_AboveFooter_Item" id="D6_FE_AboveFooter_Item-5">  
                <h3 className="D6_FE_AboveFooter_H1">Contact</h3>
                <div className="D6_FE_AboveFooter_Icons">
                    <div className="D6_FE_AboveFooter_Icon1">
                        <a className="fa fa-envelope" href=""/>
                        <a className="D6_FE_AboveFooter_Icon_H" href="">
                            Email
                        </a>
                    </div>
                    <div className="D6_FE_AboveFooter_Icon1">
                        <i className="fas fa-phone-alt "></i>
                        <a href="" target="_blank" className="D6_FE_AboveFooter_Icon_H">Call</a>  
                    </div>
                    <div className="D6_FE_AboveFooter_Icon1">
                        <a className="fab fa-whatsapp" href=""/>
                        <a href="" target="_blank" className="D6_FE_AboveFooter_Icon_H">Chat</a>  
                    </div>
                    <div className="D6_FE_AboveFooter_Icon1">
                        <a className="fab fa-instagram" href=""/>
                        <a href="" target="_blank" className="D6_FE_AboveFooter_Icon_H">Follow</a>  
                    </div>
                </div>
            </div>
        </Grid>

        <Grid item lg={4} sm={12} md={4} xs={12} className="D6_FE_AF_Grid4">
            <div className="D6_FE_AF_Form_Div D6_FE_AboveFooter_Item">
                <h3 className="D6_FE_AF_Form_Div_H">
                    Any queries?
                </h3>  
                <Form/>
            </div>    
        </Grid>

    </Grid>   
</Container>  
</div>
    )
}

export default D6_SL_AF
