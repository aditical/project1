import React, {Component} from 'react';
import EditIcon from 'material-ui/svg-icons/image/edit';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import IconButton from 'material-ui/IconButton';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
  } from 'material-ui/Table';
import RebrandlyApi from '../../services/rebrandlyApi';
import Header from '../Header';

  
class ListLink extends Component {
    constructor(props){
        super(props)
        this.state={
            items:[]
        }
    }
    render(){
        return(
            <div>
                <Header/>
               <Table selectable={false}>
                   <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                        <TableRow>
                            <TableHeaderColumn> Title </TableHeaderColumn>
                            <TableHeaderColumn>Destination </TableHeaderColumn>
                            <TableHeaderColumn> ShortUrl </TableHeaderColumn>
                            <TableHeaderColumn> Action </TableHeaderColumn>
                        </TableRow>
                   </TableHeader> 
                   <TableBody displayRowCheckbox={false}>
                        {
                            this.state.items.map((items)=> {
                                return(
                                    <TableRow key ={items.id}>
                                        <TableRowColumn>{items.title}</TableRowColumn>
                                        <TableRowColumn>{items.destination}</TableRowColumn>
                                        <TableRowColumn>{items.shortUrl}</TableRowColumn>
                                        <TableRowColumn><IconButton onClick= {()=> {this.props.history.push(`/links/${items.id}/edit`)}}><EditIcon/></IconButton>
                                        <IconButton onClick={()=>this.deleteLink(items.id)}><DeleteIcon/></IconButton>
                                        </TableRowColumn>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>               
               </Table>
            </div>
        )
    }
    componentWillMount(){
        this.listlink()
    }
    listlink(){
        RebrandlyApi.get('/links')
        .then(links => {this.setState(
            {
                items: links
            }
        )})
    }
    deleteLink(itemsId){
        RebrandlyApi.delete(`/links/${itemsId}`)
        .then(response => {this.listlink()})
        .catch(error => {alert(error.message)})
    }
}
export default ListLink;