import React, { Component } from 'react';

class Item extends Component {
   constructor(props){
        super(props);
        this.state = {
            hasConfirm: false
        };
    }

    handleApprove(e) {
        e.preventDefault();
        this.setState({hasConfirm: true});

    }

     render() {
        const item = this.props.item;
        const today = new Date();
         return(
                <div className="row">
                    <div className={this.state.hasConfirm ? "list-row animated fadeOutRight" : "list-row"}>
                        <div className="col-xs-1 col-sm-1 col-md-1 list-icon">
                            <img src="/static/images/reject_inactive.png" alt="Eliminate List" onClick={this.handleReject}/>
                        </div>
                        <div className="list-padding-a col-xs-5 col-sm-5 col-md-5">
                            <span className="list-razonSocial">
                                {item.razonSocial}
                            </span>
                            <span className="list-CUIT">
                                CUIT:  {item.cuit}
                            </span>
                        </div>
                        <div className="list-padding-b col-xs-2 col-sm-2 col-md-2">
                            <span className="list-establecimiento">
                                Nº de establecimiento
                            </span>
                            <span className="list-nroEst">
                                {item.nBuilding}
                            </span>
                            <span className="list-date">
                                {today.getMonth()}
                            </span>
                        </div>
                        <div className="list-terminal col-xs-3 col-sm-3 col-md-3">
                            <input type="number" placeholder="Nro de Terminal"/>
                        </div>
                        <div className="list-icon col-xs-1 col-sm-1 col-md-1">
                            <img src="/static/images/accept_active.png" alt="Eliminate List" onClick={(e) => this.handleApprove(e)}/>
                        </div>
                    </div>
                 </div>
            )
                     
     }
}

export default Item;