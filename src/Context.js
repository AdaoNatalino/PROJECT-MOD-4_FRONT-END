import React, { Component } from 'react'
import API from './API'

const BeerContext = React.createContext() 

class BeerProvider extends Component {

    state = {
        beers: [],
        beerToView: null,
        search: ""
    }

    componentDidMount = () => {
        API.getAllBeers().then(data => {
            this.setState( { beers: data } )
        })
    }
  
    selectBeerToView = (beer) => {
    this.setState({ beerToView: beer })
    }  
  
    updateFilter = (e) => {
      this.setState({ search: e.target.value })
    }
  
    filterBySearch = (arrayOfBeers) => {
      return arrayOfBeers.filter(beer => beer.name.toLowerCase().includes(this.state.search.toLocaleLowerCase()))
    }

    render() {
        return (
            <BeerContext.Provider value={{
                ...this.state,
                selectBeerToView: this.selectBeerToView,
                updateFilter: this.updateFilter,
                filterBySearch: this.filterBySearch
            }}>
                {this.props.children}
                {/* <BeersContainer 
                handleClick={this.selectBeerToView}
                beerToView={this.state.beerToView}
                beers={ this.filterBySearch(this.state.beers) }/> */}
            </BeerContext.Provider>
        )
    }
}

const BeerConsumer = BeerContext.Consumer

export { BeerProvider, BeerConsumer }