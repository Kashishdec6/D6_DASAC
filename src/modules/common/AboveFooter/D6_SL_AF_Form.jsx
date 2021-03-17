import React,{Component} from 'react'
import axios from 'axios'
import './D6_SL_AF_Form_CSS.css'
import Button from '@material-ui/core/Button';
import ReactPhoneInput from "react-phone-input-2";
 import 'react-phone-input-2/lib/style.css' 
 import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

class D6_SL_AF_Form extends Component {

    constructor() {
        super();
        this.state = {
            formData: {
                name: '',
                email: '',
                message: ''
            },
            phonenumber: '',
            submitted: false,
        }
        this.changePhonenumber= this.changePhonenumber.bind(this)
    } 
    
    handleChange = (event) => {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }

    changePhonenumber(event) {
        this.setState({
            phonenumber:event.target.value
        })
    } 

    handleSubmit = () => {
        this.setState({ submitted: true }, () => {
            setTimeout(() => this.setState({ submitted: false }), 10000);
        });

        const registered = {
                name: this.state.formData.name,
                email: this.state.formData.email,
                phonenumber:this.state.phonenumber,
                message: this.state.formData.message,
                clientid: 'd6_dasac'
            }

        axios.post('https://d6apicluster.herokuapp.com/contactus', registered)
        .then(response => console.log(response.data))
           
          this.setState({
            formData: {
                name: '',
                email: '',
                message: ''
            },
            phonenumber:'91'
        }) 
    }

    render() {
        const { formData, submitted } = this.state;
    return (

    <div className="Form_Div_New">
        <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
        >
                <TextValidator
                    label="Name*"
                    onChange={this.handleChange}
                    name="name"
                    value={formData.name}
                    validators={['required']}
                    errorMessages={['Name is required']}  
                />  
        
            <TextValidator
                    label="Email*"
                    onChange={this.handleChange}
                    name="email"
                    value={formData.email}
                    validators={['required', 'isEmail']}
                    errorMessages={['Email is required', 'Email is not valid']}
                />

            <div className="PNDiv2">
              <label className="PN_Label2">Phone Number*</label>
              <ReactPhoneInput className="PN_Input2"
                style={{color: 'white' }}
                inputProps={{
                  name: 'phonenumber',
                  required: true
                }}
                country={'in'}
                value={this.state.phonenumber}  
                isValid={(value, country) => {
                  if (value.match(/12345/)) {
                    return 'Invalid value: '+value+', '+country.name;
                  } else if (value.match(/1234/)) {
                    return false;
                  }
                  else if (value.match(/1234/)) {
                    return 'Phone number is invalid';
                  }
                   else {
                    return true;
                  }
                }}
                onChange={phonenumber => this.setState({ phonenumber })}  
              />
            </div>

            <TextValidator
                    label="Message"
                    onChange={this.handleChange}
                    name="message"
                    value={formData.message}
                />
        
                <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    disabled={submitted}
                >
                    {
                        (submitted && 'Your form is submitted!')
                        || (!submitted && 'Submit')
                    }
                </Button>       
        </ValidatorForm>
    </div>
  
    )
    }
}

export default D6_SL_AF_Form
