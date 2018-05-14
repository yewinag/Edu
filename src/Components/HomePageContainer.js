import React from 'react';
import update from 'immutability-helper';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

class HomePageContainer extends React.Component{
    constructor(props){
        super(props);
        this.state={
            login: true,
            reg: false
        }
    }
    handleRegister = () =>{
        this.setState(update(this.state, {$set:{ login: false, reg: true }}));
    }
    handleLogin = () =>{
        this.setState(update(this.state, {$set:{ login: true, reg: false }}));
    }
    render(){
        const { login, reg} = this.state;
        return(
            <div className="content-body">
                {
                    login ? 
                        <LoginPage callbackParent={this.handleRegister}/>
                        :
                        null
                }
                {
                    reg ?
                        <RegisterPage callbackParent={this.handleLogin}/>            
                        :
                        null
                }
                
            </div>              
        )
    }
}
export default HomePageContainer;