import React from 'react';
import { Link } from 'react-router-dom'
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


class RegisterPage extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="reg-page">
                <Subheader style={{textAlign:"center"}}> Register with your Email </Subheader>
                <div className="input">
                    <TextField 
                        hintText="example@mail.com"
                        fullWidth={true}
                    />
                </div>
                <div className="input">
                    <TextField 
                        hintText="**********"
                        fullWidth={true}
                    />
                </div>
                <div className="input">
                    <TextField 
                        hintText="**********"
                        fullWidth={true}
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
                    />
                </div>  
                <p 
                    style={{textAlign:"center"}}
                    onClick={()=>this.props.callbackParent()}
                >
                    <a href="">I've been account</a>
                </p>                             
                
            </div>
        )
    }
}
export default RegisterPage;