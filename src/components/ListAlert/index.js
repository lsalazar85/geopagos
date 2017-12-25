import React, { Component } from 'react';

class ListAlert extends Component {
    render(){
        return(
            <div className="list-row-alert">
                <div className="list-icon col-md-1">
                    <img src="/static/images/reject_active.png" alt="Eliminate List"/>
                </div>
                <div className="list-row-alert_msg col-md-11">
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
        )
    }
}

export default ListAlert;