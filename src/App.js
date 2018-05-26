import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ListLink from './components/bodylink/ListLink';
import CreateLink from './components/bodylink/CreateLink';
import EditLink from './components/bodylink/EditLink';
class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <BrowserRouter>
            <Switch>
              <Route exact path ="/" render={()=>(<Redirect to = "/login"/>)}/>
              <Route exact path ="/login" component= {Login}/>
              <Route path ="/dashboard" component ={Dashboard}/>
              <Route exact path = "/links" component ={ListLink}/>
              <Route path ="/links/new" component= {CreateLink}/>
              <Route path ="/links/:id/edit" component={EditLink}/>
            </Switch>
          </BrowserRouter>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
