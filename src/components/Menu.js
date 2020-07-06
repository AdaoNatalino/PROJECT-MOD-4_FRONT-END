import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import LoginForm from './LoginForm'
import { BeerConsumer } from "../Context"

export default class MenuExampleSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState( { activeItem: name } )

  // handleLoginForm = (name) => {
  //   this.setState({ activeItem: name })
  //   return <LoginForm />
  // }

  render() {
    const { activeItem } = this.state

    const { updateFilter } = this.props.menuExampleSecondary

    return (
      <Menu pointing fixed="top" inverted>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}

        />
        <Menu.Item
          name='My Cart'                    
          active={activeItem === 'My Cart'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Account Details'
          active={activeItem === 'Account Details'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position='right'>
       
          <Menu.Item>
            <BeerConsumer>
            <Input onChange={updateFilter} icon='search' placeholder='Search...' />
            </BeerConsumer>
          </Menu.Item>
          <Menu.Item
            name='login'
            active={activeItem === 'login'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    )
  }
}