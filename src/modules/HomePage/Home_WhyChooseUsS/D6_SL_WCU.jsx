import React from 'react'
import {Grid,Container} from '@material-ui/core'
import SkinImage from '../../../assets/Images/SkinImage1.jpg'

const D6_SL_WCU_Cont = {
    alignItems: "center",
    textAlign: "center"
}
const D6_SL_WCU_Grid1_Div_H = {
    fontSize: "35px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#36444e"
}
const D6_SL_WCU_Grid1_Div = {
    width: "280px",
    height: "300px",
    margin: "0px auto",
    marginBottom: "20px"
}
const D6_SL_WCU_Img = {
    width: "280px",
    height: "300px",
    borderRadius: "8px"
}

const D6_SL_WCU = () => {
    return (
        <Container fixed className="D6_SL_WCU_Cont" style={D6_SL_WCU_Cont}>
            <Grid container justify="center" alignItems="center" fixed className="D6_SL_WCU_Grid">
                <Grid item lg={12} xs={12} className="D6_SL_WCU_Grid1">
                    <div className="D6_SL_WCU_Grid_Div">
                        <h3 className="D6_SL_WCU_Grid1_Div_H" style={D6_SL_WCU_Grid1_Div_H}>
                            Why choose us
                        </h3>
                    </div>
                </Grid>

                <Grid item lg={3} xs={12} className="D6_SL_WCU_Grid">
                    <div className="D6_SL_WCU_Grid1_Div" style={D6_SL_WCU_Grid1_Div}>
                        <img src={SkinImage} alt="Image1" className="D6_SL_WCU_Img" style={D6_SL_WCU_Img}/>
                    </div>
                </Grid>

                <Grid item lg={3} xs={12} className="D6_SL_WCU_Grid">
                    <div className="D6_SL_WCU_Grid1_Div" style={D6_SL_WCU_Grid1_Div}>
                        <img src={SkinImage} alt="Image2" className="D6_SL_WCU_Img" style={D6_SL_WCU_Img}/>
                    </div>
                </Grid>

                <Grid item lg={3} xs={12} className="D6_SL_WCU_Grid">
                    <div className="D6_SL_WCU_Grid1_Div" style={D6_SL_WCU_Grid1_Div}>
                        <img src={SkinImage} alt="Image3" className="D6_SL_WCU_Img" style={D6_SL_WCU_Img}/>
                    </div>
                </Grid>

                <Grid item lg={3} xs={12} className="D6_SL_WCU_Grid">
                    <div className="D6_SL_WCU_Grid1_Div" style={D6_SL_WCU_Grid1_Div}>
                        <img src={SkinImage} alt="Image4" className="D6_SL_WCU_Img" style={D6_SL_WCU_Img}/>
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}

export default D6_SL_WCU
