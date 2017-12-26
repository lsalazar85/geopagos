import React, { Component } from 'react';
import ModalComponent from '../Modal';

// UI Component

class Header extends Component {

	render() {
		const requestTitle = 'Solicitudes';
		return(
		  <div className="header-content container-fluid">
			<div className="row">
				<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
					<div className="header-title-content">
						<img src="/static/images/visa-logo.png"/>
						<span className="header-title">{requestTitle}</span>
					</div>
				</div>
				<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
					<div className="header-add-request">
						<ModalComponent createRequest={this.props.createRequest.bind(this)}/>
					</div>
				</div>
			</div>
		</div>
		)
	}
}

export default Header;
