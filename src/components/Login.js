import React, {Component} from 'react';
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import RebrandlyApi from '../services/rebrandlyApi';

class Login extends Component{
    constructor(props){
        super(props)
        this.state ={
            email :'', 
            password:''
        }
    }
    render(){
        return(
            <div>
                <Card>
                    <CardHeader title ="Login"/>
                    <CardText>
                        <TextField
                            type="email"
                            hintText="Email"
                               floatingLabelText="Enter Email"
                               value= {this.state.email}
                               onChange= {(e) => {this.onChangeEmail(e)}}
                        />
                    </CardText>
                    <CardText>
                        <TextField
                            
                            hintText="Password"
                               floatingLabelText="Enter Password"
                               value = {this.state.password}
                               onChange = {(e)=> {this.onChangePassword(e)}}
                        />
                    </CardText>
                    <CardText>
                        <RaisedButton label ="Submit" primary= {true} onClick= {()=> this.onSubmit()} />
                    </CardText>
                </Card>
            </div>
        )
        
    }
    onChangeEmail(e){
        this.setState({
            email : e.target.value
        })
    }
    onChangePassword(e){
        this.setState({
            password : e.target.value
        })
    }
    
    onSubmit(){
        this.getAccountDetail(this.state.password)
        . then(account => {
            if(account.email === this.state.email){
                sessionStorage.setItem('password', this.state.password)
                sessionStorage.setItem('email', this.state.email)
                this.props.history.push('/dashboard')
            }
            else{
                alert("Email doesn't match")
            }
        })
        .catch(error => {
            alert(error.message)
        })
    }
    componentWillMount(){
        const savedPassword = sessionStorage.getItem("password")
        if(savedPassword){
            this.getAccountDetail(savedPassword)
                .then(response => {
                    if(response){
                        this.props.history.push('/dashboard')
                    }
                })
        }
    }    
    getAccountDetail(password){
        return RebrandlyApi.get('/account', {
            headers: {
                apikey: password
            }
        })
    }
    
}
export default Login; 