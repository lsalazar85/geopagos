import React, { Component } from 'react';

class Landing extends Component {
	render() {
		return(
			<div className="landing-content">
				<form className="landing-form container-fluid">
					<div className="row">
						<div className="landing-form-a col-md-6">
							<p>
								Bienvenido.
							</p>
							<input type="text" placeholder="Introduce tu nombre"/>
							<div className="visa-card">
								<img src="/static/images/visa-card.png" alt="Visa Geopagos"/>
							</div>
						</div>
						<div className="lading-form-b col-md-6">
							{/* Visa Logo*/}
							<div className="landing-form-b_logo">
								<img src="/static/images/visa-logo-white.png" alt=""/>
								<span>Solicitudes</span>
							</div>
							{/* Form Box Landing */}
							<div className="landing-form-b_formBox">
								<h3>
									Crea tu primera solicitud
								</h3>
								<div className="landing-form-b_formBox-div">
									<p>Razón Social</p>
									<input type="text" placeholder="ej: Nexus S.A"/>
								</div>
								<div className="landing-form-b_formBox-div">
									<p>Número de CUIT</p>
									<input type="number" placeholder="0-00000000-0"/>
								</div>
								<div className="landing-form-b_formBox-div">
									<p>Número de establecimiento</p>
									<input type="number" placeholder="0000000-0"/>
								</div>
								<div className="form-box-btn col-md-12">
									<span>Crear Solicitud</span>
								</div>
							</div>
						</div>
					</div>
				</form>
				<section className="landing-text container-fluid">
					<div className="row">
						<div className="col-md-6">
							<p className="landing-text_title ">Comienza a aprobar números <br/>
								de establecimiento
							</p>
							<p className="landing-text_title-blockText">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus quis orci eget pharetra.
								Pellentesque lacinia ultrices arcu, quis pulvinar eros iaculis in. Duis ut aliquam felis. Donec
								ut tellus et leo vestibulum lobortis. Aenean dignissim varius est, nec porttitor augue aliquam
								vitae. Vivamus placerat nunc eu placerat maximus. Morbi tincidunt nunc eu elit porta, vel consequat
								leo varius. Vivamus vel ornare odio, eget feugiat purus. Aliquam erat volutpat. Vivamus a est blandit,
								rutrum mauris convallis, facilisis sem. Pellentesque pellentesque nunc at ligula lacinia, eget
								porttitor mauris aliquet. Fusce non felis convallis, ultricies purus at, faucibus nisi. Sed nibh
								lorem, sodales ut justo sed, rutrum cursus enim. Quisque nec nibh non mi accumsan finibus. Nam
								iaculis eget justo pharetra finibus.
							</p>
						</div>
					</div>
				</section>
			</div>
		)
	}
}

export default Landing;
