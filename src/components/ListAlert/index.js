import React, { Component } from 'react';

class ListAlert extends Component {
    render(){
        return(
            <div className="list-row-alert">
                <div className="container">
                    <div className="row">
                        <div className="list-row">
                            <div className="list-icon col-xs-1 col-sm-1 col-md-1">
                                <img src="/static/images/reject_active.png" alt="Eliminate List"/>
                            </div>
                            <div className="list-row-alert_msg col-xs-11 col-sm-11 col-md-11">
                            <span>
                                ¿Estás seguro de rechazar la solicitud de este comercio?
                            </span>
                                <span className="btn-cancel">
                                Cancelar
                            </span>
                                <span className="btn-reject">
                                Rechazar
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListAlert;