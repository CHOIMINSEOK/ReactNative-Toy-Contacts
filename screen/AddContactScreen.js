import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default class AddContactScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({focused, tintColor}) => (
      <Ionicons name={'ios-contacts'} size={25} color={tintColor} />
    ),
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Contacts</Text>
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
