import React, { Component } from 'react'
import ItemDetails from "./ItemDetails"
import { Link } from "react-router-dom";

export default class Cart extends Component {

    ItemDetailsToRender = () => this.props.beers.map(beer => < ItemDetails beer={beer} key={beer.id} />)

    totalCheckout = () => {
        const arrayOfPrice = this.props.beers.map(beer => beer.price)
        return  arrayOfPrice.reduce((a, price) => a + price, 0)
    }

    render() {
        return (
            
        <div className="container">
            <div className="row">
                <div className="col-xs-8">
                    <div className="panel panel-info">
                        <div className="panel-heading">
                            <div className="panel-title">
                                <div className="row">
                                    <div className="col-xs-6">
                                        <h5><span className="glyphicon glyphicon-shopping-cart"></span> Shopping Cart</h5>
                                    </div>
                                    <div className="col-xs-6">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="panel-body">

                            {/* { this.ItemDetailsToRender() } */}
                            
                            <div className="row">
                                <div className="text-center">
                                    <div className="col-xs-9">
                                        <h6 className="text-right">Are you ready?</h6>
                                    </div>
                                    <div className="col-xs-3">
                                        {/* <button type="button" className="btn btn-default btn-sm btn-block">
                                            Update cart
                                        </button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="panel-footer">
                            <div className="row text-center">
                                <div className="col-xs-9">
                                    {/* <h4 className="text-right">Total <strong>£{ this.totalCheckout() }</strong></h4> */}
                                </div>
                                <div className="col-xs-3">
                                    <button type="button" className="btn btn-success btn-block">
                                        Checkout
                                    </button><br/>
                                    <Link to="/beers">
                                    <button type="button" className="btn btn-primary btn-sm btn-block">
                                            <span className="glyphicon glyphicon-share-alt"></span> Continue shopping
                                    </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )   
    }
}
