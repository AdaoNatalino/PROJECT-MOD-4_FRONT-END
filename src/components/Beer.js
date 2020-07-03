import React, { Component } from 'react'

export default class Beer extends Component {
    render() {
        return (
            <>
            im a beer, and my name is {this.props.beer.name}
            </>
        )
    }
}
