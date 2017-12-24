import React, { Component } from 'react';
import Header from '../Header';
import Buttons from '../Buttons';
import ListComponent from '../List';

class Dashboard extends Component {
	render() {
		return (
			<div>
			  <Header />
			  <ListComponent/>
			  <Buttons />
			</div>
		)
	}
}

export default Dashboard;

