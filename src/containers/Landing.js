import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as requestActions from '../actions/request';

class Landing extends Component {
	constructor(props){
		super(props)

		this.state = {active: false};

        this.handleActive = this.handleActive.bind(this);
	}

    handleActive(e){
		this.setState({
			active: e.target.value ? true : false
		});
	}

	create(e) {
		e.preventDefault();
		if(this.state.active) {
			this.props.actions.addRequest(this.state, this.props.history.push);
		}
	}

	onChangeField(e) {
		this.setState({[e.target.name]: e.target.value});
	}

	render() {
        return(
			<div className="landing-content">
				<form className="landing-form container-fluid">
					<div className="row">
						<div className="landing-form-a col-sm-12 col-md-6">
							<p>
								Bienvenido.
							</p>
							<input type="text" placeholder="Introduce tu nombre" onChange={(e) => this.handleActive(e)} />
							<div className="visa-card">
								<img src="/static/images/visa-card.png" alt="Visa Geopagos"/>
							</div>
						</div>
						<div className="lading-form-b col-sm-12 col-md-6">
                            {/* Visa Logo*/}
							<div className="landing-form-b_logo">
								<img src="/static/images/visa-logo-white.png" alt=""/>
								<span>Solicitudes</span>
							</div>
                            {/* Form Box Landing */}
							<div className={this.state.active ? "landing-form-b_formBox active" : "landing-form-b_formBox" }>
								<h3>
									Crea tu primera solicitud
								</h3>
								<div className="landing-form-b_formBox-div">
									<label>Razón Social</label>
									<input onChange={(e) => this.onChangeField(e)} name="razonSocial" type="text" placeholder="ej: Nexus S.A" required />
								</div>
								<div className="landing-form-b_formBox-div">
									<label>Número de CUIT</label>
									<input type="number" onChange={(e) => this.onChangeField(e)} name="cuit" placeholder="0-00000000-0" required />
								</div>
								<div className="landing-form-b_formBox-div">
									<label>Número de establecimiento</label>
									<input type="number" onChange={(e) => this.onChangeField(e)} name="nBuilding" placeholder="0000000-0" required />
								</div>
								<input onClick={(e) => this.create(e)} className="form-box-btn col-md-12" type="submit" value="Crear Solicitud"/>
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


export default connect(state => ({

}),
dispatch => ({
  actions: bindActionCreators(requestActions, dispatch),
}),
)(Landing);