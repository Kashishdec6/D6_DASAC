import React from 'react'
import {Grid,Container} from '@material-ui/core'
/*import './D6_SL_WS_CSS.css'*/

const D6_SL_WS_Cont = {
    marginTop: "140px"
}
const D6_SL_WS_Grid1_Div = {
    textAlign: "center",
    alignItems: "center",
    marginBottom: "20px",
    color: "#36444e"
}
const D6_SL_WS_Grid1_Div_H1 = {
    fontSize: "28px"
}
const D6_SL_WS_Grid1_Div_H2 = {
    fontSize: "38px"
}
const D6_SL_WS_Grid2_Div = {
    width: "280px",
    height: "200px",
    margin: "0px auto"
}
const D6_SL_WS_Grid2_HDiv = {
    width: "280px",
    borderBottom: "1px solid #ffd164",
    marginBottom: "10px"
}
const D6_SL_WS_Grid2_Div_H1 = {
    fontSize: "24px",
    color: "#36444e"
}
const D6_SL_WS_Grid2_Div_P = {
    fontSize: "22px"
}
const D6_SL_WS = () => {
    return (
        <Container fixed className="D6_SL_WS_Cont" style={D6_SL_WS_Cont}>
            <Grid container justify="center" alignItems="center" fixed className="D6_SL_WS_Grid">
                <Grid item lg={12} xs={12} className="D6_SL_WS_Grid1">
                    <div className="D6_SL_WS_Grid1_Div" style={D6_SL_WS_Grid1_Div}>
                        <h3 className="D6_SL_WS_Grid1_Div_H1" style={D6_SL_WS_Grid1_Div_H1}>
                            Welcome to
                        </h3>
                        <h3 className="D6_SL_WS_Grid1_Div_H2" style={D6_SL_WS_Grid1_Div_H2}>
                            Dr. Ashish Skin & Aesthetic Clinic
                        </h3>
                    </div>
                </Grid>

                <Grid item lg={4} xs={12} className="D6_SL_WS_Grid2" >
                    <div className="D6_SL_WS_Grid2_Div" style={D6_SL_WS_Grid2_Div}>
                        <div className="D6_SL_WS_Grid2_HDiv" style={D6_SL_WS_Grid2_HDiv}>
                            <h3 className="D6_SL_WS_Grid2_Div_H1" style={D6_SL_WS_Grid2_Div_H1}>
                                About Us
                            </h3>
                        </div>
                        <p className="D6_SL_WS_Grid2_Div_P" style={D6_SL_WS_Grid2_Div_P}>
                            Dr. Ashish Skin & Aesthetic Clinic
                        </p>
                    </div>
                </Grid>

                <Grid item lg={4} xs={12} className="D6_SL_WS_Grid2" >
                    <div className="D6_SL_WS_Grid2_Div" style={D6_SL_WS_Grid2_Div}>
                        <div className="D6_SL_WS_Grid2_HDiv" style={D6_SL_WS_Grid2_HDiv}>
                            <h3 className="D6_SL_WS_Grid2_Div_H1" style={D6_SL_WS_Grid2_Div_H1}>
                                Our Vision
                            </h3>
                        </div>
                        <p className="D6_SL_WS_Grid2_Div_P" style={D6_SL_WS_Grid2_Div_P}>
                            Dr. Ashish Skin & Aesthetic Clinic
                        </p>
                    </div>
                </Grid>

                <Grid item lg={4} xs={12} className="D6_SL_WS_Grid2" >
                    <div className="D6_SL_WS_Grid2_Div" style={D6_SL_WS_Grid2_Div}>
                        <div className="D6_SL_WS_Grid2_HDiv" style={D6_SL_WS_Grid2_HDiv}>
                            <h3 className="D6_SL_WS_Grid2_Div_H1" style={D6_SL_WS_Grid2_Div_H1}>
                                Specialization
                            </h3>
                        </div>
                        <p className="D6_SL_WS_Grid2_Div_P" style={D6_SL_WS_Grid2_Div_P}>
                            Dr. Ashish Skin & Aesthetic Clinic
                        </p>
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}

export default D6_SL_WS
