import React from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import {TextField} from '@material-ui/core'

const D6_DASAC_SA = () => {
    return (
        <div className="D6_DASAC_SA_Div">
            <div>
                <button>Schedule Appointments</button>
            </div>
            <div>
            <form className="" noValidate>
                <TextField
                    id="date"
                    label="Select date"
                    type="date"
                    defaultValue="2017-05-24"
              /*      className={classes.textField}   */
                    InputLabelProps={{
                    shrink: true,
                    }}
                />

                <TextField
                    id="time"
                    label="Select time"
                    type="time"
                    defaultValue="07:30"
                /*    className={classes.textField}  */
                    InputLabelProps={{
                    shrink: true,
                    }}
                    inputProps={{
                    step: 300, // 5 min
                    }}
                />
            </form>
            </div>
        </div>
    )
}

export default D6_DASAC_SA
