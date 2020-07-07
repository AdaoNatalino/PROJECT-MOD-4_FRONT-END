import React, { Component } from 'react'
import { Form, Button, Checkbox } from 'semantic-ui-react'
import { Redirect } from "react-router-dom";


import API from '../API';

class LoginForm extends Component {

  state = {
    username: "",
    password: "",
  };
  
  handleInputChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  getToken = () => localStorage.getItem("jwt");

  handleCreate = (event) => {
    event.preventDefault();
    event.target.reset();
    const { username, password } = this.state;
    const userData = { username, password };
    API.createNewUser(userData)
  };

  handleLogin = (event) => {
    event.preventDefault();
    event.target.reset();
    const { username, password } = this.state;
    const userData = { username, password };
    API.logInUser(userData)
    this.props.changeLogInState();
    this.setState({ username: "", password: "" })
    if (this.props.changeLogInState()) {
      return <Redirect push to="/Home" />;
    }
  };


  logOut = () => {
    localStorage.removeItem("jwt");
    this.setState({
      loggedIn: false,
    });
  };
  
  render() {
    return (
      <Form onSubmit={this.handleLogin}>
      <Form.Field>
        <label>Username</label>
        <input id="username"
        onChange={this.handleInputChange}
        value={this.state.username}
        placeholder='Username' />
      </Form.Field>
      <Form.Field>
        <label>password</label>
        <input type="password" id="password"
        onChange={this.handleInputChange}
        value={this.state.password} placeholder='password' />
      </Form.Field>
      <Form.Field>
        <Checkbox label='I agree to the Terms and Conditions' />
      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>
    )
  }
}

export default LoginForm