import React, { Component } from 'react';
import { Form, Item, Input, Label, Button, Text } from 'native-base';

import buttonStyles from '../styles/button';
import textStyles from '../styles/text';

class LogInForm extends Component {
  state = {
    URL: 'sonoff-server.dev',
  };

  render() {
    return (
      <Form>
        <Item floatingLabel>
          <Label>Email</Label>
          <Input />
        </Item>
        <Item floatingLabel last>
          <Label>Password</Label>
          <Input secureTextEntry />
        </Item>
        <Button primary block style={buttonStyles.logIn}>
          <Text>
            Log in
          </Text>
        </Button>
        <Button transparent block style={buttonStyles.signUp}>
          <Text>
            Sign up
          </Text>
        </Button>
        <Text style={textStyles.connectedServer}>
          Connected to: {this.state.URL}
        </Text>
        <Button transparent info block style={buttonStyles.connectToOwnServer}>
          <Text>
            Connect to your own server
          </Text>
        </Button>
      </Form>
    );
  }
}

export default LogInForm;
