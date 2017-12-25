import React, { Component } from 'react';
import ListAlert from '../ListAlert'
import {Animated} from "react-animated-css";

// UI Component
const ListComponentUi = () => {
    return (
        <div className="list-content">
            <div className="container">
                <div className="row">
                    <div className="list-row">
                        <div className="col-md-1 list-icon">
                            <img src="/static/images/reject_inactive.png" alt="Eliminate List" onClick={this.handleReject}/>
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
                            <img src="/static/images/accept_active.png" alt="Eliminate List" onClick={this.handleApprove}/>
                        </div>
                    </div>
                    <ListAlert/>
                </div>
            </div>
        </div>
    )
}


class ListComponent extends Component {
    constructor(props){
        super(props);

        this.state = {
           click: false
        }

        this.handleApprove = this.handleApprove.bind(this);
        this.handleReject = this.handleReject.bind(this);
    }

    //Approve Request Animation
    handleApprove(){
        this.setState ({
            click:true
        });
    }

    //Reject Request Animation
    handleReject(){
        this.setState ({
            click:true
        });
    }

     render() {
         return(
             <ListComponentUi/>
         )
     }
}

export default ListComponent;