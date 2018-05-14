import React, { Component } from 'react';
import { NavLink, Route, Switch } from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import getMuiTheme from 'material-ui/styles/getMuiTheme'

import EduTheme from '../UI/EduTheme';
import Header from './Header';
import HomePageContainer from './HomePageContainer';
import NotFoundPage from './NotFoundPage';

import logo from '../logo.svg';
import '../styles/App.css';

class App extends Component {
  render() {
    return (      
      <MuiThemeProvider muiTheme={EduTheme}>
        <Header />  
        <HomePageContainer />        
      </MuiThemeProvider>      
    );
  }
}

export default App;
