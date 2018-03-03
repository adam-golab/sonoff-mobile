import { StackNavigator, SwitchNavigator } from 'react-navigation';

import HomeScreen from './screens/Home';
import LogInScreen from './screens/LogIn';
import AuthLoadingScreen from './screens/AuthLoading';

const AppStack = StackNavigator({
  Home: HomeScreen,
});
const AuthStack = StackNavigator({
  LogIn: LogInScreen,
});

export default SwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
    animationEnabled: true,
  }
);
