/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AddContactScreen from './screen/AddContactScreen';
import SettingsScreen from './screen/SettingsScreen';
import ContactListScreen from './screen/ContactListScreen';
import LoginScreen from './screen/LoginScreen';
import ContactDetailScreen from './screen/ContactDetailScreen';

const MainStack = createStackNavigator(
  {
    ContactList: ContactListScreen,
    AddContact: AddContactScreen,
    ContactDetail: ContactDetailScreen,
  },
  {
    initialRouteName: 'ContactList',
    navigationOptions: {
      headerTintColor: '#a41034',
      headerStyle: {
        backgroundColor: '#fff',
      },
    },
  },
);

const MainTabs = createBottomTabNavigator(
  {
    Contacts: MainStack,
    Settings: SettingsScreen,
  },
  {
    tabBarOptions: {
      activeTintColor: '#a41034',
    },
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({tintColor}) => {
        const {routeName} = navigation.state;
        let iconName;
        if (routeName === 'Contacts') {
          iconName = 'ios-contacts';
        } else if (routeName === 'Settings') {
          iconName = 'ios-options';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
  },
);

const AppNavigator = createSwitchNavigator({
  Login: LoginScreen,
  Main: MainTabs,
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
