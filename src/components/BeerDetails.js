import React, { Component } from 'react'
import { Card, Icon, Image, Button, Segment } from 'semantic-ui-react'

export default class BeerDetails extends Component {
    render() {
        const beer = this.props.beer
        return (
            <Segment padded>
                <Card centered>
                    <Image size='small' centered src={beer.image_url} />
                    <Card.Content>
                    <Card.Header>{beer.name}</Card.Header>
                    <Card.Meta>
                        <span className='date'>{beer.style}</span>
                    </Card.Meta>
                    <Card.Meta>
                        <span className='date'>{beer.tagline}</span>
                    </Card.Meta>
                    <Card.Description>
                        {beer.country}
                    </Card.Description>
                    <Card.Description>
                        {beer.description}
                    </Card.Description>
                    </Card.Content>
                    <Card.Content >
                        <Button positive>
                         <Icon name='cart plus' /> Buy
                        </Button>
                        <Button
                         onClick={() => this.props.handleClick(null)}
                         color='yellow'>
                         <Icon name='long arrow alternate left' /> Back
                        </Button>
                    </Card.Content>
                </Card> 
        </Segment>
        )
    }
}
