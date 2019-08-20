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
  createAppContainer,
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons';

import AddContactScreen from './screen/AddContactScreen';
import SettingsScreen from './screen/SettingsScreen';
import ContactListScreen from './screen/ContactListScreen';

const MainStack = createStackNavigator(
  {
    ContactList: ContactListScreen,
    AddContact: AddContactScreen,
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

MainStack.navigationOptions = {
  tabBarIcon: ({focused, tintColor}) => (
    <Ionicons
      name={`ios-contacts${focused ? '' : '-outline'}`}
      size={25}
      color={tintColor}
    />
  ),
};

// MainStack.navigationOptions = {
//   tabBarIcon: ({focused, tintColor}) => (
//     <Ionicons name={'ios-contacts'} size={25} color={tintColor} />
//   ),
// };

const MainTabs = createBottomTabNavigator(
  {
    Contacts: MainStack,
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
