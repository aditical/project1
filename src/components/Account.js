import React, {Component} from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import AccountBox from 'material-ui/svg-icons/action/account-box';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import MenuItem from 'material-ui/MenuItem';
import { withRouter } from 'react-router';

class Account extends Component{
    render(){
        return(
            <div>
                <IconMenu iconButtonElement ={<IconButton><NotificationsIcon/> </IconButton>}> </IconMenu>
                <IconMenu iconButtonElement ={<IconButton><AccountBox/> </IconButton>}> 
                    <MenuItem  primaryText= {sessionStorage.getItem("email")}/>
                    <MenuItem primaryText="SignOut" onClick= {()=>{this.signOut()}}/>
                </IconMenu>
            </div>
        )
    }
    signOut(){
        sessionStorage.clear();
        this.props.history.push('/')
    }
}
export default withRouter(Account); 