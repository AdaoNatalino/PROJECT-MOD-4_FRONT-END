import React, { Component } from 'react'
import ItemDetails from "./ItemDetails"
import { Link } from "react-router-dom";
import { Grid, Segment, Icon, Header, Button, Card } from 'semantic-ui-react'
import PayPal from "./PayPal"

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
        <Grid columns={2}>  
            <Grid.Column >
                <Header as='h2'>
                    <Icon name="shopping cart"/> Shopping Cart   
                </Header>
                <Card.Group itemsPerRow={4}>
                    { this.ItemDetailsToRender() }
                </Card.Group>
            </Grid.Column>
            <Grid.Column>
                <Segment inverted >
                    <Icon name="fire"/>Are you ready?
                    <Icon name="shop"/>
                </Segment>
                <Segment inverted>
                    <h4 className="text-center">Total: <strong>£{ this.totalCheckout() }</strong></h4><br/>
                    {/* <Button color="green" fluid>
                        <Icon name="money"/> Checkout
                    </Button><br/> */}
                        <PayPal
                         clearCart={this.clearCart} 
                         total={this.totalCheckout()} /><br/>
                    <Link to="/beers">
                        <Button fluid color="twitter">
                                <Icon name="add to cart"/> Continue shopping
                        </Button>
                    </Link>
                </Segment> 
            </Grid.Column>
        </Grid>                  
        )   
    }
}
