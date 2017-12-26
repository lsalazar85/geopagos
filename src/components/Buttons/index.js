import React, { Component } from 'react';


class Buttons extends Component {
	render() {
		return(
			<footer className="container-fluid">
				<div className="row">
					<div className="col-md-12">
						<img src="/static/images/reject_inactive.png" alt="Geopagos"/>
						<img src="/static/images/reject_active.png" alt="Geopagos"/>
						<img src="/static/images/accept_inactive.png" alt="Geopagos"/>
						<img src="/static/images/accept_active.png" alt="Geopagos"/>
					</div>
				</div>
			</footer>
		)
	}
}

export default Buttons;
