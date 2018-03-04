import { StackNavigator, SwitchNavigator, DrawerNavigator } from 'react-navigation';

import { routes } from './config';

import DevicesScreen from './screens/Devices';
import LogInScreen from './screens/LogIn';
import SelectServerScreen from './screens/SelectServer';
import AuthLoadingScreen from './screens/AuthLoading';

const AppStack = DrawerNavigator({
  [routes.app.DEVICES]: DevicesScreen,
});
const AuthStack = StackNavigator({
  [routes.auth.LOG_IN]: LogInScreen,
  [routes.auth.SELECT_SERVER]: SelectServerScreen,
}, {
  initialRouteName: routes.auth.LOG_IN,
  navigationOptions: {
    header: null,
  },
});

export default SwitchNavigator(
  {
    [routes.AUTH_LOADING]: AuthLoadingScreen,
    [routes.app.MAIN]: AppStack,
    [routes.auth.MAIN]: AuthStack,
  },
  {
    initialRouteName: routes.AUTH_LOADING,
  }
);
