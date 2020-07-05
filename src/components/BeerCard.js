import React, { Component } from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'

// const extra = (
//   <a>
//     <Icon name='user' />
//     16 Friends
//   </a>
// )

export default class Beer extends Component {
    render() {
        const beer = this.props.beer
        return (
            <Card centered>
            <Image size="tiny" centered src={beer.image_url} />
            <Card.Content>
            <Card.Header>{beer.name}</Card.Header>
            <Card.Meta>
            <span className='date'>Style: {beer.style}</span>
            </Card.Meta>
            <Card.Description >
            {beer.country}
            </Card.Description>
            </Card.Content>
            {beer.price}
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
