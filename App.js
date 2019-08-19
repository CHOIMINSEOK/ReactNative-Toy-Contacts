/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import Ionicons from 'react-native-vector-icons';

import AddContactScreen from './screen/AddContactScreen';
import SettingsScreen from './screen/SettingsScreen';

const MainTabs = createBottomTabNavigator(
  {
    Contacts: AddContactScreen,
    Settings: SettingsScreen,
  },
  {
    tabBarOptions: {
      activeTintColor: '#a41034',
    },
  },
);

const AppContainer = createAppContainer(MainTabs);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
