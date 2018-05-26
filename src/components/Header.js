import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router-dom';
import Account from './Account';
class Header extends Component {
    constructor(props){
        super(props)
        this.state ={
            sideBarOpen: false,
            email: ''
        }
    }
    render(){
        return(
            <div>
            <AppBar title = "Welcome" 
            onLeftIconButtonClick={()=>{this.toggleSidebar()} }>
                 <Drawer open ={this.state.sideBarOpen} 
                    onRequestChange = {()=> {this.toggleSidebar()}}
                    docked= {false}
                 >
                    <MenuItem><Link to ="/dashboard"> Home </Link> </MenuItem>
                    <MenuItem><Link to ="/links"> ListLink </Link> </MenuItem>
                    <MenuItem><Link to ="/links/new"> CreateLink </Link></MenuItem>
                 </Drawer>
                 <Account/>
            </AppBar>
            
            </div>
        )
    }
    toggleSidebar(){
        this.setState({
            sideBarOpen: !this.state.sideBarOpen
        })
    }
}
export default Header;