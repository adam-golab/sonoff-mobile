import { StyleSheet, Platform, StatusBar } from 'react-native';

export default StyleSheet.create({
  main: {
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight,
      },
    }),
  },
  content: {
    justifyContent: 'center',
    flex: 1,
  },
  form: {
    marginTop: -65,
  },
});
