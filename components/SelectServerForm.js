import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { View } from 'react-native';
import { Form, Item, Input, Label, Button, Text } from 'native-base';
import { connect } from 'react-redux';

import config from '../config';

import { validateServerUrl } from '../validators/serverUrl';

import { changeServer } from '../store/actions/server';

import buttonStyles from '../styles/button';
import containerStyles from '../styles/container';
import textStyles from '../styles/text';

class SelectServerForm extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    goBack: PropTypes.func.isRequired,
    changeServer: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      url: props.url,
      error: null,
      dirty: false,
    };
  }

  handleURLChange = value => {
    const { dirty } = this.state;
    const error = dirty ? validateServerUrl(value).error : null;

    return this.setState({
      url: value,
      error,
    });
  };

  handleCancelPress = () => this.props.goBack();

  handleConnectPress = () => {
    const { url } = this.state;
    const { changeServer, goBack } = this.props;
    const { error } = validateServerUrl(url);

    if (error) {
      return this.setState({
        dirty: true,
        error,
      });
    }
    // TODO: check if selected server require authentication.
    changeServer(url);
    return goBack();
  };

  render() {
    const { url, error } = this.state;

    return (
      <Form style={containerStyles.form}>
        <Item stackedLabel error={Boolean(error)}>
          <Label>URL </Label>
          <Input
            placeholder={`${config.API_PROTOCOL}://${config.API_URL}`}
            value={url}
            onChangeText={this.handleURLChange}
            autoCapitalize="none"
          />
        </Item>
        {error ? <Text style={textStyles.error}>{error}</Text> : null }
        <View style={buttonStyles.inlineButtonsContainer}>
          <Button transparent onPress={this.handleCancelPress}>
            <Text>
              Cancel
            </Text>
          </Button>
          <Button transparent onPress={this.handleConnectPress}>
            <Text>
              Connect
            </Text>
          </Button>
        </View>
      </Form>
    );
  }
}

export default connect(state => ({
  url: state.server.url,
}), {
  changeServer,
})(SelectServerForm);
