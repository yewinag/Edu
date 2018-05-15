import React from 'react';
import { Link } from 'react-router-dom';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


class RegisterPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email: '',
            dirtyEmail: false,
            password : '',
            confirm_password : '',
            dirtyPassword: false,                        
            errors:[]
        }
    }
    register = () =>{
        if(this.validateEmail && this.validateConfirmPassword){
            
        }
    }
    validateEmail = (email = this.state.email, dirtyEmail = this.state.dirtyEmail) => {
        if (email.length === 0 && dirtyEmail) {
          return "invalid";
        }else if (!this.checkInvalidEmail(email) && dirtyEmail) {
          return "invalid email format";
        }else if (this.state.errors.email !== undefined) {
          return this.state.errors.email;
        }else {
          return '';
        }
      }
    isValid = errorText => errorText === '';
    checkInvalidEmail = email => {
    let emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;
    return emailRegex.exec(email);
    }
    validatePassword = (password = this.state.password, dirtyPassword = this.state.dirtyPassword) => {
        if (password.length === 0 && dirtyPassword) {
          return "required";
        }else if (password.length !== 0 && password.length < 8 && dirtyPassword) {
          return "min length is 8";
        }else if (this.state.errors.password !== undefined) {
          return this.state.errors.password;
        }else {
          return '';
        }
      }
    validateConfirmPassword = (confirm_password = this.state.confirm_password, dirtyConfirmPassword = this.state.dirtyConfirmPassword) => {
        if (confirm_password.length === 0 && dirtyConfirmPassword) {
            return "required";
        }else if (confirm_password.length !== 0 && confirm_password.length < 8 && dirtyConfirmPassword) {
            return "min lenght is 8";
        }else if (this.state.password.length !== 0 && confirm_password.length !== 0 && this.state.password !== confirm_password && dirtyConfirmPassword) {
            return "fail";
        }else {
            return '';
        }
    }   
    render(){
        return(
            <div className="content-body" style={{padding:"10px"}}>
                <Subheader style={{textAlign:"center"}}> Register with your Email </Subheader>
                <div className="input">
                    <TextField                         
                        floatingLabelText="Email"
                        fullWidth={true}
                        type="email"                    
                        onChange={(e)=> { this.setState({email: e.target.value,errors :{email: undefined}, dirtyEmail: true, isValidEmail: this.isValid(this.validateEmail(e.target.value, true))}) }}
                        onFocus= {(e) => { this.setState({email: e.target.value, errors :{email: undefined}, dirtyEmail: true, isValidEmail: this.isValid(this.validateEmail(e.target.value, true))}) }}
                        errorText={this.validateEmail()}
                    />
                </div>
                <div className="input">
                    <TextField 
                        floatingLabelText="Password"
                        fullWidth={true}
                        type="password"
                        onChange={(e)=> {
                            this.setState({password: e.target.value,dirtyPassword: true, errors: {password: undefined},isValidPassword: this.isValid(this.validatePassword(e.target.value, true))})
                          }}
                        onFocus= {(e) => {
                            this.setState({password: e.target.value,dirtyPassword: true, errors: {password: undefined},isValidPassword: this.isValid(this.validatePassword(e.target.value, true))})
                          }}
                        errorText={this.validatePassword()}
                    />
                </div>
                <div className="input">
                    <TextField 
                        floatingLabelText="Password Confirmation"
                        fullWidth={true}
                        type="password"
                        onChange={(e)=> {
                            this.setState({confirm_password: e.target.value, dirtyConfirmPassword: true, isValidConfirmPassword: this.isValid(this.validateConfirmPassword(e.target.value, true))})
                          }}
                        onFocus= {(e) => {
                            this.setState({confirm_password: e.target.value, dirtyConfirmPassword: true, isValidConfirmPassword: this.isValid(this.validateConfirmPassword(e.target.value, true))})
                          }}
                        errorText={this.validateConfirmPassword()}
                    />
                </div>                 
                <div>
                    <RaisedButton 
                        label="Register" 
                        fullWidth={true} 
                        primary={true}                         
                        style={{
                            margin:"10px 0"
                        }} 
                        onClick={this.register}
                    />
                </div>  
                <p 
                    style={{textAlign:"center"}}                    
                >
                    <Link to="/login">I've been account</Link>
                </p>                             
                
            </div>
        )
    }
}
export default RegisterPage;