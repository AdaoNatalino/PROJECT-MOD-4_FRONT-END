import React, { Component } from 'react'
import { Image, Button, Icon, Card } from 'semantic-ui-react'


export default class ItemDetails extends Component {

    render() {
        const beer = this.props.beer
        return (
            <Card>
            <Card.Content>
              <Image
                centered
                size='mini'
                src={beer.image_url}
              />
              <Card.Description>{beer.name}</Card.Description>
        <Card.Meta>Price: £{beer.price}</Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button size="mini"
                    onClick={() => this.props.removeBeerFromCart(beer)}
                    color='google plus'> 
                    <Icon name='delete' /> Remove 
                </Button> 
              </div>
            </Card.Content>
            </Card>
        )
    }
}


