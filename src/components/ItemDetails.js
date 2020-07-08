import React, { Component } from 'react'
import { Image, Button, Icon, Segment, Header } from 'semantic-ui-react'


export default class ItemDetails extends Component {

    render() {
        const beer = this.props.beer
        return (
            <Segment size="mini">
                <Image size="mini" src={beer.image_url}/><br/>
                <Header as='h3'>Name: {beer.name} </Header>
                <Header as='h3'>Price: £{beer.price} </Header>
                <Button onClick={() => this.props.removeBeerFromCart(beer)}
                    color='google plus'> 
                    <Icon name='delete' /> Remove Item from Cart
                </Button>             
            </Segment>
        )
    }
}
