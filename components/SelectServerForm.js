import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { View } from 'react-native';
import { Form, Item, Input, Label, Button, Text } from 'native-base';

import config from '../config';

import buttonStyles from '../styles/button';
import containerStyles from '../styles/container';

class LogInForm extends Component {
  static propTypes = {

  };

  render() {
    return (
      <Form style={containerStyles.form}>
        <Item stackedLabel>
          <Label>URL</Label>
          <Input placeholder={`${config.API_PROTOCOL}://${config.API_URL}`}/>
        </Item>
        <View style={buttonStyles.inlineButtonsContainer}>
          <Button transparent>
            <Text>
              Cancel
            </Text>
          </Button>
          <Button transparent>
            <Text>
              Connect
            </Text>
          </Button>
        </View>
      </Form>
    );
  }
}

export default LogInForm;
