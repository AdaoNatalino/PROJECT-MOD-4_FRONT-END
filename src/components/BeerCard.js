import React, { Component } from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'

export default class Beer extends Component {
    render() {
        const beer = this.props.beer
        return (   
            <Card centered>
                <Image size="mini" centered src={beer.image_url} />
                <Card.Content>
                <Card.Header>{beer.name}</Card.Header>
                <Card.Description>
                <span className='date'>Style: {beer.style}</span>
                </Card.Description>
                <Card.Description > Country: {beer.country} </Card.Description>
                <Card.Description >
                Price: £{beer.price}
                </Card.Description>
                </Card.Content>
                <Card.Content >
                <Button
                    onClick={() => this.props.handleClick(beer)}
                    color='twitter'>
                    <Icon name='beer' /> Details
                </Button>
                </Card.Content>
            </Card> 
        )
    }
}
