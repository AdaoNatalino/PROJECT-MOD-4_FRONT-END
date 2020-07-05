import React, { Component } from 'react'
import API from '../API'
import BeerCard from '../components/BeerCard'
import BeerDetails from '../components/BeerDetails'
import { Card } from 'semantic-ui-react'

export default class BeersContainer extends Component {
    
    renderAllBeers = () => this.props.beers.map(beer => 
        <BeerCard
         handleClick={this.props.handleClick} 
         key={beer.id} 
         beer={beer}/> 
    )

    render() {
        return (
            <Card.Group itemsPerRow={4}>
                <div className="ui four column grid">
                    {this.props.beerToView
                    ? <BeerDetails 
                        handleClick={this.props.handleClick}
                        beer={this.props.beerToView} 
                    />
                    : this.renderAllBeers() }
                </div>
            </Card.Group>

        )
    }
}
