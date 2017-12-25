import React, { Component } from 'react';
import Modal from 'react-awesome-modal';

class ModalComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    render() {

        const addRequestTitleBtn = 'Crear Solicitud';

        return (
            <section>
                <span  onClick={() => this.openModal()} className="add-request-btn">
                    <img src="/static/images/add.png" alt=""/> {addRequestTitleBtn}
                </span>
                    <Modal visible={this.state.visible} effect="fadeInDown" onClickAway={() => this.closeModal()}>
                        <div className="ModalComponent-content container-fluid">
                            <div className="row">
                                <div className="ModalComponent-title col-md-12">
                                    <span>{addRequestTitleBtn}</span>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <form action="">
                                    <div className="razon-social col-md-12">
                                        <label>Razón Social</label>
                                        <input type="text" placeholder="ej: Nexus S.A" required/>
                                    </div>
                                    <div className="cuit-establecimiento-content col-md-12">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label>Número de CUIT</label>
                                                <input type="number" placeholder="0-00000000-0" required/>
                                            </div>
                                            <div className="col-md-6">
                                                <label>Número de establecimiento</label>
                                                <input type="number" placeholder="0000000-0" required/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="create-list-btn">
                                        <input type="button" value="Cancelar" onClick={() => this.closeModal()}/>
                                        <input className="create-list-btn_b" type="submit" value="Enviar"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Modal>
            </section>
        );
    }
}


export default ModalComponent;