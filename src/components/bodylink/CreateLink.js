import React, {Component} from 'react'
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import RebrandlyApi from '../../services/rebrandlyApi';
import Header from '../Header';
class CreateLink extends Component{
    constructor(props){
        super(props)
        this.state ={
            title : '',
            destination:''
        }
    }
    render(){
        return(
            <div>
                <Header/>
                <Card>
                    <CardHeader title ="Create List"/>
                    <CardText>
                        <TextField
                               floatingLabelText="Enter Title"
                               value= {this.state.title}
                               onChange= {(e) => {this.setState({title: e.target.value})}}
                        />
                    </CardText>
                    <CardText>
                        <TextField
                               floatingLabelText="Enter Destination"
                               value= {this.state.destination}
                               onChange= {(e) => {this.setState({destination: e.target.value})}}
                        />
                    </CardText>
                    <CardActions>
                        <RaisedButton label = "Submit" primary ={true} onClick={()=>{this.onSubmit()}}/>
                    </CardActions>
                </Card>
            </div>
        )
    }
    onSubmit(){
        const data={
            title: this.state.title , 
            destination: this.state.destination
        }
        RebrandlyApi.post('/links', {body: data})
        .then(()=> {this.props.history.push('/links')})
        .catch(error => alert(error.message))
    }
}
export default CreateLink;