import getMuiTheme from 'material-ui/styles/getMuiTheme';

const EduTheme = getMuiTheme({
  palette: {
    primary1Color: '#3F51B5',
  },
  tabs: {
    backgroundColor: 'transparent',
    selectedTextColor: '#3F51B5',
    textColor: '#4d4d4d'
  },
  inkBar: {
    backgroundColor: '#3F51B5'
  }
});

export default EduTheme;