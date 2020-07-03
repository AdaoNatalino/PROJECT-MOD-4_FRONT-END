import React, { Component } from 'react'
import API from '../API'
import Beer from '../components/Beer'

export default class BeersContainer extends Component {

    state = {
        beers: []
    }

    componentDidMount = () => {
        API.getAllBeers().then(data => {
            this.setState( {beers: data} )
        })
      }
    
    renderAllBeers = () => this.state.beers.map(beer => <Beer beer={beer}/> )

    render() {
        return (
            <div>
                { this.renderAllBeers() }
            </div>
        )
    }
}
