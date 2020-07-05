import React, { Component } from 'react'
import API from '../API'
import BeerCard from '../components/BeerCard'
import BeerDetails from '../components/BeerDetails'
import { Card } from 'semantic-ui-react'

export default class BeersContainer extends Component {

    state = {
        beers: [],
        beerToView: null,
    }

    componentDidMount = () => {
        API.getAllBeers().then(data => {
            this.setState( {beers: data} )
        })
      }

    selectBeerToView = (beer) => {
    this.setState({ beerToView: beer })
    }  
    
    
    renderAllBeers = () => this.state.beers.map(beer => 
        <BeerCard
         handleClick={this.selectBeerToView} 
         key={beer.id} 
         beer={beer}/> 
    )

    render() {
        return (
            <Card.Group itemsPerRow={4}>
                <div className="ui four column grid">
                    {this.state.beerToView
                    ? <BeerDetails 
                        handleClick={this.selectBeerToView}
                        beer={this.state.beerToView} 
                    />
                    : this.renderAllBeers() }
                </div>
            </Card.Group>

        )
    }
}
