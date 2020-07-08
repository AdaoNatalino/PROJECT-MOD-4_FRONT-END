import React, { Component } from 'react'
import ItemDetails from "./ItemDetails"
import { Link } from "react-router-dom";
import { Grid, Segment, Icon, Header } from 'semantic-ui-react'


export default class Cart extends Component {

    ItemDetailsToRender = () => this.props.inCart.map(beer => < ItemDetails
        beer={beer} 
        removeBeerFromCart={this.props.removeBeerFromCart}
        key={beer.id} />)

    totalCheckout = () => {
        const arrayOfPrice = this.props.inCart.map(beer => beer.price)
        return  arrayOfPrice.reduce((a, price) => a + price, 0)
    }

    render() {
        return (
        <Grid stackable columns={2}>  
            <Grid.Column>
        <div className="container">
            <div className="row">
                <div className="col-xs-8">
                    <div className="panel panel-info">
                        <div className="panel-heading">
                            <div className="panel-title">
                                <div className="row">
                                    <div className="col-xs-6">
                                    <Header as='h1'>Shopping Cart</Header>

                                    </div>
                                    <div className="col-xs-6"><br/><br/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="panel-body">
                            <Segment inverted secondary>
                            { this.ItemDetailsToRender() }
                            </Segment>
                        </div>
                            <div className="row">
                                <div className="text-center">
                                    
                                    <div className="col-xs-3">
                                    </div>
                                </div>
                            </div>
                        <div className="panel-footer">
                            <div className="row text-center">  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Grid.Column>
        <Grid.Column>
            <div className="col-xs-9">
                <Segment inverted>
                    <Icon name="fire"/>Are you ready?
                    <Icon name="shop"/>
                </Segment>
            </div>
            <Segment inverted>
                <div className="col-xs-9">
                    <h4 className="text-center">Total <strong>£{ this.totalCheckout() }</strong></h4><br/>
                </div><br/>
                <div className="col-xs-3">
                    <button type="button" className="btn btn-success btn-block">
                    <Icon name="money"/> Checkout
                    </button><br/>
                    <Link to="/beers">
                    <button type="button" className="btn btn-primary btn-sm btn-block">
                            <Icon name="add to cart"/> Continue shopping
                    </button>
                    </Link>
                </div>
            </Segment> 
        </Grid.Column>
        </Grid>
                            
        )   
    }
}


