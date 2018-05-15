import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import EduTheme from './UI/EduTheme';
import Root from './container/Root';

import './styles/index.css';

ReactDOM.render(
    <MuiThemeProvider muiTheme={EduTheme}>
        <Root />        
    </MuiThemeProvider>
    , document.getElementById('root'));
registerServiceWorker();
