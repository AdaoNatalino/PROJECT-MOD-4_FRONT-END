import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import { Switch, Route, Router } from "react-router-dom";
import LoginForm from './components/LoginForm'

import BeersContainer from './containers/BeersContainer'
import Menu from './components/Menu'
import API from './API'

// import HomePage from './components/HomePage'

export default class App extends Component {

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
        <React.Fragment className="App">
          <Segment>
            <Menu updateFilter={this.updateFilter} centered vertical />
          </Segment>
          <br/>
          <Switch>
            <Route exact path="/" component={ BeersContainer }/>
            <Route path="/login" exact component={LoginForm} />
          </Switch>
          {/* <BeersContainer 
            handleClick={this.selectBeerToView}
            beerToView={this.state.beerToView}
            beers={this.filterBySearch(this.state.beers)}/> */}
        </React.Fragment>
    );
  }
}

