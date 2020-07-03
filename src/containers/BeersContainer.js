import React, { Component } from 'react'
import API from '../API'

export default class BeersContainer extends Component {

    state = {
        beers: []
    }

    componentDidMount = () => {
        API.getAllBeers().then(data => {
            console.log(data);
        })
      }

    render() {
        return (
            <div>
            </div>
        )
    }
}
