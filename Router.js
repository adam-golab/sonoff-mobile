import { StackNavigator, SwitchNavigator } from 'react-navigation';

import HomeScreen from './screens/Home';
import LogInScreen from './screens/LogIn';
import SelectServerScreen from './screens/SelectServer';
import AuthLoadingScreen from './screens/AuthLoading';

const AppStack = StackNavigator({
  Home: HomeScreen,
});
const AuthStack = StackNavigator({
  LogIn: LogInScreen,
  SelectServer: SelectServerScreen,
}, {
  navigationOptions: {
    header: null,
  },
});

export default SwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);
