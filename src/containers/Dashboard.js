import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../components/Header';
import Buttons from '../components/Buttons';
import ListComponent from '../components/List';
import ListAlert from '../components/ListAlert';
import * as requestActions from '../actions/request';


class Dashboard extends Component {
	constructor(props){
		super(props);
		this.state = {selected: {}, hasReject: false, confirmReject: false};
	}

	createRequest(request) {
		this.props.actions.addRequest(request);
	
	}

	approveRequest(request) {
		console.log(request);
		this.props.actions.approveRequest(request);
	}

	rejectRequest(request) {
		this.setState({hasReject: true, confirmReject: false, selected: request});
	}

	confirmReject() {
		setTimeout(() => this.props.actions.rejectRequest(this.state.selected), 500);
		this.dismissReject();
		this.setState({confirmReject: true});
	}

	dismissReject(){
		this.setState({hasReject: false, confirmReject: false});
	}

	render() {
		return (
			<div>
			  	<Header createRequest={this.createRequest.bind(this)} />
			  	<ListComponent selected={this.state.selected} confirmReject={this.state.confirmReject} rejectRequest={this.rejectRequest.bind(this)} approveRequest={this.approveRequest.bind(this)} list={this.props.request.list || []}/>
				{this.state.hasReject ? <ListAlert confirmReject={this.confirmReject.bind(this)} onDismiss={this.dismissReject.bind(this)}/> : <div></div>}
			  	<Buttons />
			</div>
		)
	}
}


export default connect(state => ({
	request: state.request
}),
dispatch => ({
	actions: bindActionCreators(requestActions, dispatch),
}),
)(Dashboard);
