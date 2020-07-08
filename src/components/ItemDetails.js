import React, { Component } from 'react'

export default class ItemDetails extends Component {

    render() {
        
        return (
            <div className="row">
            <div className="col-xs-2"><img className="img-responsive" src="http://placehold.it/100x70"/>
            </div>
            <div className="col-xs-4">
                <h4 className="product-name"><strong>Product name</strong></h4><h4><small>Product description</small></h4>
            </div>
            <div className="col-xs-6">
                <div className="col-xs-6 text-right">
                    <h6><strong>25.00 <span className="text-muted">x</span></strong></h6>
                </div>
                <div className="col-xs-4">
                    <input type="text" className="form-control input-sm" value="1"/>
                </div>
                <div className="col-xs-2">
                    <button type="button" className="btn btn-link btn-xs">
                        <span className="glyphicon glyphicon-trash"> </span>
                    </button>
                </div>
            </div>
        </div>
        )
    }
}
