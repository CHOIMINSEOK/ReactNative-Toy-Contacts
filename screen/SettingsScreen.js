import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({focused, tintColor}) => (
      <Ionicons name={'ios-options'} size={25} color={tintColor} />
    ),
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Setting</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
