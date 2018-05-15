import React from 'react';
import { Link } from 'react-router-dom';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import '../styles/index.css';

class LoginPage extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        
    }    
    render() {
        return (
            <div className="content-body" style={{paddingLeft:"10px",paddingRight:"10px"}}>
                <Subheader style={{textAlign:"center"}}>Login with Email </Subheader>
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
                    <RaisedButton 
                        label="Login" 
                        fullWidth={true} 
                        primary={true} 
                        style={{
                            margin:"10px 0"
                        }} 
                    />
  
                </div>
                <div className="input">
                    <RaisedButton 
                        label="Register" 
                        fullWidth={true} 
                        primary={true} 
                        style={{
                            margin:"10px 0"
                        }} 
                        containerElement={<Link to="/register"/>}                        
                    />
  
                </div>
            </div>
        );
    }
}
export default LoginPage;