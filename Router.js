import { DrawerNavigator, SwitchNavigator } from 'react-navigation';

import HomeScreen from './screens/Home';
import LogInScreen from './screens/LogIn';
import AuthLoadingScreen from './screens/AuthLoading';

const AppStack = DrawerNavigator({
  Home: HomeScreen,
});
const AuthStack = DrawerNavigator({
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
  }
);
