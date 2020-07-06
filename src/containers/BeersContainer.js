import React, { Component } from 'react'
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
            <>
                {this.props.beerToView
                ? <BeerDetails 
                    handleClick={this.props.handleClick}
                    beer={this.props.beerToView} 
                />
                :  <Card.Group > { this.renderAllBeers() } </Card.Group> 
                 }
            </>
        )
    }
}
