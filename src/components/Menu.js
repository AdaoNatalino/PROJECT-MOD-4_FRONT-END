import React, { Component } from 'react'
import { Input, Menu, Icon } from 'semantic-ui-react'

export default class MenuExampleSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

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
            <Input onChange={this.props.updateFilter} icon='search' placeholder='Search...' />
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