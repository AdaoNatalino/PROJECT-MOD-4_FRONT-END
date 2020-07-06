import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import { Switch, Route, Router } from "react-router-dom";
import LoginForm from './components/LoginForm'
import Menu from './components/Menu'
import BeersContainer from './containers/BeersContainer'


export default class App extends Component {


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
        </React.Fragment>
    );
  }
}

