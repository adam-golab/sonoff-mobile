import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Form, Item, Input, Label, Button, Text } from 'native-base';
import { connect } from 'react-redux';

import { getServerUrl } from '../store/selectors/server';

import buttonStyles from '../styles/button';
import textStyles from '../styles/text';
import containerStyles from '../styles/container';

class LogInForm extends Component {
  static propTypes = {
    actions: PropTypes.shape({
      onConnectToServerPress: PropTypes.func.isRequired,
    }).isRequired,
    url: PropTypes.string.isRequired,
  };

  render() {
    const { actions, url } = this.props;

    return (
      <Form style={containerStyles.form}>
        <Item floatingLabel>
          <Label>Email</Label>
          <Input />
        </Item>
        <Item floatingLabel>
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
          Connected to: {url}
        </Text>
        <Button style={buttonStyles.connectToOwnServer} onPress={actions.onConnectToServerPress} transparent info block>
          <Text>
            Connect to your own server
          </Text>
        </Button>
      </Form>
    );
  }
}

export default connect(state => ({
  url: getServerUrl(state),
}))(LogInForm);
