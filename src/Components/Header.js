import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardHeader} from 'material-ui/Card';

import Person from 'material-ui/svg-icons/social/person';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            open: false
        }
    }
    handleDrawer = () => {
        this.setState({open: !this.state.open})
    }
   
    handleClose = () => {
        this.setState({open: false});    
    }
    render(){
        return(
            <div>
                <AppBar
                    title="E-lite Education"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"                    
                    iconElementRight={<MoreVertIcon color="#fff" />}
                    iconStyleRight={{marginTop:"20px"}}
                    onLeftIconButtonClick={this.handleDrawer}
                    style={{position:"fixed"}}
                />
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}
                >
                    <Card>
                        <CardHeader
                            title="David Dega"
                            subtitle="Student"
                            avatar={<Person />}
                            titleStyle={{fontSize:"14px"}}
                        />
                    </Card>
                    <MenuItem 
                        onClick={this.handleClose}
                        containerElement={<Link to={`/`} />}
                    >
                        Homepage
                    </MenuItem>
                    <MenuItem 
                        onClick={this.handleClose}
                        containerElement={<Link to={`/login`} />}
                    >
                        Login
                    </MenuItem>
                    <MenuItem 
                        onClick={this.handleClose}
                        containerElement={<Link to={`/register`} />}
                    >
                        Register
                    </MenuItem>
                </Drawer>    
            </div>

            
        )
    }
}
export default Header;