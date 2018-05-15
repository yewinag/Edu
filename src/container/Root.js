import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../Components/HomePage';
import NotFoundPage from '../Components/NotFoundPage';
import LoginPage from '../Components/LoginPage';
import RegisterPage from '../Components/RegisterPage';
import Header from '../Components/Header';

class Root extends Component {
  render() {
    return (      
        <BrowserRouter>
            <div>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegisterPage} />                
                <Route component={NotFoundPage} />
            </Switch>
            </div>
        </BrowserRouter>
    );
  }
}

export default Root;
