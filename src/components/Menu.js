import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom";


export default class MenuExampleSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState( { activeItem: name } )

  render() {
    const { activeItem } = this.state

    return (
      <Menu pointing fixed="top" inverted>
        <Link to="/home">
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}

          />
        </Link>
        <Link to="/beers">
          <Menu.Item
            name='beers'
            active={activeItem === 'beers'}
            onClick={this.handleItemClick}

          />
        </Link>

        {this.props.loggedIn ? 
        <Link to="/cart">
          <Menu.Item
            name='My Cart'                    
            active={activeItem === 'My Cart'}
            onClick={this.handleItemClick}
          />
        </Link>

        : null
        }
          {this.props.loggedIn ? 
          <Link to="/account">
          <Menu.Item
            name='Account Details'
            active={activeItem === 'Account Details'}
            onClick={this.handleItemClick}
          />
          </Link>
        : null
        }
      
        <Menu.Menu position='right'>
       
          <Menu.Item>
            <Input onChange={this.props.updateFilter} icon='search' placeholder='Search...' />
          </Menu.Item>
        
          {this.props.loggedIn ? 
             <Menu.Item
             name='logout'
             active={activeItem === 'logout'}
             onClick={(e) => {
               this.handleItemClick(e, this);
               this.props.logOut();
             }}
           />
          : <Link to="/login">
              <Menu.Item
                name='login'
                active={activeItem === 'login'}
                onClick={this.handleItemClick}
              />
          </Link>}
         
        </Menu.Menu>
      </Menu>
    )
  }
}