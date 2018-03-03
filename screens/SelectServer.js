import React, { Component } from 'react';
import { Container, Header, Body, Title, Content, Text } from 'native-base';

import SelectServerForm from '../components/SelectServerForm';
import containerStyles from '../styles/container';

export default class SelectServer extends Component {
  render() {
    return (
      <Container style={containerStyles.main}>
        <Header>
          <Body>
            <Title>Change server URL</Title>
          </Body>
        </Header>
        <Content padder contentContainerStyle={containerStyles.content}>
          <SelectServerForm />
        </Content>
      </Container>
    );
  }
}
