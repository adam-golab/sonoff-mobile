import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Header, Body, Title, Content, Text } from 'native-base';

import SelectServerForm from '../components/SelectServerForm';
import containerStyles from '../styles/container';

export default class SelectServer extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
    }).isRequired,
  };

  render() {
    const { navigation: { goBack } } = this.props;

    return (
      <Container style={containerStyles.main}>
        <Header>
          <Body>
            <Title>Change server URL</Title>
          </Body>
        </Header>
        <Content padder contentContainerStyle={containerStyles.content}>
          <SelectServerForm goBack={goBack} />
        </Content>
      </Container>
    );
  }
}
