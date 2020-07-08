import React, { Component } from 'react'
import { Image, Button, Icon, Segment } from 'semantic-ui-react'


export default class ItemDetails extends Component {

    render() {
        const beer = this.props.beer
        return (
            <Segment>
            <div className="row">
            <div className="col-xs-2"><Image size="mini" src={beer.image_url}/><br/><br/>
            </div>
            {/* <div className="col-xs-4">
        <h4 className="product-name"><strong>{beer.name}</strong></h4><h4><small>{beer.tagline}</small></h4>
            </div> */}
            <div className="col-xs-6">
                <div className="col-xs-6 text-right">
                    <h6><strong> 1 <span className="text-muted">x </span></strong></h6>
                </div>  
                <div className="col-xs-4" fluid >
                    <input type="text" className="form-control input-sm" value={`£${beer.price}`}/>
                </div>
                <Button onClick={() => this.props.removeBeerFromCart(beer)}
                color='google plus'> 
                <Icon name='delete' /> Remove Item from Cart
                </Button>
                <div className="col-xs-2">
                    <button type="button" className="btn btn-link btn-xs">
                        <span className="glyphicon glyphicon-trash"> </span>
                    </button>
                </div>
            </div>
        </div>
        </Segment>
        )
    }
}
