import { DrawerNavigator, SwitchNavigator } from 'react-navigation';

import HomeScreen from './screens/Home';
import LogInScreen from './screens/LogIn';
import SelectServerScreen from './screens/SelectServer';
import AuthLoadingScreen from './screens/AuthLoading';

const AppStack = DrawerNavigator({
  Home: HomeScreen,
});
const AuthStack = DrawerNavigator({
  LogIn: LogInScreen,
  SelectServer: SelectServerScreen,
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
