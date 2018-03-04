import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Header, Body, Title, Content, Left, Right, Button, Icon } from 'native-base';

import SelectServerForm from '../components/SelectServerForm';
import containerStyles from '../styles/container';

export default class SelectServer extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      goBack: PropTypes.func.isRequired,
    }).isRequired,
  };

  handleBackPress = () => this.props.navigation.goBack();

  render() {
    const { navigation: { goBack } } = this.props;

    return (
      <Container style={containerStyles.main}>
        <Header>
          <Left>
            <Button transparent onPress={this.handleBackPress}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Change server URL</Title>
          </Body>
          <Right />
        </Header>
        <Content padder contentContainerStyle={containerStyles.content}>
          <SelectServerForm goBack={goBack} />
        </Content>
      </Container>
    );
  }
}
