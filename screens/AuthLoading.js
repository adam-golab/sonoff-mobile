import { Font } from 'expo'; // eslint-disable-line import/named
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

import { routes } from '../config';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class AuthLoading extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'), // eslint-disable-line camelcase
      Ionicons: require('@expo/vector-icons/fonts/Ionicons.ttf'),
    });
    this.checkAuth();
  }

  checkAuth = async() => {
    // const userToken = await AsyncStorage.getItem('userToken');
    // this.props.navigation.navigate(userToken ? 'App' : 'Auth');

    // TODO: remove this mocked auth check functionality
    // await new Promise(resolve => setTimeout(resolve, 2000));
    this.props.navigation.navigate(routes.auth.MAIN);
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }
}

