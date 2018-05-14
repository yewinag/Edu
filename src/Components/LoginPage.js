import React from 'react';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class LoginPage extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.loadUserData();
    }
    loadUserData = () =>{
        fetch('http://localhost:3001/')
            .then(json => json.json())
                .then(data =>{
                    console.log(data);
                })
    }
    render() {
        return (
            <div className="log-page">
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
                        onClick={()=>this.props.callbackParent()}
                    />
  
                </div>
            </div>
        );
    }
}
export default LoginPage;