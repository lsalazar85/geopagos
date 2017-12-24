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
                                        <p>Razón Social</p>
                                        <input type="text" placeholder="ej: Nexus S.A"/>
                                    </div>
                                    <div className="cuit-establecimiento-content col-md-12">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <p>Número de CUIT</p>
                                                <input type="number" placeholder="0-00000000-0"/>
                                            </div>
                                            <div className="col-md-6">
                                                <p>Número de establecimiento</p>
                                                <input type="number" placeholder="0000000-0"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="create-list-btn">
                                        <a href="javascript:void(0);" onClick={() => this.closeModal()}><span>Cancelar</span></a>
                                        <button>Crear</button>
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