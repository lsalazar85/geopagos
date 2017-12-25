import React, { Component } from 'react';
import Header from '../Header';
import Buttons from '../Buttons';
import ListComponent from '../List';
import ListAlert from '../ListAlert';


class Dashboard extends Component {
	render() {
		return (
			<div>
			  	<Header />
			  	<ListComponent/>
				<ListAlert/>
			  	<Buttons />
			</div>
		)
	}
}

export default Dashboard;

