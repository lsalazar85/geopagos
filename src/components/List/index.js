import React, { Component } from 'react';

// UI Component
const ListComponentUi = () => {
    return (
        <div className="list-content">
            <div className="container">
                <div className="row">
                    <div className="list-row">
                        <div className="col-md-1 list-icon">
                            <img src="/static/images/reject_active.png" alt="Eliminate List"/>
                        </div>
                        <div className="list-padding-a col-md-5">
                            <span className="list-razonSocial">
                                Nexus tecnologías informáticas S.A.
                            </span>
                            <span className="list-CUIT">
                                    CUIT: 33-70996436-0
                            </span>
                        </div>
                        <div className="list-padding-b col-md-2">
                            <span className="list-establecimiento">
                                Nº de establecimiento
                            </span>
                            <span className="list-nroEst">
                                456421654265
                            </span>
                            <span className="list-date">
                                15/09/2017
                            </span>
                        </div>
                        <div className="list-terminal col-md-3">
                            <input type="number" placeholder="Nro de Terminal"/>
                        </div>
                        <div className="list-icon col-md-1">
                            <img src="/static/images/accept_active.png" alt="Eliminate List"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


class ListComponent extends Component {
     render() {
         return(
             <ListComponentUi/>
         )
     }
}

export default ListComponent;