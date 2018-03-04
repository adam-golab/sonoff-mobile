import { StyleSheet } from 'react-native';

import { infoColor, errorColor } from './variables';

export default StyleSheet.create({
  connectedServer: {
    color: infoColor,
    marginTop: 70,
    textAlign: 'center',
  },
  error: {
    color: errorColor,
    marginTop: 5,
    marginLeft: 15,
    fontSize: 14,
  },
});
