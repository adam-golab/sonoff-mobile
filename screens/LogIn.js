import React, { Component } from 'react';
import { Container, Header, Body, Title, Content } from 'native-base';

import LogInForm from '../components/LogInForm';
import containerStyles from '../styles/container';

export default class LogIn extends Component {
  render() {
    return (
      <Container style={containerStyles.main}>
        <Header>
          <Body>
            <Title>Log in</Title>
          </Body>
        </Header>
        <Content padder contentContainerStyle={containerStyles.content}>
          <LogInForm />
        </Content>
      </Container>
    );
  }
}
