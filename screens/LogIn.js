import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Container, Header, Body, Title, Content } from 'native-base';

import LogInForm from '../components/LogInForm';
import containerStyles from '../styles/container';

export default class LogIn extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }),
  };

  actions = {
    onConnectToServerPress: () => this.props.navigation.navigate('SelectServer'),
  };

  render() {
    return (
      <Container style={containerStyles.main}>
        <Header>
          <Body>
            <Title>Log in</Title>
          </Body>
        </Header>
        <Content padder contentContainerStyle={containerStyles.content}>
          <LogInForm actions={this.actions}/>
        </Content>
      </Container>
    );
  }
}
