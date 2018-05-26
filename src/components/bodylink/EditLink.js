import React, {Component} from 'react';
import Header from '../Header';
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import RebrandlyApi from '../../services/rebrandlyApi';
class EditLink extends Component{
   state ={
       id: this.props.match.params.id, 
       title: '',
       destination:''
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
    componentWillMount(){
        RebrandlyApi.get(`/links/${this.state.id}`)
        .then(link => this.setState({
            title: link.title,
            destination: link.destination
        }))
    }
    onSubmit(){
        const data ={
            title: this.state.title,
            destination: this.state.destination
        }
        RebrandlyApi.post(`/links/${this.state.id}`, {body:data})
        .then(links => {this.props.history.push("/links")})
        .catch(error=>alert(error.message))
    }
}
export default EditLink;