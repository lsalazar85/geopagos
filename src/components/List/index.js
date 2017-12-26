import React, { Component } from 'react';
import ListItem from "./ListItem";

class ListComponent extends Component {
     render() {
         return(
             <div className="list-content">
                 <div className="container">
                 {this.props.list.map(request => <ListItem selected={this.props.selected} confirmReject={this.props.confirmReject} rejectRequest={this.props.rejectRequest.bind(this)} approveRequest={this.props.approveRequest.bind(this)} key={request.cuit}  item={request} />)}
                 </div>
             </div>
         )
     }
}

export default ListComponent;