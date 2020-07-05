import React, { Component } from 'react'
import { Card, Icon, Image, Button, Segment } from 'semantic-ui-react'

export default class BeerDetails extends Component {
    render() {
        const beer = this.props.beer
        return (
            <Segment color="green" padded inverted tertiary>
                <Card fluid centered>
                    <Image size='tiny' centered src={beer.image_url} />
                    <Card.Content>
                    <Card.Header>{beer.name}</Card.Header>
                    <Card.Description>
                        <strong>Style</strong>: {beer.style}
                    </Card.Description>
                    <Card.Description>
                    <strong>Tagline:</strong> {beer.tagline}
                    </Card.Description>
                    <Card.Description> <strong>Country:</strong> {beer.country} </Card.Description>
                    <Card.Description> <strong>ABV:</strong> {beer.abv} % </Card.Description>
                    <Card.Description> <strong>IBU:</strong> {beer.ibu} % </Card.Description>

                    <Card.Description> <strong>Description:</strong> {` ${beer.description}`} </Card.Description><br></br>
                    <Card.Description> <strong>Food Pairing:</strong> {` ${beer.food_pairing}`} </Card.Description><br></br>
                    <Card.Description> <strong>Tips:</strong> {beer.brewers_tips} </Card.Description><br></br>

                    <Card.Description> <strong>Price: £</strong>{beer.price} </Card.Description> <br></br>

                    </Card.Content>
                    <Card.Content >
                        <Button positive>
                         <Icon name='cart plus' /> Add to Cart
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
