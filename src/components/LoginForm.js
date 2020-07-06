import React from 'react'
import { Form } from 'semantic-ui-react'

const LoginForm = () => (
  <Form>
    <Form.Group widths='equal'>
      <Form.Input
        fluid
        id='form-shorthand-input-username'
        label='username'
        placeholder='username'
      />
      <Form.Input
        fluid
        id='form-shorthand-input-password'
        label='password'
        placeholder='password'
      />
    </Form.Group>
  </Form>
)

export default LoginForm