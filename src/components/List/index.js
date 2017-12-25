import React, { Component } from 'react';

class ListComponent extends Component {
    constructor(props){
        super(props);

        this.handleApprove = this.handleApprove.bind(this);
        this.handleReject = this.handleReject.bind(this);

        this.state = {
            clickRight: false,
            clickLeft: false
        };
    }

    //Approve Request Animation
    handleApprove(){
        this.setState({
            clickRight: true
        })
        console.log('click aceptar')
    }

    //Reject Request Animation
    handleReject(){
        this.setState({
            clickLeft: true
        })
        console.log('click rechazar')
    }

     render() {

         return(
             <div className="list-content">
                 <div className="container">
                     <div className="row">
                         <div className="list-row">
                             <div className="col-xs-1 col-sm-1 col-md-1 list-icon">
                                 <img src="/static/images/reject_inactive.png" alt="Eliminate List" onClick={this.handleReject}/>
                             </div>
                             <div className="list-padding-a col-xs-5 col-sm-5 col-md-5">
                            <span className="list-razonSocial">
                                Nexus tecnologías informáticas S.A.
                            </span>
                                 <span className="list-CUIT">
                                    CUIT: 33-70996436-0
                            </span>
                             </div>
                             <div className="list-padding-b col-xs-2 col-sm-2 col-md-2">
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
                             <div className="list-terminal col-xs-3 col-sm-3 col-md-3">
                                 <input type="number" placeholder="Nro de Terminal"/>
                             </div>
                             <div className="list-icon col-xs-1 col-sm-1 col-md-1">
                                 <img src="/static/images/accept_active.png" alt="Eliminate List" onClick={this.handleApprove}/>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         )
     }
}

export default ListComponent;