import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../components/Header';
import Buttons from '../components/Buttons';
import ListComponent from '../components/List';
import ListAlert from '../components/ListAlert';
import * as requestActions from '../actions/request';


class Dashboard extends Component {

	createRequest(request) {
		this.props.actions.addRequest(request);
		console.log(request);
	}

	render() {
		console.log(this.props);
		return (
			<div>
			  	<Header createRequest={this.createRequest.bind(this)} />
			  	<ListComponent list={this.props.request.list || []}/>
				<ListAlert/>
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
