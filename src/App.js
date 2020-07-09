import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import BeersContainer from './containers/BeersContainer';
import Menu from './components/Menu';
import API from './API';
import LoginForm from './components/LoginForm';
import AccountDetails from './components/AccountDetails';
import HomePage from './components/HomePage';
import Cart from './components/Cart';

export default class App extends Component {

  state = {
    beers: [],
    beerToView: null,
    search: "",
    loggedIn: false,
    inCart: []
  }

  clearCart = () => {
    
  }
  

  componentDidMount = () => {
    API.getAllBeers().then(data => {
          this.setState( { beers: data } )
      })
    this.checkIfLoggedIn();
  }

  addBeerToCart = (beer) => {
    // debugger
    const beers = [...this.state.inCart, beer]
    localStorage.setItem("cart", beers)
    this.setState({ inCart: beers })
  }

  removeBeerFromCart = (beer) => {
    const array = [...this.state.inCart].filter(b => b !== beer)
    this.setState({ inCart: array })
  }

  checkIfLoggedIn = () => {
    const token = localStorage.getItem("jwt");
    if (token) {
      this.setState({ loggedIn: true });
    }
  };

  changeLogInState = () => this.setState({ loggedIn: true })

  logOut = () => {
    localStorage.removeItem("jwt");
    this.setState({
      loggedIn: false,
    });
  };

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
      <div className="App">
        <Router>
          <Segment>
            <Menu centered vertical
             logOut={this.logOut}
             loggedIn={this.state.loggedIn} 
             updateFilter={this.updateFilter} />
          </Segment>
        <br/>
        <Switch>
          <Route exact path="/home">
              <HomePage/>
          </Route>
          <Route exact path="/login">
            <LoginForm 
            loggedIn={this.state.loggedIn}
            changeLogInState={this.changeLogInState} />
          </Route>
          <Route exact path="/beers">
            <BeersContainer
            addBeerToCart={this.addBeerToCart} 
            handleClick={this.selectBeerToView}
            beerToView={this.state.beerToView}
            beers={this.filterBySearch(this.state.beers)}/>
          </Route>
          <Route exact path="/account">
              <AccountDetails/>
          </Route>
          <Route exact path="/cart">
              <Cart 
              removeBeerFromCart={this.removeBeerFromCart}
              inCart={this.state.inCart}/>
          </Route>
        </Switch>
        </Router>
      </div>
    );
  }
}

