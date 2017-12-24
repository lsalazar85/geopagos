import React, { Component } from 'react';

class Landing extends Component {
	render() {
		return(
			<section className="landing-content container">
				<div className="row">
					<form className="landing-content-up container-fluid">
						<div className="row">
							<div className="col-md-6">
								<p>Hola</p>
							</div>
							<div className="col-md-6">
								<p>Hola</p>
							</div>
						</div>
					</form>
				</div>
				<div className="row">
					<div className="landing-content-down container-fluid">
						<div className="row">
							<div className="col-md-4">
							<span>
								Comienza a aprobar números <br/>
								de establecimiento
						    </span>
								<br/>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus quis orci eget pharetra. Pellentesque lacinia ultrices arcu, quis pulvinar eros iaculis in. Duis ut aliquam felis.

									Donec ut tellus et leo vestibulum lobortis. Aenean dignissim varius est, nec porttitor augue aliquam vitae. Vivamus placerat nunc eu placerat maximus. Morbi tincidunt nunc eu elit porta, vel consequat leo varius. Vivamus vel ornare odio, eget feugiat purus. Aliquam erat volutpat. Vivamus a est blandit, rutrum mauris convallis, facilisis sem. Pellentesque

									pellentesque nunc at ligula lacinia, eget porttitor mauris aliquet. Fusce non felis convallis, ultricies purus at, faucibus nisi. Sed nibh lorem, sodales ut justo sed, rutrum cursus enim. Quisque nec nibh non mi accumsan finibus. Nam iaculis eget justo pharetra finibus.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default Landing;
